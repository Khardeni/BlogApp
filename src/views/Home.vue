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
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for free account today !</h2>
        <router-link class="router-button" to="#">
          Register Now !
          <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCards from '../components/BlogCard.vue';
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: { BlogPost, BlogCards, Arrow },
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

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;

    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
        
      }
    }
    h2{
      font-weight: 300;
      font-size: 12px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        font-size: 40px;
        text-align: initial;
        
      }
    }
  }
}
</style>
