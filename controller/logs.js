const logModel = require("../model/logModel");

const getAllLogs = async (req, res) => {
    const logs = await logModel.find();
    res.json(logs);
}

module.exports = getAllLogs;