export default {
  courseById (state) {
    return function (id) {
      console.log(state)
      return Object.values(state.courses).filter( course => course.id === id )
    }
  }
}
