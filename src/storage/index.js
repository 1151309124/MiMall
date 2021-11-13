/*
 * @Author: your name
 * @Date: 2021-10-28 14:40:49
 * @LastEditTime: 2021-11-10 21:26:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\vue项目\mimall\src\storage\index.js
 */
/* 
Storage封装
*/
const STORAGE_KEY='mall';
export default{
    //JSON.parse(window.sessionStorage.getItem('标记'))['userID']
    // 储存值
    setItem(key,value,module_name){
        if (module_name) {
            let val=this.getItem(module_name);
            val[key]=value;
            this.setItem(module_name,val);
        }else{
            let val=this.getStorage();  
            val[key]=value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val)); 
        }
    },
    // 获取某一个模块下面的属性user下面的userName
    getItem(key,module_name){
        if (module_name) {
            let val=this.getItem(module_name);
            if (val) return val[key]; 
        }
        return this.getStorage()[key]; 
    },
    getStorage(){
        return  JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    /* 
    {test: '11111', length: 1}= window.sessionStorage
    */
    clear(key,module_name){
        let val=this.getStorage();  
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key];
        }else{ 
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val)); 
    }
}
