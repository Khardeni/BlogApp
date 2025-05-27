<template>
    <div class="blog-card">
        <div class="icons">
            <div class="icon">
                <Edit class="icon" />
            </div>
            <div class="icon">
                <Trash class="icon" />
            </div>
        </div>
        <img :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)" alt="" />
        <div class="info">
            <h4>
                {{ post.blogTitle }}
            </h4>
            <h6>
                Posted on {{ post.blogDate }}
                <router-link class="link" to="#"> View Post
                    <Arrow class="arrow" />
                </router-link>
            </h6>
        </div>
    </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Trash from "../assets/Icons/trash-regular.svg";

export default {
    name: "BlogCard",
    props: ["post"],
    components: { Arrow, Edit, Trash },
    data() {
        return {};
    },

};
</script>


<style lang="scss" scoped>

.blog-card {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    
}
</style>