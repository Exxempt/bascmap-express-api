const express = require('express')
const router = express.Router()
const User = require('../modules/user')

//get all
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    }
    catch (err) {
        res.status(500).json({ message: err.message})
    }
})

//get 1
router.get('/:id', getUser, (req, res) => {
    res.json(res.subsr)
})

//create 1
router.post('/', async (req, res) => {
    const sub = new User({
        wallet: req.body.wallet,
        country: {
            city: req.body.country.city,
            country: req.body.country.country,
            latitude: req.body.country.latitude,
            longitude: req.body.country.longitude
        },
        name: req.body.name,
        twitter: req.body.twitter,
        discord: req.body.discord,
        tokens: req.body.tokens,
        pfp: req.body.pfp,
        signatureMessage: {
            message: req.body.signatureMessage.message,
            encodedSignature: req.body.signatureMessage.encodedSignature,
            publicKey: req.body.signatureMessage.publicKey,
        },
    })
    try {
        const newUser = await sub.save()
        res.status(201).json(newUser)
    }
    catch (err) {
        res.status(400).json({ message: err.message})
    }
})

//update 1
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.wallet != null) {
        res.subsr.wallet = req.body.wallet
    }
    if (req.body.name != null) {
        res.subsr.name = req.body.name
    }
    if (req.body.twitter != null) {
        res.subsr.twitter = req.body.twitter
    }
    if (req.body.discord != null) {
        res.subsr.discord = req.body.discord
    }
    if (req.body.country != null) {
        res.subsr.country = req.body.country
    }
    if (req.body.tokens != null) {
        res.subsr.tokens = req.body.tokens
    }
    try {
        const updatedUser = await res.subsr.save()
        res.json(updatedUser)
    }
    catch (err) {
        res.status(400).json({ message: err.message})
    }
})

//delete 1
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.subsr.remove()
        res.json({ message: 'Deleted User'})
    }
    catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getUser(req, res, next) {
    let subsr
    try {
        subsr = await User.findById(req.params.id)
        if (subsr == null) {
            return res.status(404).json({ message: 'Cannot find id' })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.subsr = subsr
    next()
}

module.exports = router