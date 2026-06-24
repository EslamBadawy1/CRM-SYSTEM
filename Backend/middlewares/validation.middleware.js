const validationMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errors: error.details.map((err) => err.message),
        });
      }

      // replace request body with validated data
      req.body = value;

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

module.exports = validationMiddleware;