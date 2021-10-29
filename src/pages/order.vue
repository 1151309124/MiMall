<!--
 * @Author: your name
 * @Date: 2021-10-28 14:58:31
 * @LastEditTime: 2021-10-28 20:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\pages\order.vue
-->
<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader.vue'
import NavFooter from './../components/NavFooter.vue'
export default {
    name:'index',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>