import firebase from 'firebase'

const COURSES_REF = 'courses'
const WORK_REW = 'work'


export default {
  fetchAllCourses ({state, commit}) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(COURSES_REF).once('value', snapshot => {
      const responseVal = snapshot.val()
      
      Object.keys(responseVal).forEach(responseId => {
        const responseItem = responseVal[responseId]
        commit('setItem', {resource: COURSES_REF, itemId: responseId, item: responseItem})
      })
      resolve(Object.values(state.courses))
    })
  })
},
  fetchAllWorksByCourse ({state, commit}, courseId) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(WORK_REW).once('value', snapshot => {
      const responseVal = snapshot.val()
      
      let response = Object.keys(responseVal).filter((id) => {
        
        return responseVal[id].courses.indexOf(courseId) !== -1
      })
      debugger
      response.forEach(responseId => {
        const responseItem = responseVal[responseId]
        commit('setItem', {resource: WORK_REW, itemId: responseId, item: responseItem})
      })
      console.log(response)
      resolve(Object.values(state.courses))
    })
  })
},

}