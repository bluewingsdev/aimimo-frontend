<template>
  <div class="full-container">
    <router-view />
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