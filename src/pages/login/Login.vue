<template>
    <div>login</div>
</template>
  
<script>
export default {
    name: "LoginPage",
    layout: "landing",
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
  