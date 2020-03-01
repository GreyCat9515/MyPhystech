<template>
  <div>
    <a-tabs>
      <a-tab-pane tab="Все преподаватели" key="1">
        <professor-list :data="$store.state.professors" />
      </a-tab-pane>
      <a-tab-pane v-if="['student'].includes($store.state.userrole)" tab="Мои преподаватели" key="2">
        <professor-list
          :data="
            $store.state.professors.filter(professor =>
              $store.state.myprofessors.includes(professor.id)
            )
          "
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import ProfessorList from "./ProfessorList";
import { Tabs } from "ant-design-vue";
import "ant-design-vue/lib/tabs/style/css";

Vue.use(Tabs);

export default {
  components: {
    ProfessorList
  },
  async beforeMount() {
    await this.$store.dispatch("fetchMyProfessors");
    await this.$store.dispatch("fetchProfessors");
  }
};
</script>

<style scoped>
.feedback-submit {
  margin-top: 13px;
}
</style>
