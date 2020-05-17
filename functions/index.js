const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.createUser = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => {
      const newValue = snap.data();

      if (newValue.sender === 'user') {
        db.collection('messages').doc().set({...newValue, sender: newValue.chatId});
      }
    });