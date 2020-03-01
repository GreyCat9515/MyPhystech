<template>
  <div>
    <a-tabs>
      <a-tab-pane tab="Все курсы" key="1">
        <a-collapse>
          <a-collapse-panel
            v-for="course in $store.state.courses"
            :header="course.name"
            :extra="
              $createElement('a-rate', {
                props: {
                  disabled: true
                }
              })
            "
            :key="course.id"
            ><div v-html="course.desc"></div>
            <a-tabs>
              <a-tab-pane tab="Отзывы" key="1">

              </a-tab-pane>
              <a-tab-pane
              v-if="$store.state.mycourses.includes(course.id)"
              tab="Оставить отзыв"
              key="2" >
                <div>
                    <div>Оценка преподавателя:</div>
                      <a-rate :tooltips="none" v-model="prof_value" />
                     <span class="ant-rate-text">{{prof[prof_value- 1]}}</span><br>
                  <a-textarea class="feedback-submit" />
                  <a-button class="feedback-submit">Отправить</a-button>
                </div>
              </a-tab-pane>
            </a-tabs>
          </a-collapse-panel>
        </a-collapse>
      </a-tab-pane>
      <a-tab-pane tab="Мои курсы" key="2">
        <a-collapse>
          <a-collapse-panel
            v-for="course in $store.state.courses"
            v-if="$store.state.mycourses.includes(course.id)"
            :header="course.name"
            :extra="
              $createElement('a-rate', {
                props: {
                  disabled: true
                }
              })
            "
            :key="course.id"
            ><div v-html="course.desc"></div>
            <a-tabs>
              <a-tab-pane tab="Отзывы" key="1">

              </a-tab-pane>
              <a-tab-pane
              v-if="$store.state.mycourses.includes(course.id)"
              tab="Оставить отзыв"
              key="2" >
                <div>
                    <div>Оценка преподавателя:</div>
                      <a-rate :tooltips="none" v-model="prof_value" />
                     <span class="ant-rate-text">{{prof[prof_value- 1]}}</span><br>
                  <a-textarea class="feedback-submit" />
                  <a-button class="feedback-submit">Отправить</a-button>
                </div>
              </a-tab-pane>
            </a-tabs>
          </a-collapse-panel>
        </a-collapse>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Vue from "vue";

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
  data() {
    return {
      activeKey: ["1"],
      prof_value: 1,
        prof: ['Ужасный', 'Плохой', 'Нормальный', 'Хороший', 'Отличный'],
    };
  },
  async beforeMount() {
    await this.$store.dispatch("fetchMyCourses");
    await this.$store.dispatch("fetchCourses");
  },
  methods: {}
};
</script>

<style scoped>
.feedback-submit {
    margin-top: 13px;
}
</style>