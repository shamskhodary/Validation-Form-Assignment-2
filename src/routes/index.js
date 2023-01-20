const registerIndividual = require("../controllers/register");
const checkType = require("../middleware/checkType");

const router = require("express").Router();
router.get('/hello', (req, res) => {
  res.json({ msg: 'hiii there' })
})
router.post("/customer", checkType, registerIndividual);

module.exports = router;
