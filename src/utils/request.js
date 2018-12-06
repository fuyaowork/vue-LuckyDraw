import axios from 'axios'
import store from '@/store/index'
import { getToken } from '@/utils/auth'
import config from '@/config/index'
import { Toast } from 'vant';

// create an axios instance
const service = axios.create({
    withCredentials: true,
    // baseURL: config.BASE_URL, // api的base_url
    timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    if (store.getters.token) {
        // config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    }
    // console.log(config);
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(response => {
    if (response.data.ErrorCode) {
        Toast({
            message: response.data.Message,
            duration: 3*1000
        })
        return Promise.reject(response.data.Message)
    } else {
        return response.data;
    }
}, error => {
    // if (error.response.status == '401') {
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //     }).then(() => {
    //         store.dispatch('FedLogOut').then(() => {
    //             location.reload() // 为了重新实例化vue-router对象 避免bug
    //         })
    //     })
    // } else {
    //     console.log('error:' + error.message) // for debug
    //     Message({
    //         message: error.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //     })
    // }
    return Promise.reject(error)
})

/**
 * 封装request
 * @param  {String} url     请求地址
 * @param  {Object} data    发送数据
 * @param  {String} type    请求类型
 * @param  {String} urltype 地址类型(基础地址或者获取验证码地址)
 * @return {[type]}         [description]
 */
export default async(url = '', data = {}, type = 'post', urltype = 'base') => {
    let baseUrl = urltype == 'base'?config.BASE_URL:config.CODE_URL
    if(process.env.NODE_ENV == 'development') {
        url = baseUrl + urltype + url
    } else {
        url = baseUrl + url
    }
    if (type === 'get') {
        return service({
            url: url,
            method: type,
            params: data,
        })
    } else if (type === 'post') {
        return service({
            url: url,
            method: type,
            data: data,
        })
    }
}

