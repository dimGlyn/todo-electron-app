import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export default {
	getTodos: async () => {
		const results = await axios.get(`${baseUrl}/todos/`);
		const todos = results.data.map(todo => ({
			title: todo.text,
			id: todo._id,
			done: todo.done
		}));
		return todos;
	},
	addTodo: async (todo) => {
		const result = await axios.post(`${baseUrl}/todos/`, {
			text: todo.title,
			...todo
		});
		let newTodo = {};
		({
			text: newTodo.title,
			dueDate: newTodo.dueDate,
			tags: newTodo.tags,
			_id: newTodo.id,
			done: newTodo.done
		} = result.data);
		return newTodo;
	}
}
