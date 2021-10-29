/*
 * @Author: your name
 * @Date: 2021-10-27 23:05:45
 * @LastEditTime: 2021-10-29 22:51:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\main.js
 */
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

// 根据前端的跨越方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = '/api';
axios.defaults.timeout=8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL;
// 借口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) {
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
