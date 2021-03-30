const { createProxyMiddleware } = require("http-proxy-middleware");

<<<<<<< HEAD
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/',
        {
            target: "http://192.168.1.30:11950",
            changeOrigin:true,
            pathRewrite: {
                "^/api": "/"
            },
            "secure":true 	//如果访问的是https类的链接，就需要设置为true
        }))
	
}
=======
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/", {
      target: "http://192.168.1.30:11950",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
      secure: true, //如果访问的是https类的链接，就需要设置为true
    })
  ),
    app.use(
      createProxyMiddleware("/apc/", {
        target: "http://192.168.1.30:11990",
        changeOrigin: true,
        pathRewrite: {
          "^/apc": "/",
        },
        secure: true, //如果访问的是https类的链接，就需要设置为true
      })
    );
};
>>>>>>> e41fb7320964f39f8f9f6f2b0048af769f063a0b
