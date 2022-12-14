import axios from "axios"
const http = axios.create({
        baseURL: '/api', //当请求接口的时候遇到 "/api" 会自动转为target里的服务，解决跨域
        timeout: 6000,
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json'
          }
    })
    //请求拦截
http.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    //响应应拦截
http.interceptors.response.use(res => {
    // return res.data.data
    return res.data //这里是res.data 还是res.data.data 看后端接口返回的数据结构。
}, err => {
    throw new Error(err)
})
export default http
