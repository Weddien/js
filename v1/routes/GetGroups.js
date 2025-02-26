const express = require('express');

const groupsController = require('../../controllers/groupsController');
const router = express.Router();

router.get('/groups', groupsController.getAllGroups);

module.exports = router;