const Branch = require("../model/BranchModel");

const getAllBranches = async (req, res) => {
  const branches = await Branch.find({});
  res.status(200).json(branches);
};

const createBranch = async (req, res) => {
  res.status(200).json(branch);
};

module.exports = {
  getAllBranches,
  createBranch,
};
