const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({    
    wallet: String,
    country: {
        city: String,
        country: String,
        latitude: Number,
        longitude: Number
    },
    name: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    discord: {
        type: String
    },
    timeStamp: {
        type: String,
        required: true,
        default: Date.now
    },
    tokens: [],
    pfp: {
        type: String
    },
    signatureMessage: {
        message: String,
        encodedSignature: String,
        publicKey: String,
      }
    
})

module.exports = mongoose.model('User', UserSchema)