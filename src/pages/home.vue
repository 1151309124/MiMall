<!--
 * @Author: your name
 * @Date: 2021-10-28 14:42:39
 * @LastEditTime: 2021-11-04 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\pages\home.vue
-->
<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader.vue'
import NavFooter from './../components/NavFooter.vue'
export default {
    name:'nav-home',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>