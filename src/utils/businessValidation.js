const joi = require("joi");

const businessValidation = (data) => {
  const date = new Date();
  const validDate = date.setFullYear(date.getFullYear() - 18)

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
    gender: joi.string().valid("male", "female").required(),
    birthDate: joi.date().min(validDate).required().message({ " any.required": "You must be over 18 years" }),
    companyName: joi.string().required(),
    taxId: joi.number().required(),
    type: joi.string().valid("business", "individual").required(),
  });

  return schema.validateAsync(data);
};

module.exports = businessValidation;
