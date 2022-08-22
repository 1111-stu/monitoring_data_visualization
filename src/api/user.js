import http from "../utils/request";
// 获取用户列表
export function getuserList(params){
    return http({
        url:'/user/list',
        method:'get',
        params
    })
}
// 删除用户
export function deluser(params){
    return http({
        url:`/user/${params}`,
        method:'delete',
    })
}
// 添加用户
export function createUser(data){
    return http({
        url:'/user/save',
        method:'post',
        data
    }) 
}
// 编辑用户
export function updateUser(id,data){
    console.log(data)
    return http({
        url:`/user/${id}`,
        method:'patch',
        data
    })
}