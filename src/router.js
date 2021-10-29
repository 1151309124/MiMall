/*
 * @Author: your name
 * @Date: 2021-10-28 14:46:51
 * @LastEditTime: 2021-10-28 21:19:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\router.js
 */
import Vue from "vue"
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                },{
                    path:'/product/:id',
                    name:'product',
                    component:Product
                },{
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList 
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm 
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay 
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:AliPay 
                }
            ]
        }
    ]
});