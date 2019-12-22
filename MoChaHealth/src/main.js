import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";
import "@/assets/less/common.less";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");