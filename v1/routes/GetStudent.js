//Маршрутизатор для student
const express = require('express');

const studentController = require('../../controllers/studentController');
const router = express.Router();

router.get('/student', studentController.getStudent);


module.exports = router;