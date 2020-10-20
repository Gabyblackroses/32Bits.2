<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["title", "subtitle"]),
  },
};
</script>
