<template>
    <div class="form-wrap">
        <form class="login">
            <p class="login-register">
                Don't have an account? <router-link class="router-link"
                    :to="{ name: 'Register' }">Register</router-link>
            </p>
            <h2> Login to Blogster</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email" />
                    <email class="icon" />
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password" />
                    <password class="icon" />
                </div>
            </div>
            <div v-show="error" class="error">{{ this.errorMessage }}</div>
            <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">
                Forgot Password?
            </router-link>
            <button @click.prevent="signIn"> Sign In </button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>

<script>
import email from '../assets/Icons/envelope-regular.svg';
import password from '../assets/Icons/lock-alt-solid.svg';
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
    name: 'Login',
    components: {
        email,
        password
    },
    data() {
        return {
            email: null,
            password: null,
            error: null,
            errorMessage: '',
        };
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push({ name: 'Home' });
                    this.error = false;
                    this.errorMessage = '';
                    console.log(firebase.auth().currentUser.uid);
                    
                }).catch((err) => {
                    this.error = true;
                    this.errorMessage = err.message;
                    
                });
        }
    
    },
}
</script>

<style lang="scss">
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 900px) {
        width: 100%;
        margin: 0;
        justify-content: flex-start;
        align-items: stretch;

    }

    .login-register {
        margin-bottom: 32px;

        .router-link {
            color: #000;

        }
    }

    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;

        @media (min-width: 900px) {
            padding: 0 50px;
            max-width: 500px;
            flex: 0 0 auto;

        }

        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;

            @media (min-width: 900px) {
                font-size: 40px;

            }
        }

        .inputs {
            width: 100%;
            max-width: 350px;

            .input {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;

                input {
                    width: 100%;
                    border: none;
                    background-color: #f2f7f6;
                    padding: 4px 4px 4px 30px;
                    height: 50px;

                    &:focus {
                        outline: none;
                    }

                }
            }

            .icon {
                position: absolute;
                left: 6px;
                width: 12px;
            }
        }

        .forgot-password {
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            margin: 16px 0 32px;
            border-bottom: 1px solid transparent;
            transition: 0.5s ease all;

            &:hover {
                border-color: #303030;
            }
        }

        .angle {
            display: none;
            position: absolute;
            background-color: #fff;
            transform: rotateZ(3deg);
            width: 60px;
            right: -30px;
            height: 101%;

            @media (min-width: 900px) {
                display: initial;

            }
        }
    }

    .background {
        display: none;
        flex: 2;
        background-size: cover;
        background-image: url("../assets/background.png");
        background-position: center;
        background-repeat: no-repeat;

        @media(min-width: 900px) {
            display: block;
            flex: 1;
            min-height: 100vh;

        }
    }
}
</style>