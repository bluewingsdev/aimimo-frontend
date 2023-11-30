<template>
    <v-row class="text-center">
        <v-col :cols="12">
            로그인페이지
        </v-col>
        <v-row>
            <v-col :cols="8">
                화면분할67
            </v-col>
            <v-col :cols="4">
                화면분할33
            </v-col>
        </v-row>
    </v-row>
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
  