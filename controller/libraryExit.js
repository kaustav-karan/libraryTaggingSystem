const logModel = require("../model/logModel");

const libraryExit = async (req, res) => {
  const { id, status, token } = req.body;
  if (token !== process.env.BEARER_TOKEN_SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const log = new logModel({ id, status });
  await log.save();
  res.status(201).json({ message: "Log created successfully" });
};

module.exports = libraryExit;
