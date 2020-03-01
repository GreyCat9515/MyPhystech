import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import detect from "detect.js";

Vue.use(Vuex);

axios.defaults.xsrfCookieName = "XSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
let last;

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const getDeviceWidthLevel = width => {
  if (0 < width && width < 600) return 1;
  else return 2;
};

export default new Vuex.Store({
  state: {
    uid: 0,
    username: "",
    userrole: 2,

    deviceHeight: window.innerHeight,
    deviceWidthLevel: 1,
    deviceRatio: 0,
    deviceType: "Desktop",

    csrf: "",

    courses: [],
    mycourses: [],
    loading: false
  },
  mutations: {
    setDeviceWidthLevel(state, value) {
      state.deviceWidthLevel = value;
    },
    setDeviceType(state, value) {
      state.deviceType = value;
    },
    setUid(state, uid) {
      state.uid = uid;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setUserrole(state, userrole) {
      state.userrole = userrole;
    },
    setCSRF(state, csrf) {
      state.csrf = csrf;
    },
    setCourses(state, courses) {
      state.courses = courses;
    },
    setMyCourses(state, mycourses) {
      state.mycourses = mycourses;
    },
    addFeedback(state, { course, feedback }) {
      state.courses[course-1].feedbacks.push(feedback);
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async init({ state, commit }, attributes) {
      state.deviceRatio = window.innerWidth / window.innerHeight;
      last = getDeviceWidthLevel(window.innerWidth);
      commit("setDeviceWidthLevel", last);
      window.onresize = () => {
        state.deviceHeight = window.innerHeight;
        state.deviceRatio = window.innerWidth / window.innerHeight;
        let x;
        if (last !== (x = getDeviceWidthLevel(window.innerWidth))) {
          last = x;
          commit("setDeviceWidthLevel", last);
        }
      };
      commit("setDeviceType", detect.parse(navigator.userAgent).device.type);
      commit("setUid", attributes.uid);
      commit("setUsername", attributes.username);
      commit("setUserrole", attributes.userrole);
      commit("setCSRF", attributes.csrf);
    },
    async logout() {
      await axios.post("/logout");
    },
    async fetchCourses({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/courses");
      commit("setCourses", res.data);
      commit("setLoading", false);
    },
    async fetchMyCourses({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/my-courses");
      commit("setMyCourses", res.data);
      commit("setLoading", false);
    },
    async feedbackSubmit({ commit, state }, params) {
      const res = await axios.post("/feedback-submit", params);
      if (res.data) {
        commit("addFeedback", {
          course: params.course_id,
          feedback: {
            user_id: state.uid,
            overall_rate: params.overall_rate,
            feedback: params.feedback
          }
        });
      }
    }
  }
});
