import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
        { blogTitle: "blog card 1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2025" },
        { blogTitle: "blog card 2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2025" },
        { blogTitle: "blog card 3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2025" },
        { blogTitle: "blog card 4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2025" },
      ],
      editPost: null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
