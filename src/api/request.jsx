import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://localhost:8888'

export default async function request({
  url = '',
  method = '',
  params = null,
  headers = {},
  data = null,
  objToUrl = false,
  dealError = true
} = {}) {
  if (!url) return message.error('no api url!')

  if (params !== null) method = 'get' // 默认传入params参数时，请求方法为get
  if (data !== null) method = method ? method : 'post' // 默认传入data参数时，请求方法为post

  if (method === 'post') {
    headers = {
      ...headers,
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  if (objToUrl) data = qs.stringify(data)
  try {
    let res = null
    if (method === 'get') {
      res = await axios[method](url, {
        params,
        headers
      })
    } else {
      res = await axios[method](url, data, {
        headers
      })
    }

    if (res.data.code !== 0) {
      if (dealError) return Promise.reject(res.data)
      message.error(res.data.msg)
      return Promise.resolve()
    }
    return res.data
  } catch (e) {
    message.error(e)
  }
}