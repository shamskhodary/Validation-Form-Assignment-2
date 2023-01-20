const checkType = (req, res, next) => {
  const { type } = req.body;

  if (type === 'business') {
    next();
  } else if (type === 'individual') {
    next();
  } else {
    res.status(400).send({ message: 'Invalid customer type' })
  }
}

module.exports = checkType;