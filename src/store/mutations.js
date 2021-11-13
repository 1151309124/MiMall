/*
 * @Author: your name
 * @Date: 2021-11-10 20:50:11
 * @LastEditTime: 2021-11-10 21:17:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \htmle:\vue项目\mimall\src\store\mutations.js
 */
/* 
商城Vuex-mutations
*/
export default{
    saveUserName(state,username){
        state.username=username;
    },
    saveCartCount(state,count){
        state.cartCount=count;
    }
}
