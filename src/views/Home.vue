<template>
  <div class="home">{{allTodos}}</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
  },
  computed: mapGetters(['allTodos']),
};
</script>
