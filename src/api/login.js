import http from "../utils/request";
export function registration(data){
    return http.post('/user/registration',data)
}
export function login(data){
    return http.post('/user/login',data)
}