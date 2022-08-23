/*
 * @Descripttion: 
 * @Date: 2022-08-23 10:23:04
 */
import axios from 'axios'

interface Api{
    '/course/buy':{
        id: number
    },
    '/course/comment':{
        id: number,
        message: string
    }
}

function request<T extends keyof Api>(url: T, obj: Api[T]){
    return axios.post(url,obj)
}

request('/course/buy',{id:1})
request('/course/comment',{id:2,message:'11'})
request('/course/comment',{id:1}) //提醒缺少参数