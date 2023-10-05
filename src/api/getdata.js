import request from '@/until/request'

function getdata (ur, data) {
  return request.request1({
    url: ur,
    data: {
      data
    }
  })
}

export default { getdata }
