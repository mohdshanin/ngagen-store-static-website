const DB_COLLECTIONS = {
  LEADS: "LEADS",
};

const REGEX = {
  EMAIL: "^[\\w.-]+@([\\w-]+.)+[\\w-]{2,4}$",
};

const ENV = {
  NGAGEN_STORE_MONGODB_URI: process.env.NGAGEN_STORE_MONGODB_URI,
};

module.exports = {
  ENV,
  DB_COLLECTIONS,
  REGEX,
};
