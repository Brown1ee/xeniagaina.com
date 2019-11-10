<template>
  <div class="row pt-5 justify-content-center">
    <div class="text-white col-md-10">
      <div class="row align-items-center mb-5">
        <div class="col-md-6 pt-3">
          <hr />

          <p class="hello">Hello I'm</p>
          <h1>Xenia Gaina</h1>

          <p class="web-developer">Web Developer</p>
          <p>
            <i class="fas fa-envelope mr-2"></i>xenia.gaina1@gmail.com
          </p>
          <p>
            <i class="fas fa-phone-alt mr-2"></i>069964908
          </p>
          <p>
            <i class="fas fa-map-marker-alt mr-2"></i>Bd.Dacia, Chisinau, Republica Moldova
          </p>
          <div class="ml-2 pt-3 socials">
            <i class="fab fa-facebook-f mr-4"></i>

            <i class="fab fa-twitter mr-4"></i>

            <i class="fab fa-github"></i>
          </div>
        </div>

        <div class="col-md-6">
          <div class="portret"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-1"
};
</script>

<style scoped>
.socials {
  text-align: left;
}
ul {
  list-style: none;
  display: flex;
}

p {
  color: white;
}
@media only screen and (max-width: 770px) {
  p,
  h1,
  .socials {
    text-align: center;
  }

  .hello {
    display: block;
    margin: 0 auto;
  }
}
.message {
  width: 40px;
}
.two-sections {
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
}

.portret {
  width: 300px;
  height: 300px;
  border: 25px solid black;
  border-radius: 50%;
  background-image: url("../../../static/profile1.png");
  background-size: cover;
  margin: 0 auto;
}
.hello {
  background-color: #51b9a0;
  max-width: 90px;
  text-align: center;
  border-radius: 7px;
  padding: 5px;
  color: white;
}
.background {
  background-color: #100f17;
}
h1 {
  color: white;
  font-size: 40px;
}
.web-developer {
  color: white;
}
</style>