/*
 * @Author: your name
 * @Date: 2021-10-29 19:15:14
 * @LastEditTime: 2021-10-29 22:07:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\env.js
 */
let baseURL;
switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL= 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL= 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev':
        baseURL= 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL= 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL= 'http://mall-pre.springboot.cn/api';    
        break;
    }

export default {
    baseURL
}
