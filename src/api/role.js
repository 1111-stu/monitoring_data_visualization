import http from "../utils/request";
export function getroleList(params){
    return http({
        url:'/role/list',
        method:'get',
        params
    })
}
export function updateRole(id,data){
    return http({
        url:`/role/${id}`,
        method:'patch',
        data
    })
    // return http.patch(`/role/${id}`,user)
}
export function createRole(data){
    return http({
        url:'/role/save',
        method:'post',
        data
    })
}
export function deleteRole(params){
    return http({
        url:`/role/${params}`,
        method:'delete',
    })
}