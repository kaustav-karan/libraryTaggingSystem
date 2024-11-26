const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
  },
});

const logModel = mongoose.model("log", logSchema);
module.exports = logModel;