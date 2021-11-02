<!--
 * @Author: your name
 * @Date: 2021-10-27 23:05:45
<<<<<<< HEAD
 * @LastEditTime: 2021-11-02 14:53:30
=======
 * @LastEditTime: 2021-11-02 22:28:19
>>>>>>> Nav-Header-1
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\App.vue
-->
<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index.js'
export default {
  name: 'App',
  components: {

  },
  data (){
    return {
      res:{}
    }
  },
  mounted () {
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1});
    //  storage.setItem('abc',{a:1},'user');
    //  storage.clear('a','user');

  // 1.本地加载请求静态json文件的形势
  // this.axios.get('/mock/user/login').then((res)=>{
  //   this.res=res;
  // });

  // 2.通过easy-mock平台实现数据mock
  // this.axios.get('/user/login').then((res)=>{
  //   this.res=res;
  // });

  // 3.本地集成mockjs实现数据mock
  // this.axios.get('/user/login').then((res)=>{
  //   this.res=res;
  // });



  }
}
</script>

<style>
<<<<<<< HEAD
@import './assets/scss/reset.scss'
=======
@import './assets/scss/reset.scss' 
>>>>>>> Nav-Header-1
</style>
