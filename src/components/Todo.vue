<template>
  <div>
    <input
      v-model="inputText"
      type="text"
      @keydown.enter="handleSubmit"
      :placeholder="title ? '' : placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "todo",
  props: {
    title: String,
    id: Number,
    add: Boolean,
    placeholder: String
  },
  data() {
    let inputText = this.title;
    return {
      inputText
    };
  },
  methods: {
    handleSubmit(e) {
      if (e.target.value.trim() === "") {
        alert("Can not add empty todo");
      } else {
        if (this.add) {
          this.$emit("addTodo", e.target.value);
          this.clearInput();
        }
      }
    },
    clearInput() {
      this.inputText = "";
    }
  },
  computed: {},
  watch: {
	title(newTitle) {
	  this.inputText = newTitle
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
