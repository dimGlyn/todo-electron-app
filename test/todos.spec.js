import {
	mount,
	createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex'
import Home from '../src/views/Home.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home compnent', () => {
	let actions;
	let store;
	let getters;

	beforeEach(() => {

		actions = {
			fetchAllTodos: jest.fn(),
		}
		getters = {
			allTodos: () => [{
				"tags": [
					"tag1",
					"tag2"
				],
				"dueDate": "2019-07-15T00:00:00.000Z",
				"done": false,
				"_id": "5d8ff570d39a700d70eb99bb",
				"text": "ndsdiko sasaela",
				"__v": 0
			}]
		};
		store = new Vuex.Store({
			actions,
			getters
		});
	})

	// it's also easy to check for the existence of elements
	it('has an input of type text', () => {
		const wrapper = mount(Home, {
			store,
			localVue
		})
		expect(wrapper.contains('input')).toBe(true)
		expect(wrapper.html()).toContain('<div class="home">')
	});
});
