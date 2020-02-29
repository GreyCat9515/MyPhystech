import Vue from "vue";
import Store from "./store";

async function go(path) {
  let attributes = [];
  Object.values(document.querySelector(path).attributes).forEach(attr => {
    attributes[attr.name] = attr.value;
  });
  await Store.dispatch("init", attributes);
  new Vue({
    components: {
      signin: () => import("../components/Signin")
    },
    store: Store
  }).$mount("#app");
}

go("#app");
