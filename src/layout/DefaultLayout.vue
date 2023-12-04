<template>
  <div class="container">
    <AppHeader/>
    <div class="contents-wrap">
      <AppLeftMenu/>
      <div class="contents-area">
        <router-view />
        <AppFooter/>
      </div>
    </div>
    
  </div>
</template>

<script>

  import AppHeader from '../components/AppHeader.vue'
  import AppLeftMenu from '../components/AppLeftMenu.vue'
  import AppFooter from '../components/AppFooter.vue'

  export default {
    name: 'DefaultLayout',

    components:{
      AppHeader,
      AppLeftMenu,
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
