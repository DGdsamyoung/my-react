import axios from "axios";
import './loading.css'
// import qs from "qs";
// react 中使用antd  此处自定义
// import { message } from "antd";
// vue中使用element-ui 此处自定义
// import { Loading} from "element-ui";
 
const service = axios.create({
    // baseURL: '/api', // api 的 base_url
    timeout: 10000 // request timeout
  })
  
  // request interceptor
  service.interceptors.request.use(
    config => {
      // Do something before request is sent
    //   startLoading()
    document.body.classList.add('loading-indicator');
      // config.headers["lang"] = store.getters.language;
      return config
    },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
  )
  
  // response interceptor
  service.interceptors.response.use(
    response => {
    //   endLoading()
    document.body.classList.remove('loading-indicator');
      return response
      
    },
    /**
     */
    error => {
    //   endLoading()
    document.body.classList.remove('loading-indicator');
      console.log(error) // for debug
      try {
        // Message({
        //   message: error.response.data.error,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
      } catch (e) {
        return Promise.reject(error)
      }
      return Promise.reject(error)
    }
  )
  
  export default service
