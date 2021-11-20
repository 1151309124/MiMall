/*
 * @Author: your name
 * @Date: 2021-10-27 23:05:45
 * @LastEditTime: 2021-11-20 21:43:29
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \htmle:\vue项目\mimall\babel.config.js
 */
module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
