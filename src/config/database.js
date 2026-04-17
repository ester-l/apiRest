const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://esterlimabar_db_user:3ydC45CgeKI3q9YO@cadastro.kmhwd8x.mongodb.net/cadastro?appName=cadastro';

async function connectDatabase() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB conectado com sucesso.');
}

module.exports = connectDatabase;