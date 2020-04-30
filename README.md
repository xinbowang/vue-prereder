# vue-cli-4  预渲染无法拆分: 无法用html-webpack-plugin做cdn + 拆分vendors.js
## 问题暂时无法解决：猜测预渲染器不能请求第三方文件【即：CDN地址】

> prerender-spa-plugin 与 configureWebpack下```externals```不能同时使用。

> prerender-spa-plugin 与 chainWebpack下```config.plugin('html')```不能同时使用。
