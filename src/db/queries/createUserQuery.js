const Customer = require("../../models/customer");

const createUserQuery = (body) => {
  return Customer.create({ ...body });
}

module.exports = createUserQuery;