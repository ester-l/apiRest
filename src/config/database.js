const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://esterlimabar_db_user:j4vHtBUxk4aaNvs4@cluster0.3udlhsi.mongodb.net/Cadastro?appName=Cluster0';

async function connectDatabase() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB conectado com sucesso.');
}

module.exports = connectDatabase;