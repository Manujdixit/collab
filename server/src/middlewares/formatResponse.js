const formatResponse = (req, res, next) => {
  res.formatResponse = (statusCode, message, data = null, error = null) => {
    res.status(statusCode).json({
      success: statusCode < 400,
      message,
      data,
      error,
    });
  };
  next();
};

export default formatResponse;
