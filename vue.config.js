/*
 * @Author: your name
 * @Date: 2021-10-29 22:15:13
 * @LastEditTime: 2021-11-04 12:44:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\vue.config.js
 */
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}