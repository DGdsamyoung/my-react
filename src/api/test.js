import http from './http'

export function getNotice(data) { // 加密密码
    return http({
      url: '/cpq/api/notice/find',
      method: 'post',
      params: {
        plainText: data
      }
    })
  }