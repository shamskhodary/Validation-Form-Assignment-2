const joi = require("joi");

const businessValidate = (data) => {
  const schema = joi.object({
    companyName: joi.string().required(),
    taxId: joi.number().required(),
  });

  return schema.validateAsync(data);
};

module.exports = businessValidate;
