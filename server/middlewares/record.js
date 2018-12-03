const Record = require('../models/record');

async function isThereARecord(req, res, next) {
  try {
    const responseRecord = await Record.findByPk(req.params.recordId);

    if (!responseRecord) {
      return res.status(422).send({ message: 'Disco não encontrado', type: 'RECORD_NOT_FOUND' });
    }

    req.record = responseRecord;
    next();
  } catch (e) {
    res.status(500).send({ error: e });
  }
}

module.exports = isThereARecord;
