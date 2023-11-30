<template>
  <div class="container">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </div>
</template>

<script>

  import AppHeader from '../components/AppHeader.vue'
  import AppFooter from '../components/AppFooter.vue'

  export default {
    name: 'DefaultLayout',

    components:{
      AppHeader,
      AppFooter
    },

    data: () => ({
    //
    }),

    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
</script>
