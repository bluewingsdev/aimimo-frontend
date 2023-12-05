<template>
  <div class="container">
    <AppHeader/>
    <div class="contents-wrap">
      <AppLeftMenu/>
      <div class="contents-area">
        <div class="open-page-wrap">
          <div class="tab-area">
              tab...
          </div>
          <!-- 상단메뉴가 열렸을땡는 안보이게 처리 -->
          <AppSettings />
        </div>
        <router-view />
        <AppFooter/>
      </div>
    </div>
    
  </div>
</template>

<script>

  import AppHeader from '../components/common/AppHeader.vue'
  import AppLeftMenu from '../components/common/AppLeftMenu.vue'
  import AppFooter from '../components/common/AppFooter.vue'
  import AppSettings from '../components/common/AppSettings.vue'

  export default {
    name: 'DefaultLayout',

    components:{
      AppHeader,
      AppLeftMenu,
      AppFooter,
      AppSettings
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
