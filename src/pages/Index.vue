<template>
    <div class="contents">
        <!--  -->
        <button @click="handleLogout()">로그아웃</button>
    </div>
</template>
  
<script>
    export default {
        name: "IndexPage",
        data() {
            return {
            content: "",
            };
        },
        mounted() {
            
        },
        methods: {
            handleLogout() {
                this.$store.dispatch("auth/logout").then(
                    () => {
                        this.$router.go("/");
                    }
                );
            }
        } 
    };
</script>