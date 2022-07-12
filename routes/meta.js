var router = require('express').Router();
const router = express.Router()
const { apes } = require('../src/apes.js')
/*
router.get('/', function(req, res) {
    res.send('Go away');
});
*/
router.get('/', function(req, res, next) {
    const { name, image, meta, edition, BACKGROUND, FUR, CLOTHES, EYES, MOUTH, HATS, EARRING, BACKGROUND_Rarity, FUR_Rarity, CLOTHES_Rarity, EYES_Rarity, MOUTH_Rarity, HATS_Rarity, EARRING_Rarity, Total_Statistical_Rarity, token, rank } = req.query;
    let results = [...apes];
    if (name) {
      results = results.filter(r => r.name === name);
    }
  
    if (edition) {
      results = results.filter(r => +r.edition === +edition);
    }
  
    if (rank) {
      results = results.filter(r => +r.rank === +rank)
    }
    res.json(results);
  });

module.exports = router;