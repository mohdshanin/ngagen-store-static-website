const mongoose = require("mongoose");
const { ngagenStoreDB } = require("../utils/connection");
const { LEADS } = require("../utils/constants").DB_COLLECTIONS;

const collectionName = LEADS;

function leadsModel() {
  const schema = new mongoose.Schema({
    email: String,
    createdAt: Date,
    updatedAt: Date,
  });
  const model = ngagenStoreDB.model(collectionName, schema, collectionName);
  return model;
}

module.exports = leadsModel;
