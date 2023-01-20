const joi = require("joi");

const userValidate = (data) => {
  const schema = joi.object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: joi
      .string()
      .min(8)
      .pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)
      .required(),
    confirmPassword: joi.ref("password"),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    address: joi.string().required(),
    phoneNumber: joi.number().required(),
    gender: joi.string().valid("male", "female", "other").required(),
    birthDate: joi.date().required(),
    type: joi.string().valid("business", "individual").required(),
  });

  return schema.validateAsync(data);
};

module.exports = userValidate;