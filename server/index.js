const express = require('express');

const app = express();

app.use('*', (req, res, next) => {
  res.set({
    // 允许跨域请求的前端域名
    'Access-Control-Allow-Origin': req.headers.origin,

    // 允许跨域请求方法
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',

    // 非简单请求下允许的额外请求头
    'Access-Control-Allow-Headers': 'content-type, x-key',

    // cookie 设置
    'Access-Control-Allow-Credentials': true,

    // 允许前端获取的响应头
    'Access-Control-Expose-Headers': 'x-version',

    // 非简单请求场景下 预检请求的缓存时间 单位 s
    'Access-Control-Max-Age': 10,

    'Content-Type': 'application/json',

    // 自定义 res header
    'x-version': 1.0,
  });

  res.cookie('myCookie', 'test');

  next();
});

app.get('/', (req, res) => {
  res.json({
    name: 'zzkuai',
    age: 24,
  });
});

app.listen(3000, '127.0.0.1', () => {
  console.log(`server start`);
});
