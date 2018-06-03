# testWebpackProxy

# 建这个项目的原因

在实际开发过程中, 有些小的项目用不到webpack这一套东西, 可能只是几个简单的html, js, css， 完全没必要用一整套的webpack工具。

但==有的页面中存在ajax请求, 前端开发就需要搭建一套服务(tomcat, nginx, xampp之类的)来发送ajax请求, 并查看实际效果==

这个项目是用webpack的webpack-dev-server搭了简单的服务器, 这样可以解决跨越问题, 


(写这个md的时候突然想到为什么不用node来做一个server呢，node不就干这个的吗~~~~
改天试一下!)



## 一些关键点：

- webpack的entry,  output一定要配置。且路径一定要对。

- 输出路径一定要对, 不一定要指向dist路径, 可以指向根目录下的index.html

webpack4注意事项：
一定要安装webpack-cli, webpack.config.js里要配置mode参数。