const admin = require('firebase-admin');
const serviceAccount = require('./Key/serviceAccountKey1.json');
const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
module.exports = db;