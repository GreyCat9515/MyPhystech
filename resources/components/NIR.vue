<template>
  <div>
    <a-tabs>
      <a-tab-pane v-if="['admin'].includes($store.state.userrole)" tab="Все курсы" key="1">
        <nir-list :data="$store.state.nirs" />
      </a-tab-pane>
      <a-tab-pane v-if="['student'].includes($store.state.userrole)" tab="Мои курсы" key="2">
        <nir-list :data="$store.state.nirs.filter(nir => $store.state.mynirs.includes(nir.id))" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import NirList from './NirsList'
import { Tabs } from "ant-design-vue";
import "ant-design-vue/lib/tabs/style/css";
Vue.use(Tabs);

export default {
  components: {
    NirList
  },
  async beforeMount() {
    await this.$store.dispatch("fetchMyNirs");
    await this.$store.dispatch("fetchNirs");
  },
  methods: {}
};
</script>

<style scoped>
.feedback-submit {
    margin-top: 13px;
}
</style>