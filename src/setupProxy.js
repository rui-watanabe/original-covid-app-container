module.exports = (app) => {
  app.use((req, res, next) => {
    const allowedOrigins = [
      process.env.REACT_APP_JAPAN_HOST,
      process.env.REACT_APP_WORLD_HOST,
    ];
    const { origin } = req.headers;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    next();
  });
};
