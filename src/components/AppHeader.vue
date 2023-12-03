<template>
    <div class="header">
        header
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link :to="{name:'Main'}" class="nav-link active" aria-current="page" href="#">홈</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name:'Login'}" class="nav-link" aria-current="page" href="#">로그인</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name:'Register'}" class="nav-link" aria-current="page" href="#">회원가입</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
    export default {
        name: "AppHeader",
        components: {},
        data() {},
        computed: {},
        created() {},
        methods: {},
    }
</script>
  