const express = require('express');

const recordController = require('../controllers/record');

const isThereARecord = require('../middlewares/record');
const inputValidation = require('../middlewares/validation');

const router = express.Router();

router.get('/records', recordController.getRecords);

router.post('/record', inputValidation, recordController.postRecord);

router.get('/record/:recordId', isThereARecord, recordController.getRecord);
router.delete('/record/:recordId', isThereARecord, recordController.deleteRecord);
router.put('/record/:recordId', inputValidation, isThereARecord, recordController.updateRecord);

module.exports = router;
