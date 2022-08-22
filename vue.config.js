module.exports = {
    runtimeCompiler: true,
    lintOnSave:false, //关闭语法检查
    publicPath: '/',
    devServer: {
        host: 'localhost',  // 自定义域名，需要在hosts文件里配置
        port: 8080,
        open: true,
        https: false,
        // 设置开发接口代理
        proxy: {
            // 服务一
            "/api": {
                // target 是后端给你的服务，可以通过ip配置，也可以通过域名配置
                // 当请求接口的时候遇到 "/api" 会自动转为target里的服务，解决跨域
                // 配置域名
                target:'http://101.132.139.188:9012/',//本地跑通的网易云api地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            },
            // 服务二
            // "/api/v1": {
            //   这里是通过ip来配置
            //   target: 'http://10.10.2.173:8080',
            //   ws: true,
            //   changeOrigin: true,
            // },
        },
    },
    // 配置快捷访问路径
    configureWebpack: {
        resolve: {
          alias: {
            'assets':'@/assets',
            'components':'@/components',
            'api':'@/api',
            'utils':'@/utils'
          }
        }
      }
}
