<template>
  <div>
    <input v-model="inputText" type="text" @keydown.enter="updateTodo" />
  </div>
</template>

<script>
export default {
  name: "todo",
  props: {
    title: String,
    id: Number
  },
  data() {
    let inputText = this.title;
    return {
      inputText
    };
  },
  methods: {
    updateTodo(e) {
      console.log(e.code === "Enter");
    }
  },
  computed: {},
  watch: {}
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
  color: aqua;
}
input:focus {
  outline: 0;
  background-color: cadetblue
}
</style>
