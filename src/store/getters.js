export default {
  courseById (state) {
    return function (id) {
      return Object.values(state.courses).filter(course => course.id === id)
    }
  }
}
