import {
	mount
} from '@vue/test-utils'
import Todo from '../src/components/Todo.vue';

describe('Todo compnent', () => {
	// Now mount the component and you have the wrapper
	const wrapper = mount(Todo);

	// it's also easy to check for the existence of elements
	it('has an input of type text', () => {
		expect(wrapper.contains('input')).toBe(true)
		expect(wrapper.html()).toContain('<input type="text"')
    });
});
