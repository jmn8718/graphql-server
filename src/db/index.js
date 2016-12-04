import mongoose from 'mongoose';

const MONGO_ENDPOINT = '172.17.0.2';
const MONGO_PORT = 27017;
const MONGO_DB = 'graphql';

mongoose.connect(`mongodb://${MONGO_ENDPOINT}:${MONGO_PORT}/${MONGO_DB}`)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected correctly to server");
});

export default db;
