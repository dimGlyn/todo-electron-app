import Vue from 'vue';
import Vuex from 'vuex';
import todoHelper from './helpers/todo-http';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: [],
	},
	getters: {
		allTodos: state => state.todos,
	},
	actions: {
		fetchAllTodos: async ({ commit }) => {
			const todos = await todoHelper.getTodos();
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
			console.log(id)
			state.todos = state.todos.filter(todo => todo.id !== id)
		},
		setTodoDone: async (state, { id, flag }) => {
			const index = state.todos.findIndex(todo => todo.id === id);
			state.todos[index].done = flag;
		},
	},
});
