<template>
  <div class="home">
	<AddTodo class="add-todo" />
    <Todo v-for="todo in allTodos" :key="todo.id" :id="todo.id" :title="todo.title" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

export default {
  name: "home",
  components: {
	  Todo,
	  AddTodo
  },
  methods: {
    ...mapActions(["fetchAllTodos"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchAllTodos();
  }
};
</script>

<style scoped>
.home {
  background-color: #12100f;
}

</style>
