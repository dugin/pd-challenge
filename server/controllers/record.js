const Record = require('../models/record');

exports.getRecords = (req, res, next) => {};

exports.getRecord = (req, res, next) => {};

exports.postRecord = (req, res, next) => {
  console.log('req ', req.body);

  res.status(200).send({ msg: 'Show de bola' });
};

exports.deleteRecord = (req, res, next) => {};
