import Vue from "vue";
import Store from "./store";

async function go(path) {
  let attributes = [];
  Object.values(document.querySelector(path).attributes).forEach(attr => {
    attributes[attr.name] = attr.value;
  });
  await Store.dispatch("init", attributes);
  const app = new Vue({
    components: {
      welcome: () => import('../components/Welcome'),
      signin: () => import("../components/Signin"),
      notFound: () => import('../components/NotFound'),
    },
    store: Store
  }).$mount("#app");
}

go("#app");
