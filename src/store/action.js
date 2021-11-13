/*
 * @Author: your name
 * @Date: 2021-11-10 20:49:22
 * @LastEditTime: 2021-11-10 21:19:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \htmle:\vue项目\mimall\src\store\action.js
 */
/* 
商城Vuex-actions
*/
export default{
    saveUserName(context,username){
        context.commit('saveUserName',username);
    },
    saveCartCount(context,count){
        context.commit('saveUserCount',count);
    }
}