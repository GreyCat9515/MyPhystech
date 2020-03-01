<template>
  <div>
    <a-tabs>
          <a-tab-pane tab="Все курсы" key="1">
        <course-list :data="$store.state.courses" />
          </a-tab-pane>
      <a-tab-pane v-if="['student'].includes($store.state.userrole)" tab="Мои курсы" key="2">
          <course-list :data="$store.state.courses.filter(course => $store.state.mycourses.includes(course.id))" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import CourseList from './CourseList'
import {
  Tabs,
} from "ant-design-vue";
import "ant-design-vue/lib/tabs/style/css";
Vue.use(Tabs);

export default {
  components: {CourseList},
  async beforeMount() {
    await this.$store.dispatch("fetchMyCourses");
    await this.$store.dispatch("fetchCourses");
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
