import http from 'utils/request.js' //导入request.js的axios配置

//请求用户列表
export const roleList = (params) => {
    return http ({
        url:'/role/list',
        params:params
    })
}
