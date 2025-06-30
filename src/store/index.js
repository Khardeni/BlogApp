import Vue from 'vue'
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import db from "../firebase/firebaseInit";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileinitials: null,
  },
  getters: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);
    },
    blogPostsCards(state) {
      return state.blogPosts.slice(2, 6);
    },
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
     setBlogState(state, payload) {
      state.blogTitle = payload.blogTitle;
      state.blogHTML = payload.blogHTML;
      state.blogPhotoFileURL = payload.blogCoverPhoto;
      state.blogPhotoName = payload.blogCoverPhotoName;
    },
    filterBlogPost(state, payload) {
      state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload);
    },
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
    setProfileFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    setProfileLastName(state, payload) {
      state.profileLastName = payload;
    },

    setProfileUsername(state, payload) {
      state.profileUsername = payload;
    }
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
    },
    async updateProfile({ commit, state }) {
      const dataBase = db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUsername
      });
      commit('setProfileInitials');

    },
    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
      commit("filterBlogPost", payload);
      await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("blogPosts").doc(payload);
      await getPost.delete();
      commit("filterBlogPost", payload);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
  },
  
  modules: {
  }
})
