<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">FireBlogs</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
                    <router-link class="link" :to="{ name: 'createpost' }">Create Post</router-link>
                    <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login/Register</router-link>
                </ul>
                <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
                    <span> {{ this.$store.state.profileinitials }}</span>
                    <div v-show="profileMenu" class="profile-meunu">
                        <div class="info">
                            <p class="initials"> {{ this.$store.state.profileinitials }}</p>
                            <div class="right">
                                <p>{{ this.$store.state.profileFirstName }} {{
                                    this.$store.state.profileLastName }}</p>
                                <p>{{ this.$store.state.profileUsername }}</p>
                                <p>{{ this.$store.state.profileEmail }}</p>

                            </div>
                        </div>
                        <div class="options">
                            <div class="option">
                                <router-link class="option" :to="{ name: 'Profile' }">
                                    <userIcon class="icon" />
                                    <p>Profile</p>
                                </router-link>
                            </div>
                            <div class="option">
                                <router-link class="option" :to="{ name: 'Admin' }">
                                    <adminIcon class="icon" />
                                    <p>Admin</p>
                                </router-link>
                            </div>
                            <div @click="signOut" class="option">
                                <SignoutIcon class="icon" />
                                <p>Sign Out</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
                <router-link class="link" :to="{ name: 'createpost' }">Create Post</router-link>
                <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
import adminIcon from '../assets/Icons/user-crown-light.svg';
import userIcon from '../assets/Icons/user-alt-light.svg';
import SignoutIcon from '../assets/Icons/sign-out-alt-regular.svg';
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name: 'Navigation',
    components: {
        menuIcon,
        userIcon,
        adminIcon,
        SignoutIcon
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            profileMenu: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();

    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        toggleProfileMenu(e) {
            if (e.target === this.$refs.profile) {

                this.profileMenu = !this.profileMenu;
            }
        },
        signOut() {
            firebase.auth().signOut();
            window.location.reload();

        }
    },

    computed:{
        user() {
            return this.$store.state.user;
        },
    }
    
}




</script>

<style lang="scss" scoped>
header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3ms color ease;

    &:hover {
        color: #1eb8b8;
    }
}

nav {
    display: flex;
    padding: 25px 0;

    .branding {
        display: flex;
        align-items: center;

        .header {
            font-size: 2rem;
            font-weight: 600;
            color: #000000;
            text-decoration: none;
        }
    }

    .nav-links {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;

        ul {
            margin-right: 32px;

            .link {
                margin-right: 32px;
            }

            .link:last-child {
                margin-right: 0;
            }
        }

    }

    .profile {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #303030;
        color: #fff;
        cursor: pointer;


        span {
            pointer-events: none;
        }

        .profile-meunu {
            position: absolute;
            top: 50px;
            right: 0;
            width: 250px;
            background-color: #303030;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

            .info {
                display: flex;
                align-items: center;
                padding: 16px;
                border-bottom: 1px solid #fff;

                .initials {
                    position: initial;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #fff;
                    color: #303030;
                }

                .right {
                    flex: 1;
                    margin-left: 24px;


                    p:nth-child(1) {
                        font-size: 14px;
                    }

                    p:nth-child(2),
                    p:nth-child(3) {
                        font-size: 12px;
                    }

                }
            }

            .options {
                padding: 15px;

                .option {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                    color: #fff;

                    .icon {
                        width: 14px;
                        height: auto;

                    }

                    p {
                        font-size: 14px;
                        margin-left: 12px
                    }

                    &:last-child {
                        margin-bottom: 0px;
                    }
                }


            }
        }
    }
}

.menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 32px;
    height: 25px;
    width: auto;
}

.mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
        padding: 15px 0;
        color: #fff;
    }

}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: all 1s ease;
}

.mobile-nav-enter {
    transform: translateX(-250px);
    opacity: 0;
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

.mobile-nav-leave-to {
    transform: translateX(-250px);
    opacity: 0;
}
</style>