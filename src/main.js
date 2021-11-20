/*
 * @Author: your name
 * @Date: 2021-10-27 23:05:45
 * @LastEditTime: 2021-11-20 21:06:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\main.js
 */
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

// 第三种方式
// mock开关
const mock =false;
if(mock) {
  require('./mock/api');
}

// 根据前端的跨越方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';//east-mock的情况下api换成easy-mock网页中的地址
axios.defaults.timeout=8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path=location.hash;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) {
    if(path !='#/index'){
      window.location.href='/#/login'; 
    }
    return Promise.reject(res);
  }else{
    Message.warning(res.msg)
    return Promise.reject(res);
  }
});

Vue.use(VueAxios,axios)
Vue.use(VueCookie);
Vue.use(Message);
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message=Message;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
