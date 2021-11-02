<!--
 * @Author: your name
 * @Date: 2021-10-28 14:44:11
 * @LastEditTime: 2021-11-02 15:30:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\components\NavHeader.vue
-->
<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo"></div>
                <div class="header-menu"></div>
                <div class="header-search"></div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    
}
/* 
sass-loader 4.1.1，node-sass 4.3.0
sass-loader 7.0.3，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.14.1 
sass-loader和node-sass要对应安装，反正现在是有了，上面是各个版本对应的
*/
</script>

<style lang="scss">
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            // color: #B0B0B0;
        }
        .container{
            width: 1226px;   
            margin-right: auto;
            margin-left: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                display: inline-block;
                color: #B0B0B0;
                margin-right:17px ;
            }
            .my-cart{
                width: 110px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;
                .icon-cart{
                display: inline-block;
                width: 16px;
                height: 12px;
                background: url('/imgs/icon-cart-checked.png')no-repeat center;
                background-size: contain;
                margin-right: 4px;
                }
            }
        }
    }
     
</style>