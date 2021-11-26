<!--
 * @Author: your name
 * @Date: 2021-11-26 18:50:28
 * @LastEditTime: 2021-11-26 18:50:50
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \htmle:\vue项目\mimall\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      
    }
  },
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
  mounted(){
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
