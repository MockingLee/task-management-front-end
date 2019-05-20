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
    return instance.post('/api/addAccount', data)
  },
  // 用户登录
  UserLogin (data) {
    return instance.post('/api/login', data)
  },
  // 查询用户
  getUser (data) {
    return instance.post('/api/getUser', data)
  },
  // 删除用户
  delUser (data) {
    return instance.post('/api/delUser', data)
  },
  // 修改用户信息
  editInfo (data) {
    return instance.post('/api/changeInfo', data)
  },
  // 获取用户所有任务
  getUserAllTasks (data) {
    return instance.post('/api/getUserAllTask', data)
  },
  // 新建任务
  addTask (data) {
    return instance.post('/api/addTask', data)
  },
  // 修改任务
  editTask (data) {
    return instance.post('/api/changeTask', data)
  },
  // 更新进度
  updateTask (data) {
    return instance.post('/api/updateTask', data)
  },
  // 删除任务
  delTask (data) {
	  return instance.post('/api/delTask', data)
  }

}