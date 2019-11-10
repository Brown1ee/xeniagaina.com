import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
Vue.use(VueRouter);
Vue.use(BootstrapVue);

import welcome from "./components/welcome/index.vue";
const rute = [{ path: "/", component: welcome }];

const router = new VueRouter({
  routes: rute,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
