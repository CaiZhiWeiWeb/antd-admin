import {
  get
} from '../request'

//登录
export const login = parmas => get(`/login`, parmas)