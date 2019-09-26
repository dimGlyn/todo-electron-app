import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default new Vuex.Store({
  state: {
    todos: [{
      text: 'ela',
    }],
  },
  getters: {
    allTodos: state => state.todos,
  },
  mutations: {
    setAllTodos: async (state, todos) => state.todos = todos,
  },
  actions: {
    fetchAllTodos: async ({ commit }) => {
      const results = await axios.get(`${baseUrl}/todos`);

      commit('setAllTodos', results.data);
    },
  },
});
