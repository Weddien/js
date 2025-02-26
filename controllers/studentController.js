const StudentService = require('../db/student')
const getStudent = (req, res) => {
    const GetStudent = StudentService.GetStudent();
    res.send({status: 'OK', data: GetStudent});
};

module.exports = {getStudent};