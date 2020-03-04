<template>
  <div>
    <header>
      <a href="/" class="logo">
        <img src="picture/logo.png" />
      </a>
    </header>
    <main>
      <aside class="left-side">
        <a-menu
          :defaultSelectedKeys="[current_tab]"
          @select="menuHandler"
          class="left-side-menu"
          mode="inline"
        >
          <a-menu-item key="courses">
            <a-icon type="read" />
            <span>Курсы</span>
          </a-menu-item>
          <a-menu-item key="professors">
            <a-icon type="user" />
            <span>Преподаватели</span>
          </a-menu-item>
          <a-menu-item v-if="!['professor'].includes($store.state.userrole)" key="nir">
            <a-icon type="file-done" />
            <span>НИР</span>
          </a-menu-item>
          <a-menu-item v-if="!['professor'].includes($store.state.userrole)" key="scienceleader">
            <a-icon type="solution" />
            <span>Научный руководитель</span>
          </a-menu-item>
          <a-menu-item key="logout">
            <a-icon type="logout" />
            <span>Выход</span>
          </a-menu-item>
        </a-menu>
      </aside>
      <component :is="current_tab" class="content"></component>
    </main>
    <footer>
      <p class="authority">
        © 2020 МИРЭА - Российский технологический университет
      </p>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";

import { Layout, Menu, Icon } from "ant-design-vue";
import "ant-design-vue/lib/layout/style/css";
import "ant-design-vue/lib/menu/style/css";
import "ant-design-vue/lib/icon/style/css";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);

export default {
  components: {
    courses: () => import("./Courses"),
    professors: () => import("./Professors"),
    nir: () => import("./NIR"),
    scienceleader: () => import("./Scienceleader")
  },
  mounted() {
    window.onpopstate = () => {
      this.current_tab = location.hash ? location.hash.slice(1) : "courses";
    };
  },
  data() {
    return {
      current_tab: location.hash ? location.hash.slice(1) : "courses",
      collapsed: false
    };
  },
  methods: {
    async menuHandler({ key }) {
      if (key === "logout") {
        await this.$store.dispatch("logout");
        location="/signin"
      }
      this.current_tab = key;
      history.pushState(null, null, `#${key}`);
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 150px;
  background: #1b72ba;
  box-shadow: 0px -1px 10px 1px #2c4690 inset;
}
.logo {
  margin-left: 70px;
}
.logo img {
  width: 70px;
}
main {
  display: flex;
  min-height: 1000px;
}
.left-side {
  flex-shrink: 0;
  background: #eeeeee;
  box-shadow: -10px 0px 10px -9px #ddd inset;
  width: 20%;
}
.left-side-menu {
  background: #eeeeee;
  box-shadow: -10px 0px 10px -9px #ddd inset !important;
}
.ant-menu-item-selected {
  background: #e1e9ed !important;
}

.content {
  padding: 30px;
  flex-grow: 1;
}
.picture {
  border-radius: 5px;
  width: 70%;
}
.teachers {
  display: flex;
  flex-wrap: wrap;
}
.teacher {
  width: 30%;
  margin: 20px;
}
footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 200px;
  box-shadow: 0px 1px 10px 0px #252525 inset;
  background: #333333;
}
.footer-picture {
  margin-left: 20px;
  height: 30%;
}
.authority {
  color: white;
  align-self: center;
}
</style>
