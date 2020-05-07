const functions = require('firebase-functions');

exports.uselessData = functions.https.onRequest((req, res) => {
  res.status(200).json({data: functions.config()});
});