const createUserQuery = require("../db/queries/createUserQuery");
const validation = require("../utils/userValidation");
const CustomError = require("../utils/customError");
const Customer = require("../models/customer");
const createBusinessQuery = require("../db/queries/createBusinessQuery");
const businessValidate = require("../utils/businessValidate");

const registerIndividual = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      gender,
      birthDate,
      phoneNumber,
      address,
      companyName,
      taxId,
      type,
    } = req.body;

    await validation({
      email,
      password,
      firstName,
      lastName,
      gender,
      birthDate,
      phoneNumber,
      address,
      type,
    });

    const isExisted = await Customer.findOne({ where: { email } });

    if (isExisted) {
      throw new CustomError("This email already exists", 400);
    }

    if (type === "individual") {
      const customer = await createUserQuery({
        email,
        password,
        firstName,
        lastName,
        gender,
        birthDate,
        address,
        phoneNumber,
        type,
      });

      res.json({ data: customer, message: 'Signed up successfully' });
    }

    if (type === 'business') {
      const customer = await createUserQuery({
        email,
        password,
        firstName,
        lastName,
        gender,
        birthDate,
        address,
        phoneNumber,
        type,
      });
      await businessValidate({ taxId, companyName });

      await createBusinessQuery({ taxId, companyName, customerId: customer.id });
      res.json({ data: customer, message: 'Signed up successfully' })
    }

  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.json(error.message);
    }

    if (error.name === "ValidationError") {
      res.json({ message: error.details[0].message });
    }

    res.status(error.status || 500).json({
      error: error.message
    });
  }
};

module.exports = registerIndividual;
