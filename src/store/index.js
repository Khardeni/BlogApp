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
    setUser(state, data) {
      state.profileId = data.id;
      state.profileEmail = data.email;
      state.profileFirstName = data.firstName;
      state.profileLastName = data.lastName;
      state.profileUsername = data.userName;
    
      
    },
    setProfileInitials(state) {
      state.profileinitials =
        state.profileFirstName.match(/(\b\S)?/g).join('') + state.profileLastName.match(/(\b\S)?/g).join('');
        console.log("Profile initials set to:", state.profileinitials);

    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = db.collection("users").doc(firebase.auth().currentUser.uid);
      const doc = await dataBase.get();
      if (doc.exists) {
        const data = { ...doc.data(), id: doc.id };
        commit('setUser', data);
        commit('setProfileInitials');
        
        console.log("User data fetched successfully:", data);
        
      } else {
        console.error("No such document!");
      }
    }
  },
  modules: {
  }
})
