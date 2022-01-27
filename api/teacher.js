import request from '@/utils/request'

export default {
  getTeacherList(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'POST'
    })
  },
  getById(id) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
      method: 'GET'
    })
  }
}
