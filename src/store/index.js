/*
 * @Author: your name
 * @Date: 2021-11-10 20:49:56
 * @LastEditTime: 2021-11-10 21:28:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \htmle:\vue项目\mimall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);

const state ={
    username:'',//登录用户名
    cartCount:0//购物车商品数量
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});