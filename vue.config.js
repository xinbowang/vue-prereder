/*
 * @Author: your name
 * @Date: 2020-04-16 16:38:24
 * @LastEditTime: 2020-04-17 19:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \by-object\vue.config.js
 */
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const ROUTERS = require('./src/router/router.config');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
// const CDNS = {
//     // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
//     externals: {
//         'vue': 'Vue',
//         'vuex': 'Vuex',
//         'vue-router': 'VueRouter',
//         'axios': 'axios',
//         'view-design': 'ViewUI',
//         'iview': 'ViewUI'
//     },
//     // cdn的css链接
//     css: [
//         './pub/styles/iview.min.css'
//     ],
//     // cdn的js链接
//     js: [
//         'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
//         'https://cdn.bootcss.com/vuex/4.0.0-alpha.1/vuex.min.js',
//         'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
//         'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
//         './pub/iview.min.js',
//     ]
// }

const getStaticRoutes = (routes = [], root_path = '') => {
    let rs = [];
    routes.forEach(elem => {
        let path = root_path + elem.path;
        if (elem.children) {
            let rss = getStaticRoutes(elem.children, path.endsWith('/') ? '' : path);
            rs = rs.concat(rss);
        } else {
            if (elem.isStatic) {
                rs.push(path);
            };
        }
    });
    return rs;
};

const isStatic = getStaticRoutes(ROUTERS);

console.log('静态路由:', isStatic);

module.exports = {
    //  基本路径
    publicPath: './',
    //  构建时的输出目录
    outputDir: 'dist',
    devServer: {
        open: process.platform === 'darwin',
        // host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
    },
    productionSourceMap: false,
    configureWebpack: config => {
        if (IS_PROD) {
            config.plugins.push(
                new PrerenderSpaPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: isStatic,
                    postProcess(ctx) {
                        // ctx.route = ctx.originalRoute;
                        // ctx.html = ctx.html.split(/>[\s]+</gim).join('><');
                        if (ctx.route.endsWith('.html')) {
                            ctx.outputPath = path.join(__dirname, 'dist', ctx.route);
                        }
                        return ctx;
                    },
                    minify: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        decodeEntities: true,
                        keepClosingSlash: true,
                        sortAttributes: true
                    },
                    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
                        captureAfterTime: 5000,
                        renderAfterTime: 5000,
                        // 需要注入一个值，这样就可以检测页面当前是否是预渲染的
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        // 视图组件是在API请求获取所有必要数据后呈现的，因此我们在dom中存在“data view”属性后创建页面快照
                        renderAfterDocumentEvent: "render-event"
                    })
                })
            );
        }
        // config.externals = IS_PROD ? CDNS.externals : {};
    },
    chainWebpack: config => {
        // 打包分析
        if (IS_PROD) {
            // config.plugin('html').tap(args => {
            //     // 生产环境或本地需要cdn时，才注入cdn
            //     args[0].cdns = CDNS;
            //     return args;
            // })
            config.plugin("webpack-report").use(BundleAnalyzerPlugin, [{
                analyzerMode: "static"
            }]);
        }
    }
}