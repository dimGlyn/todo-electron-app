<template>
  <div class="home">
    <div v-for="todo in allTodos" :key="todo.id">{{todo.title}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {},
  methods: {
    ...mapActions(["fetchAllTodos"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchAllTodos();
  }
};
</script>
