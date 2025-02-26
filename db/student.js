const StudentDB = require('./student.json');

const GetStudent = () => {
    return StudentDB.student;
};

module.exports = { GetStudent };
