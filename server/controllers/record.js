const createRecordResponse = require('../util/record-response');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Record = require('../models/record');

const { validationResult } = require('express-validator/check');

const Op = Sequelize.Op;

const R = require('ramda');

exports.getRecords = async (req, res, next) => {
  try {
    const searchRecord = req.query.record;

    const likeQuery = { [Op.like]: `%${searchRecord}%` };

    const query = searchRecord
      ? {
          where: {
            [Op.or]: [{ artist: likeQuery }, { name: likeQuery }]
          }
        }
      : {};

    const records = await Record.findAll(query);

    const musics = await Promise.all(records.map(record => record.getMusic()));

    const response = records.map((record, index) => {
      return createRecordResponse(record, musics[index]);
    });

    res.status(200).send(response);
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

exports.getRecord = async (req, res, next) => {
  try {
    const musics = await req.record.getMusic();

    res.status(200).send(createRecordResponse(req.record, musics));
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

exports.postRecord = async (req, res, next) => {
  const { musics, ...record } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send(errors.array());
  }

  try {
    const isRecordInDb = await Record.findOne({
      where: { name: record.name, artist: record.artist }
    });

    if (isRecordInDb) {
      return res.status(422).send({ message: 'Disco já cadastrado' });
    }

    await sequelize.transaction(async t => {
      const recordResponse = await Record.create(record, { transaction: t });

      const mappedMusic = musics.map(m =>
        recordResponse.createMusic({ name: m.name }, { transaction: t })
      );

      return await Promise.all(mappedMusic);
    });
    res.status(200).send();
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

exports.deleteRecord = async (req, res, next) => {
  try {
    await req.record.destroy();

    res.status(200).send();
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

exports.updateRecord = async (req, res, next) => {
  const { musics, ...record } = req.body;

  try {
    await sequelize.transaction(async t => {
      await req.record.update(R.pick(['artist', 'imageUrl', 'name'], record), {
        transaction: t
      });

      const recordMusics = await req.record.getMusic();

      const mappedRecordMusics = recordMusics.map(music => R.pick(['id', 'name'], music));

      if (!R.equals(mappedRecordMusics, musics)) {
        await req.record.removeMusic(mappedRecordMusics.map(music => music.id), { transaction: t });

        const mappedMusic = musics.map(m =>
          req.record.createMusic({ name: m.name }, { transaction: t })
        );

        return await Promise.all(mappedMusic);
      }
    });

    res.status(200).send();
  } catch (e) {
    res.status(500).send({ error: e });
  }
};
