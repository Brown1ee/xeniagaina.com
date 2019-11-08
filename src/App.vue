<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
</style>
