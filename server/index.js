const http = require("http");

http
  .createServer((req, res) => {
    // 非简单请求指：
    // 1.method 是 GET POST HEAD 且不带自定义request header
    // 2.content-type 为 application/x-www-form-urlencoded multipart/form-data text/plain

    // 允许跨域请求的前端域名
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);

    // 非简单请求下允许的额外请求头
    res.setHeader("Access-Control-Allow-Headers", "content-type, x-key");

    // cookie 设置
    res.setHeader("Access-Control-Allow-Credentials", true);

    // 允许前端获取的响应头
    res.setHeader("Access-Control-Expose-Headers", "x-version");

    // 非简单请求场景下 预检请求的缓存时间 单位 s
    res.setHeader("Access-Control-Max-Age", 300);

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200, {
      "Content-Type": "application/json",

      // 向客户端设置一个Cookie
      "Set-Cookie": "myCookie=test",

      // 自定义 res header
      "x-version": 1.0,
    });

    res.end(JSON.stringify({ name: "zzkuai", age: 24 }));
  })
  .listen(3000, "127.0.0.1");
