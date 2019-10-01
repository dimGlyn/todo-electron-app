import axios from 'axios';

const baseURL = 'http://localhost:8080';
const todoAxios = axios.create({
	baseURL
});

export default {
	getTodos: async () => {
		const results = await todoAxios.get('/todos/');
		const todos = results.data.map(todo => ({
			title: todo.text,
			id: todo._id,
			done: todo.done
		}));
		return todos;
	},
	addTodo: async todo => {
		const result = await todoAxios.post('/todos/', {
			...mapForRequest(todo)
		});
		let newTodo = mapFromResponse(result.data);
		return newTodo;
	},
	markDone: async id => {
		const result = await todoAxios.put(`/todos/${id}/done/`);
		if (result.data.done) return 1
		else return 0;
	},
	markUndone: async id => {
		const result = await todoAxios.put(`/todos/${id}/undone/`);
		if (!result.data.done) return 1
		else return 0;
	}
}

//will map client version of todo the backend
const mapForRequest = todo => ({
	text: todo.title,
	...todo
});

// will map the fields of the responded todo for the client
const mapFromResponse = responseTodo => ({
	title: responseTodo.text,
	id: responseTodo._id,
	...responseTodo
})
