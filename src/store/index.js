import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: undefined,
    quiz: undefined,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_QUIZ(state, quiz) {
      state.quiz = quiz;
    }
  },
  actions: {
    loadQuiz({
      commit
    }, quizId) {
      axios
        .get(
          `http://127.0.0.1:3000/quizzes/${quizId}`
        )
        .then((response) => commit('SET_QUIZ', response.data));
    }
  },
  modules: {}
})