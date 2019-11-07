<template>
  <div id="app">
      <router-view></router-view>
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

</style>
