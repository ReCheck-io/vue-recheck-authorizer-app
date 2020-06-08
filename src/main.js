import Vue from "vue";
import App from "./App.vue";
import VueQrcodeReader from "vue-qrcode-reader";
import VueRecheckAuthorizer from "vue-recheck-authorizer";

import "../node_modules/vue-recheck-authorizer/dist/main.css";

import { store } from "./store";
import { router } from "./router";

Vue.use(VueQrcodeReader);
Vue.use(VueRecheckAuthorizer);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
