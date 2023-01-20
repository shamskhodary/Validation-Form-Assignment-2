const registerIndividual = require("../controllers/register");

const router = require("express").Router();
router.get('/hello', (req, res) => {
  res.json({ msg: 'hiii there' })
})
router.post("/register", registerIndividual);

module.exports = router;
