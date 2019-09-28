<template>
  <div>
    <input
      v-model="inputText"
      type="text"
      @keydown.enter="handleSubmit"
	  @keydown.up="navigate($event, 'up')"
	  @keydown.down="navigate($event, 'down')"
	  @keydown.x="removeTodo"
      :placeholder="title ? '' : placeholder"
	  :ref="id"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { emit } from 'cluster';

export default {
  name: "todo",
  props: {
    title: String,
    id: Number,
    add: Boolean,
	placeholder: String,
	refId: Number
  },
  data() {
	let inputText = this.title;
    return {
	  inputText,
    };
  },
  methods: {
    ...mapActions(['addTodo', 'editTodo', 'deleteTodo']),
    handleSubmit(e) {
      if (e.target.value.trim() === "") {
        alert("Can not add empty todo");
      } else if (this.add) {
        this.addTodo(e.target.value);
        this.clearInput();
      } else {
        this.editTodo({id: this.id, newTitle: e.target.value});
      }
	},
	removeTodo(e) {
	  if(e.ctrlKey) {
		this.deleteTodo(this.id);
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
    title(newTitle) {
      this.inputText = newTitle;
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
</style>
