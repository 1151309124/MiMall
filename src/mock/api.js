/*
 * @Author: your name
 * @Date: 2021-10-29 23:16:38
 * @LastEditTime: 2021-11-14 22:50:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\mock\api.js
 */
import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status": 0,
  "data": {
    "id": 12,
    "username": "admin222",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})