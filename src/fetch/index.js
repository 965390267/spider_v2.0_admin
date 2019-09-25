import Vue from 'vue'
import axios from 'axios';
import router from '../router/index'
import { Loading, Message } from 'element-ui';
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
window.toast=Message;
Vue.use(Loading.directive);
// 超时时间
axios.defaults.timeout = 5000;
axios.defaults.baseURL='http://blog.zangzhihong.com/'
    // http请求拦截器
var loadinginstace;
 const loadingShow=()=>{//加载进度
    loadinginstace =  Loading.service({
        fullscreen: true,
        text: "拼命加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.2)"
    })
 }
const loadingHidden=()=>{
    loadinginstace&&loadinginstace.close()
}
axios.interceptors.request.use(config => {
        // element ui Loading方法
        // loadingShow()
        if(localStorage.getItem('token')){
            config.headers.Authorization=localStorage.getItem('token')
        }
        return config
    }, error => {
        Message.error({
            message: '加载超时'
        })
        return Promise.reject(error)
    })
    // http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    loadingHidden()
    return data
}, error => {
    loadingHidden()
    Message.error({
        message: '加载失败'
    })
    // const {status}=error.response;
    // if(status==401){
    //     Message.error({
    //         message: 'token失效'
    //     })
    //     localStorage.removeItem('token')
    //     router.push('/')
    // }
    return Promise.reject(error)
})

export default axios;