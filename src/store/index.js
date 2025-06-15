import Vue from 'vue'
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import db from "../firebase/firebaseInit";
import 'core-js/stable';
import 'regenerator-runtime/runtime';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "blog card 1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2025" },
      { blogTitle: "blog card 2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2025" },
      { blogTitle: "blog card 3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2025" },
      { blogTitle: "blog card 4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2025" },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileinitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    UpdateUser(state, payload) {
      state.user = payload;
    },
    setUser(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().userName;
    },
    setProfileInitials(state) {
      state.profileinitials =
      state.profileFirstName.match(/(\b\S)?/g).join('') + state.profileLastName.match(/(\b\S)?/g).join('');

    }
  },
  actions: {
    getCurrentUser({ commit }) {
      const dataBase = db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResult = dataBase.get();
      commit('setUser', dbResult);
      commit('setProfileInitials');
      console.log(dbResult);
    }
  },
  modules: {
  }
})
