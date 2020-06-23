const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/cpq", {
      target: "http://192.168.166.27:8025",//跨域地址
      changeOrigin: true
    })
  );
};