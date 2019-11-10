<template>
  <div class="background container-fluid">
    <div class="container">
      <section1 />
      <section2 />
      <section3 />
    </div>
  </div>
</template>

<script>
import section1 from "./components/section-1";
import section2 from "./components/section-2";
import section3 from "./components/section-3";
export default {
  name: "welcome",
  components: {
    section1,
    section2,
    section3
  }
};
</script>

<style scoped>
.background {
  background-color: #100f17;
}
</style>