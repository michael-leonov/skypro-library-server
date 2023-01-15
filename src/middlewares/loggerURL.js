const loggerURL = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

export default loggerURL;
