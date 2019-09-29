import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {
	async
} from 'q';

Vue.use(Vuex);

const baseUrl = 'http://localhost:8080';

export default new Vuex.Store({
	state: {
		todos: [],
	},
	getters: {
		allTodos: state => state.todos,
	},
	actions: {
		fetchAllTodos: async ({ commit }) => {
			const results = await axios.get(`${baseUrl}/todos/`);
			const todos = results.data.map(todo => ({
				title: todo.text,
				id: todo._id,
				done: todo.done
			}));
			commit('setAllTodos', todos);
		},
		addTodo: async ({ commit }, title) => commit('addTodo', title),
		editTodo: async ({ commit }, { id, newTitle }) => commit('editTodo', { id, newTitle }),
		deleteTodo: async ({ commit }, id) => commit('deleteTodo', id),
		setTodoDone: async ({ commit }, {id, flag = true}) => commit('setTodoDone', {id, flag}),
	},
	mutations: {
		setAllTodos: async (state, todos) => state.todos = todos,
		addTodo: async (state, title) => {
			state.todos.unshift({
				title,
				id: state.todos.length + 1
			})
		},
		editTodo: async (state, { id, newTitle }) => {
			const index = state.todos.findIndex(todo => todo.id === id);
			state.todos[index].title = newTitle;
		},
		deleteTodo: async (state, id) => {
			state.todos = state.todos.filter(todo => todo.id !== id)
		},
		setTodoDone: async (state, { id, flag }) => {
			const index = state.todos.findIndex(todo => todo.id === id);
			state.todos[index].done = flag;
		},
	},
});
