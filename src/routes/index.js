const registerIndividual = require("../controllers/registerIndividual");
const checkType = require("../middleware/checkType");

const router = require("express").Router();

router.post("/customer", checkType, registerIndividual);

module.exports = router;
