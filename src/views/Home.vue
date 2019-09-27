<template>
  <div class="home">
    <Todo v-for="todo in allTodos" :key="todo.id" :id="todo.id" :title="todo.title" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import Todo from '../components/Todo';

export default {
  name: "home",
  components: {
	  Todo
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
  background-color: #2c3e50;
}
</style>
