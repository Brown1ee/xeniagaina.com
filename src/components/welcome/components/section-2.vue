<template>
  <div class="row mt-5 justify-content-center">
    <div class="text-white col-md-10">
      <div class="row my-5">
        <div class="col-md-5">
          <img class="first-slider-girl" src="../../../static/devocika.png" />
        </div>

        <div class="col-md-5 ml-auto">
          <h2>About Me</h2>
          <p>Hello, I'm Xenia, web-developer based in Republic of Moldova. I have rich experince in building web applications. Also I am good at</p>
          <div class="row about-me-technologies">
            <div class="col-md rounded-lg">Javascript</div>
            <div class="col-md rounded-lg">React.js</div>
            <div class="col-md rounded-lg">Css</div>
            <div class="col-md rounded-lg">Express</div>
            <div class="col-md rounded-lg">GraphQl</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-2"
};
</script>

<style scoped>
.about-me-technologies div {
  border: 2px solid #51b9a0;
  margin: 3px;
  padding: 1px;
  text-align: center;
  font-size: 12px;
}
.first-slider-girl {
  width: 100%;
}
</style>