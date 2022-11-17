const mongoose = require("mongoose");

function getNgagenClientConnection() {
  try {
    return mongoose.createConnection(process.env.NGAGEN_STORE_MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { ngagenStoreDB: getNgagenClientConnection() };
