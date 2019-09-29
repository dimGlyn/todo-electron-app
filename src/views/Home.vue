<template>
  <div class="home">
    <Todo
      ref="addTodo"
	  :refId="-1"
      class="add-todo"
      :placeholder="`Add Todo...`"
      :add="true"
      @focusOut="setFocus"
    />
    <Todo
      v-for="(todo, index) in allTodos"
      :key="index"
      :refId="index"
      :ref="index"
      :id="todo.id"
      :title="todo.title"
	  :done="todo.done"
      @focusOut="setFocus"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import Todo from "../components/Todo";

export default {
  name: "home",
  components: {
    Todo
  },
  methods: {
    ...mapActions(["fetchAllTodos"]),
    setFocus(e, ref) {
      if (ref === -1) {
        this.$refs.addTodo.$el.children[0].focus();
      } else {
        this.$refs[ref][0].$el.children[0].focus();
      }
    }
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
