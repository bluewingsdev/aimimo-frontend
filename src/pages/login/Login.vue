<template>
    <div class="login-wrap" >
        <p class="img" v-for="(item, index) in loginItems" :key="index" :class="['img-' + (index + 1), { 'active': activeIndex === index }]">&nbsp;</p>
        <ul class="dots" >
            <li v-for="(item, index) in loginItems" :key="index" @click="activateItem(index)" :class="{ active: activeIndex === index }"></li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: "LoginPage",
    layout: "landing",
    components: {

    },
    data() {
        return {
        loginItems:[0,1,2,3,4],
        activeIndex: localStorage.getItem("loginImagePosition") || 0,
        loading: false,
        message: ""
        };
    },
    computed: {
        loggedIn() {
        return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
        this.$router.push("/profile");
        }
    },
    methods: {
        activateItem: function(index) {
            this.activeIndex = index;
            localStorage.setItem("loginImagePosition", index);
        },
        handleLogin(user) {
            this.loading = true;

            this.$store.dispatch("auth/login", user).then(
            () => {
                this.$router.push("/profile");
            },
            (error) => {
                this.loading = false;
                this.message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            }
            );
        },
    },
};
</script>
  