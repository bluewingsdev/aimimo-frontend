<template>
    <div class="header-wrap" :class="{ active: isTopMenu }" >
        <!-- one-depth에 mouse over하면 header에 active -->
        <div class="header">
             <h1 class="logo"><img :src="require(`@/assets/images/common/logo.png`)" alt=""></h1>
            <ul class="one-depth">
                <!-- one 기본 첫번째는 active, 선택했을때 active -->
                <li class="one active">
                    <IconSetting 
                    />
                    <span>ONE DEPTH</span>
                    <ul class="two-depth">
                        <!-- two 선택했을때 active -->
                        <li class="two active">
                            <div class="boxs">
                                <span class="">TWO DEPTH</span>
                                <!-- three depth가 있을때 arr -->
                                <span class="arr">&nbsp;</span>
                            </div>
                            <ul class="three-depth">
                                <!-- three 클릭했을때 active -->
                                <li class="three active">
                                    <span>THREE DEPTH</span>
                                </li>
                                <li class="three">
                                    <span>THREE DEPTH</span>
                                </li>
                                <li class="three">
                                    <span>THREE DEPTH</span>
                                </li>
                            </ul>
                        </li>
                        <li class="two">
                            <div class="boxs">
                                <span class="">TWO DEPTH</span>
                                <span class="arr">&nbsp;</span>
                            </div>
                            <ul class="three-depth">
                                <li class="three">
                                    <span>THREE DEPTH</span>
                                </li>
                                <li class="three">
                                    <span>THREE DEPTH</span>
                                </li>
                                <li class="three">
                                    <span>THREE DEPTH</span>
                                </li>
                            </ul>
                        </li>
                        <li class="two active">
                            <div class="boxs">
                                <span class="">TWO DEPTH</span>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="one">
                    <img src="../assets/images/common/menu-setting.svg" alt="" />
                    <span>ONE DEPTH</span>
                    <ul class="two-depth">
                        <li class="two">
                            <span>TWO DEPTH</span>
                        </li>
                    </ul>
                </li>
                <li class="one">
                    <img src="../assets/images/common/menu-setting.svg" alt="" />
                    <span>ONE DEPTH</span>
                </li>
            </ul>
            <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{name:'Main'}" class="nav-link active" aria-current="page" href="#">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'Login'}" class="nav-link" aria-current="page" href="#">로그인</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'Register'}" class="nav-link" aria-current="page" href="#">회원가입</router-link>
                </li>
            </ul> -->

             <!-- 왼쪽 메뉴가 열렸을땡는 안보이게 처리 -->
            <AppSettings />
        </div>
    </div>
</template>
  
<script>
    import IconSetting from "@/components/menu/IconSetting.vue";
    import AppSettings from "@/components/common/AppSettings.vue";
    export default {
        name: "AppHeader",
        components: {
            AppSettings,IconSetting
        },
        data() {},
        computed: {
            isTopMenu() {
                return this.$store.state.common.isTopMenu
            },
        },
        created() {},
        methods: {},
    }
</script>
  