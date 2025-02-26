const GroupDB = require('./groups.json');

const getAllGroups = () => {
    return GroupDB.groups;
};

module.exports = { getAllGroups };