<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Latest Posts</h3>
        <div class="blog-cards">
          <blogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCards from '../components/BlogCard.vue';

export default {
  name: "Home",
  components: { BlogPost, BlogCards },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to the Blog",
        blogPost: "This is a simple blog application built with Vue.js and Firebase.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "this is a filler title  !",
          blogHTML: "this is a filler blog post !",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "this is a filler title  !",
          blogHTML: "this is a filler blog post !",
          blogCoverPhoto: "designed-for-everyone",
        },

      ],
      sampleBlogCards: [
        { blogTitle: "blog card 1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2025" },
        { blogTitle: "blog card 2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2025" },
        { blogTitle: "blog card 3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2025" },
        { blogTitle: "blog card 4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2025" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }

}
</style>
