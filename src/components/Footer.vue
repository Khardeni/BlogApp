<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{ name: 'Home' }">FireBlogs</router-link>
                    <ul>
                        <li>
                            <a href="#">
                                <youTube class="svg-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <twitter class="svg-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <instagram class="svg-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <linkedin class="svg-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <li>
                            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                        </li>
                        <li>
                            <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
                        </li>
                        <li>
                            <router-link  class="link" :to="{ name: 'newpost' }">Create Post</router-link>
                        </li>
                        <li>
                            <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login/Register</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p> copyright 2024 All rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
import youTube from '../assets/Icons/youtube-brands.svg';
import twitter from '../assets/Icons/twitter-brands.svg';
import instagram from '../assets/Icons/instagram-brands.svg';
import linkedin from '../assets/Icons/linkedin-brands.svg';
export default {
    name: 'footer-vue',
    components: {
        youTube,
        twitter,
        instagram,
        linkedin
    },
    computed:{
        user() {
            return this.$store.state.user;
        },
    },

};
</script>

<style lang="scss" scoped>
footer {
    margin-top: auto;
    padding: 100px 25px;
    background-color: #303030;

    .container {
        display: flex;
        flex-direction: column;
        gap: 32px;

        @media (min-width: 800px) {
            flex-direction: row;
            gap: 0;
        }

        >div {
            display: flex;
            flex: 1;
        }

        .left {
            gap: 32px;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (min-width: 800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;

            }


            .header {
                text-align: center;
                font-size: 24px;
                font-weight: 600;
                color: #fff;
                text-decoration: none;

                @media (min-width: 800px) {
                    text-align: initial;

                }

            }

            ul {
                gap: 16px;
                list-style: none;
                display: flex;
            }

            .col-1,
            .col-2 {
                gap: 32px;
                display: flex;
                flex: 1;

                @media (min-width: 800px) {
                    gap: 0;
                }
            }

            .col-1 {
                flex-direction: column;

                h2 {
                    text-align: center;

                    @media (min-width: 800px) {
                        text-align: initial;
                    }

                }


                ul {
                    margin-top: auto;

                    li {
                        display: flex;
                        align-items: center;

                        .svg-icon {
                            width: 25px;
                            height: auto;
                            color: #fff;
                        }
                    }

                }
            }


            .col-2 {
                ul {
                    height: 100%;
                    justify-content: center;
                    flex-direction: row;
                    flex-wrap: wrap;

                    @media (min-width: 800px) {
                        flex-direction: column;

                    }

                    .link {
                        font-size: 16px;
                        font-weight: 500;
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }
        }

        .right {
            color: #fff;
            gap: 32px;
            align-items: center;
            flex-direction: column;

            @media (min-width: 800px) {
                justify-content: flex-end;
                gap: 0;
            }
        }

        p {
            margin-top: auto;
        }
    }
}
</style>