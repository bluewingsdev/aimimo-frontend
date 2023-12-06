<template>
  <div class="container" :class="themeColor">
    <div class="contents-wrap">
      <router-view />
    </div>
  </div>
</template>
  
<script>
  import { mapState } from "vuex";
  export default {
    name: "FullLayout",
    computed: {
      ...mapState({
        
      }),
      themeColor() {
        return this.$store.state.common.themeColor
      },
    },
  };
</script>  