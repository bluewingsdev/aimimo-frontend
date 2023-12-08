<template>
  <div class="container" :class="themeColor">
    <AppHeader/>
    <div class="contents-wrap">
      <AppLeftMenu/>
      <div class="contents-area">
        <div class="open-page-wrap">
          <div class="tab-area">
              tab...
          </div>
          <!-- 상단메뉴가 열렸을땡는 안보이게 처리 -->
          <AppSettings v-if="!isTopMenu"/>
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
      themeColor() {
        return this.$store.state.common.themeColor
      },
      currentUser() {
        return this.$store.state.auth.user;
      },
      isTopMenu() {
        return this.$store.state.common.isTopMenu;
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
