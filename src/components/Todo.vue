<template>
  <div>
	<input v-model="title" type="text" name="" id="">
  </div>
</template>

<script>
export default {
  name: "todo",
  props: {
    title: String,
    id: String
  },
  methods: {},
  computed: {}
};
</script>
