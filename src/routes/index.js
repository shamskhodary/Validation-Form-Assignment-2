const registerIndividual = require("../controllers/register");

const router = require("express").Router();

router.post("/register", registerIndividual);

module.exports = router;
