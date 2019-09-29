<template>
  <div>
    <input
      v-model="inputText"
      type="text"
	  :class="done ? 'done' : ''"
      @keydown.enter="handleSubmit"
	  @keydown.up="navigate($event, 'up')"
	  @keydown.down="navigate($event, 'down')"
	  @keydown.x="removeTodo"
	  @keydown.d="crossTodo"
      :placeholder="todo ? '' : placeholder"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { emit } from 'cluster';

export default {
  name: "todo",
  props: {
	todo: Object,
    add: Boolean,
	placeholder: String,
	refId: Number,
  },
  data() {
	let inputText = this.todo ? this.todo.title : '';
	let done = this.todo ? this.todo.done : false;
    return {
	  inputText,
	  done
    };
  },
  methods: {
    ...mapActions(['addTodo', 'editTodo', 'deleteTodo', 'setTodoDone']),
    handleSubmit(e) {
      if (e.target.value.trim() === "") return
      else if (this.add) {
        this.addTodo(e.target.value);
        this.clearInput();
      } else {
        this.editTodo({id: this.todo.id, newTitle: e.target.value});
      }
	},
	removeTodo(e) {
	  if(e.ctrlKey && !this.add) {
		this.deleteTodo(this.todo.id);
	  }
	},
	crossTodo(e) {
		if(e.ctrlKey && this.done !== true && !this.add) {
			this.done = true;
			this.setTodoDone({ id: this.todo.id });
		} else if(e.ctrlKey && this.done === true && !this.add) {
			this.done = false;
			this.setTodoDone({ id: this.todo.id, flag: false});
		}
	},
	navigate(e, direction) {
	  if(this.refId === -1) {
		this.$emit('focusOut', e, direction==='up' ? this.allTodos.length - 1 : 0);
	  } else if (this.refId === this.allTodos.length - 1) {
		this.$emit('focusOut', e, direction==='up' ? this.refId - 1 : -1);
	  } else {
		this.$emit('focusOut', e, direction==='up' ? this.refId - 1 : this.refId + 1);
	  }
	},
    clearInput() {
      this.inputText = "";
    },
  },
  computed: {
	...mapGetters(['allTodos'])
  },
  watch: {
    "todo.title"(newTitle) {
      this.inputText = newTitle;
	},
	"todo.done"(newDone) {
		this.done = newDone;
	}
  }
};
</script>

<style scoped>
input {
  float: left;
  border-radius: 0;
  background: transparent;
  border: 2px;
  border-bottom: 1px solid #eceff1;
  margin: 0;
  font-size: 24px;
  height: 50px;
  width: 100%;
  padding: 10px;
  color: #f8bb39;
}
input:focus {
  outline: 0;
  background-color: #db784d55;
}
.done {
	text-decoration: line-through;
}
</style>
