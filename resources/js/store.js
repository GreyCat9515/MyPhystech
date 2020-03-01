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
    professors: [],
    myprofessors: [],
    nirs: [],
    mynirs: [],
    scienceleaders: [],
    myscienceleaders: [],

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
    addCourseFeedback(state, { id, feedback }) {
      state.courses[id-1].feedbacks.push(feedback);
    },



    setProfessors(state, professors) {
      state.professors = professors;
    },
    setMyProfessors(state, myprofessors) {
      state.myprofessors = myprofessors;
    },
    addProfessorFeedback(state, { id, feedback }) {
      state.professors[id-1].feedbacks.push(feedback);
    },
    


    setNirs(state, nirs) {
      state.nirs = nirs;
    },
    setMyNirs(state, mynirs) {
      state.mynirs = mynirs;
    },
    addNirFeedback(state, { id, feedback }) {
      state.nirs[id-1].feedbacks.push(feedback);
    },



    setScienceleaders(state, scienceleaders) {
      state.scienceleaders = scienceleaders;
    },
    setMyScienceleaders(state, myscienceleaders) {
      state.myscienceleaders = myscienceleaders;
    },
    addScienceleaderFeedback(state, { id, feedback }) {
      state.scienceleaders[id-1].feedbacks.push(feedback);
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
    async сourseFeedback({ commit, state }, params) {
      const res = await axios.post("/course-feedback", params);
      if (res.data) {
        commit("addCourseFeedback", {
          id: params.id,
          feedback: {
            user_id: state.uid,
            overall_rate: params.overall_rate,
            feedback: params.feedback
          }
        });
      }
    },


    async fetchProfessors({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/professors");
      commit("setProfessors", res.data);
      commit("setLoading", false);
    },
    async fetchMyProfessors({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/my-professors");
      commit("setMyProfessors", res.data);
      commit("setLoading", false);
    },
    async professorFeedback({ commit, state }, params) {
      const res = await axios.post("/professor-feedback", params);
      if (res.data) {
        commit("addProfessorFeedback", {
          id: params.id,
          feedback: {
            user_id: state.uid,
            overall_rate: params.overall_rate,
            feedback: params.feedback
          }
        });
      }
    },


    async fetchNirs({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/nirs");
      commit("setNirs", res.data);
      commit("setLoading", false);
    },
    async fetchMyNirs({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/my-nirs");
      commit("setMyNirs", res.data);
      commit("setLoading", false);
    },
    async nirFeedback({ commit, state }, params) {
      console.log(params.id)
      const res = await axios.post("/nir-feedback", params);
      if (res.data) {
        commit("addNirFeedback", {
          id: params.id,
          feedback: {
            user_id: state.uid,
            overall_rate: params.overall_rate,
            feedback: params.feedback
          }
        });
      }
    },


    async fetchScienceleaders({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/scienceleaders");
      commit("setScienceleaders", res.data);
      commit("setLoading", false);
    },
    async fetchMyScienceleaders({ commit }) {
      commit("setLoading", true);
      const res = await axios.get("/my-scienceleaders");
      commit("setMyScienceleaders", res.data);
      commit("setLoading", false);
    },
    async scienceleaderFeedback({ commit, state }, params) {
      const res = await axios.post("/scienceleader-feedback", params);
      if (res.data) {
        commit("addScienceleaderFeedback", {
          id: params.id,
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
