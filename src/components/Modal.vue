<!--
 * @Author: your name
 * @Date: 2021-11-08 22:22:48
 * @LastEditTime: 2021-11-09 15:27:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \htmle:\vue项目\mimall\src\components\Modal.vue
-->
<template>
    <transition name="slide">
      <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" v-on:click="$emit('submit')"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{sureText}}</a>
                <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
                <div class="btn-group" v-if="btnType==3">
                <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
                <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">{{cancelText}}</a>
                </div>
            </div>
        </div>
    </div>  
    </transition>
    
</template>

<script>
export default {
    name:"modal",
    props:{
        //弹框类型:小small、中middle、大large、表单form
        modalType:{
            type:String,
            default:'form'
        },
        // 弹框标题
        title:String,
        // 按钮类型：1.确定按钮 2.取消按钮 3.确定取消
        btnType:String,
        sureText:{
            type:String,
            default:'确定'
        },
        cancelText:{
            type:String,
            default:'取消'
        },
        showModal:Boolean
    }
}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/modal.scss';
</style>