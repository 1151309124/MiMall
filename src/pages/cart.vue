<!--
 * @Author: your name
 * @Date: 2021-10-28 14:59:50
 * @LastEditTime: 2021-10-28 20:55:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\pages\cart.vue
-->
<template>
    <div>
        <order-header></order-header>
        cart
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
