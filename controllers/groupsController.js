const GroupsService = require('../db/groups')
const getAllGroups = (req, res) => {
    const AllGroups = GroupsService.getAllGroups(); 
    res.send({status: 'OK', data: AllGroups});
}; 

module.exports = {getAllGroups};