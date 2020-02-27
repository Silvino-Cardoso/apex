const admin = require("firebase-admin");

const serviceAccount = require("../../acessoBanco.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://acompanhamento-nutricional3.firebaseio.com"
});

module.exports = admin.firestore()