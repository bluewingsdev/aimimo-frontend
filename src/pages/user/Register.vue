<template>
  <div>회원가입</div>
</template>
  
<script>
  
  export default {
    name: "RegisterPage",
    components: {

    },
    data() {
  
      return {
        successful: false,
        loading: false,
        message: ""
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    mounted() {

    },
    methods: {
      handleRegister(user) {
        this.message = "";
        this.successful = false;
        this.loading = true;
  
        this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      },
    },
  };
</script>
  