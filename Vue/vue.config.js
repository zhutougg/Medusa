const path = require('path')
module.exports = {
  lintOnSave: false,
  //配置跨域请求
  devServer: {
    open: true,    //是否自动打开浏览器
    host: '0.0.0.0',
    port: 8082,    //启动端口号
    https: false,    //是否开启https
    hotOnly: false,
    proxy: { // 配置跨域
      '/api': {
        target: 'http://localhost:9999',
        ws: true,
        changOrigin: true,    //是否开启代理,在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // before: app => { }
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       lessOptions: {
  //         modifyVars: {
  //           'primary-color': '#51c51a',
  //           'table-header-color': '#51c51a'
  //         },
  //         javascriptEnabled: true,
  //       },
  //     },
  //   },
  // },
  /* 注意sass，scss，less的配置 */
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#51c51a',
            'table-header-color': '#51c51a',
            'link-color': '#1DA57A',// 链接色
            'border-radius-base': '2px',// 组件/浮层圆角
          },
          javascriptEnabled: true,
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias  // 为指定目录设置全局别名
      .set('@', path.resolve('src'))
  }

  // configureWebpack: {
  //     module: {
  //         rules: [
  //             {
  //                 test: /\.svg$/,
  //                 loader: 'vue-svg-loader',
  //             },
  //         ],
  //     }
  // },
  // //将 svg 图标作为 Vue 组件导入
  // chainWebpack: (config) => {
  //     const svgRule = config.module.rule('svg');

  //     svgRule.uses.clear();

  //     svgRule
  //         .use('babel-loader')
  //         .loader('babel-loader')
  //         .end()
  //         .use('vue-svg-loader')
  //         .loader('vue-svg-loader');
  // },


}