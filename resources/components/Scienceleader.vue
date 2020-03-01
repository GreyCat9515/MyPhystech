<template>
  <div>
    <a-tabs>
      <a-tab-pane v-if="['admin'].includes($store.state.userrole)" tab="Все курсы" key="1">
        <scienceleader-list :data="$store.state.scienceleaders" />
      </a-tab-pane>
      <a-tab-pane v-if="['student'].includes($store.state.userrole)" tab="Мои курсы" key="2">
        <scienceleader-list
          :data="
            $store.state.scienceleaders.filter(scienceleader =>
              $store.state.myscienceleaders.includes(scienceleader.id)
            )
          "
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import ScienceleaderList from "./ScienceleaderList";
import { Tabs, Collapse, Rate, Input, Button } from "ant-design-vue";
import "ant-design-vue/lib/tabs/style/css";
import "ant-design-vue/lib/collapse/style/css";
import "ant-design-vue/lib/rate/style/css";
import "ant-design-vue/lib/input/style/css";
import "ant-design-vue/lib/button/style/css";
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(Collapse.Panel);
Vue.use(Rate);
Vue.use(Input);
Vue.use(Button);

export default {
  components: {
    ScienceleaderList
  },
  data() {
    return {
      activeKey: ["1"],
      prof_value: 1,
      prof: ["Ужасный", "Плохой", "Нормальный", "Хороший", "Отличный"]
    };
  },
  async beforeMount() {
    await this.$store.dispatch("fetchMyScienceleaders");
    await this.$store.dispatch("fetchScienceleaders");
  },
  methods: {}
};
</script>

<style scoped>
.feedback-submit {
  margin-top: 13px;
}
</style>
