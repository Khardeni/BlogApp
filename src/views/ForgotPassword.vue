<template>
    <div class="reset-password">
        <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
        <Loading  v-if="loading"/>
        <div class="form-wrap">
            <form class="reset">
                 <p class="login-register">
                Back To <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
            </p>
                <h2>Reset Password</h2>
                <p> Forgot your password? Enter your email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email" />
                        <email class="icon" />
                    </div>
                </div>
                <button @click.prevent="resetPassword"> Send Reset Link </button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>
    </div>
</template>
<script>
import email from '../assets/Icons/envelope-regular.svg';
import Loading from '../components/Loading.vue';
import Modal from '../components/Modal.vue';
import firebase from 'firebase/app';
import 'firebase/auth';
export default {

    name: 'ForgotPassword',
    data() {
        return {
            email: '',
            modalActive: null,
            modalMessage: '',
            loading: null,

        }
    },
    components: {
        email,
        Modal,
        Loading,
    },
    methods: {
        resetPassword() {
            this.loading = true;
            firebase.auth().sendPasswordResetEmail(this.email)
                .then(() => {
                    this.modalActive = true;
                    this.modalMessage = 'A password reset link has been sent to your email.';
                    this.loading = false;
                })
                .catch((err) => {
                    this.modalActive = true;
                    this.modalMessage = err.message;
                    this.loading = false;
                });
        },
            
        closeModal(){
            this.modalActive =! this.modalActive;
            this.email = '';
        },
    }
}
</script>

<style lang="scss" scoped>
.reset-password {
    position: relative;

    .reset {
        h2 {
            margin-bottom: 8px;
        }

        p {
            text-align: center;
            margin-bottom: 32px;
        }
    }

}
</style>