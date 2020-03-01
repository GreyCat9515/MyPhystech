<template>
  <div>
    <form class="form" method="post" action="/signin">
      <p class="logtext">Вход</p>
      <a-input name="email" placeholder="Логин" class="field"></a-input>
      <a-input-password
        name="password"
        placeholder="Пароль"
        class="field"
      ></a-input-password>
      <a-input type="hidden" name="_csrf" :value="$store.state.csrf"></a-input>
      <a-button html-type="submit" class="ok">Войти</a-button>
      <a-alert
        class="alert"
        v-if="error"
        showIcon
        type="error"
        message="Ошибка!"
        description="Неверный логин или пароль"
      />
    </form>
  </div>
</template>

<script>
import Vue from "vue";

import { Button, Input, Alert } from "ant-design-vue";
import "ant-design-vue/lib/button/style/index.css";
import "ant-design-vue/lib/input/style/index.css";
import "ant-design-vue/lib/alert/style/index.css";
Vue.use(Button);
Vue.use(Input);
Vue.use(Alert);

export default {
  name: "Login",
  props: ["error"],
  methods: {
    getParams() {
      return location.search.slice(1);
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.field {
  display: block;
  width: 220px;
  margin: 5px;
}
.ok {
  margin-top: 10px;
  width: 100px;
}
.alert {
  margin-top: 20px;
}
</style>
