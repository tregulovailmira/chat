module.exports.errorHandler = (error, req, res, next) => {
  console.log(error);
  res.status(error?.status ?? 500).send({
    data: null,
    errors: [{ title: error?.message ?? 'Enternal server error' }],
    meta: null
  });
};
