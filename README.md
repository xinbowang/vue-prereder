# vue-cli-4  预渲染无法拆分
## 问题暂时无法解决

prerender-spa-plugin 与 configureWebpack下`externals` 不能同时使用。
prerender-spa-plugin 与 chainWebpack下`config.plugin('html')`不能同时使用。