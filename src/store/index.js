/* eslint-disable no-unreachable */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { useRouter } from "vue-router";
// import router from "../router";
import { createStore } from "vuex";
import { auth } from "../firebase/index";
// const router = useRouter();
export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async register({ commit }, credentials) {
      const { email, password } = credentials;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log(err);
      }
      return commit("SET_USER", auth.currentUser);
      //   router.push("/login");
    },
    async login({ commit }, credentials) {
      const { email, password } = credentials;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log(err);
      }
      return commit("SET_USER", auth.currentUser);
      //   router.push("");
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USE");
    },
  },
});
