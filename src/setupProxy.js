module.exports = (app) => {
  app.use((req, res, next) => {
    // const allowedOrigins = [
    //   process.env.REACT_APP_JAPAN_HOST,
    //   https://original-covid-app-japan.web.app/asset-manifest.json,
    // ];
    // const { origin } = req.headers;
    // if (allowedOrigins.includes(origin)) {
    // console.log(process.env.REACT_APP_JAPAN_HOST);
    res.setHeader('Access-Control-Allow-Origin', '*');
    // }
    next();
  });
};
