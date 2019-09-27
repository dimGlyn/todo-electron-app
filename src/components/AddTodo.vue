<template>
  <div>
    <Todo :placeholder="`Add Todo...`" @addTodo="newTodo" :add="true" />
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapActions } from 'vuex';

export default {
  name: "todo",
  components: {
	  Todo
  },
  methods: {
	  ...mapActions(['addTodo']),
	  newTodo(title) {
		  this.addTodo(title)
	  }
  }
};
</script>
