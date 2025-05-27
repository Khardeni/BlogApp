<template>
    <div class="blog-card">
        <div class="icons">
            <div class="icon">
                <Edit class="edit" />
            </div>
            <div class="icon">
                <Trash class="trash" />
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
    background-color: #fff;
    min-height: 420px;
    transition: .5 ease all;

    &:hover {
        transform: rotateZ(-1deg) scale(1.01);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .icons {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        z-index: 99;

        .icon {
            width: 35px;
            height: 35px;
            background-color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .5s ease all;

            &:hover {
                background-color: #303030;

                .edit,
                .trash {
                    path {
                        fill: #fff;
                    }
                }
            }

            &:nth-child(1) {
                margin-right: 8px;
            }

            .edit,
            .trash {
                pointer-events: none;
                height: 15px;
                width: auto;
            }
        }
    }

    img {
        display: block;
        border-radius: 8px 8px 0 0;
        z-index: 1;
        width: 100%;
        min-height: 200px;
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        height: 100%;
        z-index: 3;
        padding: 32px 16px;
        color: #000;

        h4 {
            font-size: 28px;
            font-weight: 300;
            margin-bottom: 8px;
        }

        h6 {
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 16px;
            color: #666;
        }

        .link {
            display: inline-flex;
            align-items: center;
            margin-top: auto;
            font-weight: 500;
            padding-top: 20px;
            font-size: 12px;
            padding-bottom: 4px;
            transition: 0.5 ease-in all;

            &:hover {
                color: rgba (48, 48, 48, 0.8);

            }

            .arrow {
                width: 10px;
            }
        }
    }
}
</style>