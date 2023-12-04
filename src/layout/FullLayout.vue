<template>
  <div class="container">
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
    },
  };
</script>  