import axios from 'axios'
import router from './router/index'


//
axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json'



export default {
  // 获取所有用户
  getUsers (data) {
    return instance.post('/api/getUsers', data)
  },
  // 添加用户
  addUser (data) {
    console.log("add")
    return instance.post('/api/addAccount', data)
  },
  // 用户登录
  UserLogin (data) {
    return instance.post('/api/login', data)
  },
  // 获取用户
  getUser () {
    return instance.get('/api/user')
  },
  // 删除用户
  delUser (data) {
    return instance.post('/api/delUser', data)
  }
}