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
			todos.reverse();
			commit('setAllTodos', todos);
		},
		addTodo: async ({ commit }, title) => {
			const newTodo = await todoHelper.addTodo({title});
			commit('addTodo', newTodo)
		},
		editTodo: async ({ commit }, { id, newTitle }) => {
			const updatedTodo = await todoHelper.editTodo(id, {title: newTitle})
			commit('editTodo', { id, updatedTodo })
		},
		deleteTodo: async ({ commit }, id) => commit('deleteTodo', id),
		setTodoDone: async ({ commit }, {id, flag = true}) => {
			let result;
			if (flag) {
				result = await todoHelper.markDone(id);
			} else {
				result = await todoHelper.markUndone(id);
			}
			if(result === 1) {
				commit('setTodoDone', {id, flag});
			}
		},
	},
	mutations: {
		setAllTodos: (state, todos) => state.todos = todos,
		addTodo: (state, todo) => {
			state.todos.unshift(todo);
		},
		editTodo: (state, { id, updatedTodo }) => {
			const index = state.todos.findIndex(todo => todo.id === id);
			state.todos[index] = {...updatedTodo};
		},
		deleteTodo: (state, id) => {
			state.todos = state.todos.filter(todo => todo.id !== id)
		},
		setTodoDone: (state, { id, flag }) => {
			const index = state.todos.findIndex(todo => todo.id === id);
			state.todos[index].done = flag;
		},
	},
});
