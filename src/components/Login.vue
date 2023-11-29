<template>
    <div>
        로그인 페이지111
    </div>
</template>
  
<script>
export default {
    name: "LoginPage",
    components: {

    },
    data() {
        return {
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
  