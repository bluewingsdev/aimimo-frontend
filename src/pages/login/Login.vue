<template>
    <div class="login-wrap" >
        <p class="img" v-for="(item, index) in loginItems" :key="index" :class="['img-' + (index + 1), { 'active': activeIndex === index }]">&nbsp;</p>
        <ul class="dots" >
            <li v-for="(item, index) in loginItems" :key="index" @click="activateItem(index)" :class="{ active: activeIndex === index }"></li>
        </ul>
        <div class="login-form">
            <div class="stack-column" style="gap:20px">
                <div class="stack-column" style="gap:30px">
                    <h1 class="logo"><img :src="require(`@/assets/images/common/logo.png`)" alt=""></h1>
                    <div class="stack-column" style="gap:10px">
                        <input class="input" type="text" placeholder="ID" v-model="userId"/>
                        <input class="input" type="password" placeholder="Password" v-model="userPassword"/>
                    </div>
                </div>
                <button class="login" @click="handleLogin()">LOGIN</button>
                <div class="stack-row justify-content-space-between">
                    <div class="checkbox">
                        <input type="checkbox" class="check-box">
                        <!-- input에 checked를 하면 아래 isActive에 true를 넘겨주세요. -->
                        <label><IcCheckOff :isActive="true"/>SAVE ID</label>
                    </div>
                    <div class="icon-text">
                        <IcPassword />
                        <p>Password Reset</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import IcCheckOff from '@/components/icon/IcCheckOff.vue';
import IcPassword from '@/components/icon/IcPassword.vue';
export default {
    name: "LoginPage",
    components: {
        IcCheckOff, IcPassword
    },
    data() {
        return {
            loginItems:[0,1,2,3,4],
            activeIndex: parseInt(localStorage.getItem("loginImagePosition")) || 0,
            loading: false,
            message: "",
            userId: "",
            userPassword: ""
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/");
        }
    },
    methods: {
        activateItem: function(index) {
            this.activeIndex = index;
            localStorage.setItem("loginImagePosition", index);
        },
        handleLogin() {
            this.loading = true;

            this.$store.state.auth.status.loggedIn = true;

            this.$store.state.auth.user = {
                userId : this.userId,
                password: this.userPassword,
                userNm: this.userId
            };

            localStorage.setItem('user', JSON.stringify(this.$store.state.auth.user));

            this.$router.go("/");

            // this.$store.dispatch("auth/login", user).then(
            //     () => {
            //         this.$router.go("/");
            //     },
            //     (error) => {
            //         this.loading = false;
            //         this.message =
            //         (error.response &&
            //         error.response.data &&
            //         error.response.data.message) ||
            //         error.message ||
            //         error.toString();
            //     }
            // );
        },
    },
};
</script>
  