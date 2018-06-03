const path = require('path');

module.exports = {
    // 入口文件
    entry: {
        // 里面的entry可以随便起名字，外面的是固定的
        entry: './src/entry.js'
        // entry: './index.html'
    },
    // 出口文件的配置项
    output: {
        // 打包的文件位置
        path: path.resolve(__dirname, 'dist'),
        // 打包的文件名称
        filename: 'bundle.js'
    },
    // 模块,例如编译css,js,转换图片，压缩，合并
    module: {},
    // 插件，用于生产模板和各项功能
    plugins: [],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本目录结构
        // contentBase: path.resolve(__dirname, 'dist'),
        contentBase: './',
        // 服务器的IP地址，可以是IP也可以是localhost
        host: 'localhost',
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口
        port: 8089
    },
    mode: 'development'
}