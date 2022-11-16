const leads = require("../models/leasds")();

async function create({ email }) {
  return leads.create({
    email,
    createdAt: new Date(),
    updatedAt: null,
  });
}

async function findOne({ email }) {
  return leads.findOne({ email }).exec();
}

module.exports = () => ({ create, findOne });
