const Business = require("../../models/business");

const createBusinessQuery = (companyName, taxId, customerId) => {
  return Business.create(companyName, taxId, { where: { customerId } });
};

module.exports = createBusinessQuery;
