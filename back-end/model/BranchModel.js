const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  branchName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
});

module.exports = mongoose.model("Branch", branchSchema);
