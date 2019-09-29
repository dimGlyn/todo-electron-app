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
	}
}
