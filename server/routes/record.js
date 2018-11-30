const express = require('express');

const recordController = require('../controllers/record');

const router = express.Router();

router.get('/records', recordController.getRecords);

router.delete('/record', recordController.deleteRecord);
router.post('/record', recordController.postRecord);

router.get('/record/:recordId', recordController.getRecord);

module.exports = router;
