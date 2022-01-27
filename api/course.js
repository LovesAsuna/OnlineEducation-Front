import request from '@/utils/request'

export default {
  getCourseList(page, limit, query) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'POST',
      data: query
    })
  },
  getAllSubject() {
    return request({
      url: '/eduservice/subject/getAllSubject',
      method: 'GET'
    })
  },
 getCourseInfo(id) {
  return request({
    url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
    method: 'GET'
  })
},
}
