<template>
    <div class="header-wrap" :class="{ active: isTopMenu }" >
        <div class="header" @mouseout="onMenuReset(true)">
            <h1 class="logo"><img :src="require(`@/assets/images/common/logo.png`)" alt=""></h1>
            <ul class="one-depth" :class="{ hover: isMenuOpen}" @mouseleave="onMenuMouseleave()">
                <template v-for="(depth1) in menuList.filter(x => x.upMenuId == null)" :key="depth1">
                    <!-- 현재 상태에서.. 
                        one 를 오버하면..
                        one-depth 에 addClass "hover" 하고,
                        아웃하면 removeClass "hover" 해주세요.
                    -->
                    <li class="one" @mouseover="onMenuMouseover(depth1)">
                        <IconSetting 
                            :isActive="!depth1.isActive"
                        />
                        <span>{{ depth1.menuNm }}</span>
                        <ul class="two-depth" v-if="menuList.filter(x => x.upMenuId == depth1.menuId).length > 0">
                            <template v-for="(depth2) in menuList.filter(x => x.upMenuId == depth1.menuId)" :key="depth2">
                                <li class="two" :class="{ active: depth2.isActive }">
                                    <div v-if="!depth2.url" class="boxs" @click="onMenuClick(depth2)">
                                        <span class="">{{ depth2.menuNm }}</span>
                                        
                                        <span v-if="menuList.filter(x => x.upMenuId == depth2.menuId).length > 0" class="arr">
                                        <IcMenuArrow 
                                                :isActive="depth2.isActive"
                                            />
                                        </span>
                                    </div>
                                    <router-link v-else class="boxs" :to="depth2.url">
                                        <span class="">{{ depth2.menuNm }}</span>
                                    </router-link>
                                    <ul class="three-depth" v-if="!depth2.url && menuList.filter(x => x.upMenuId == depth2.menuId).length > 0">
                                        <template v-for="(depth3) in menuList.filter(x => x.upMenuId == depth2.menuId)" :key="depth3">
                                            <router-link v-if="depth3.url" :to="depth3.url">
                                                <li class="three">
                                                    <span>{{ depth3.menuNm }}</span>
                                                </li>
                                            </router-link>
                                            <li v-else class="three">
                                                <span>{{ depth3.menuNm }}</span>
                                            </li>
                                        </template>
                                    </ul>
                                </li>
                            </template>
                        </ul>
                    </li>
                </template>
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
            <AppSettings v-if="isTopMenu"/>
        </div>
    </div>
</template>
  
<script>
    import IconSetting from "@/components/menu/IconSetting.vue";
    import IcMenuArrow from "@/components/menu/IcMenuArrow.vue";
    import AppSettings from "@/components/common/AppSettings.vue";
    export default {
        name: "AppHeader",
        components: {IconSetting,IcMenuArrow,AppSettings},
        data() {
            return {
                isMenuOpen: false,
                menuList: [
                    {
                        menuId: 'MENU 1',
                        menuNm: 'MENU 1',
                        isActive: true,
                        upMenuId: null,
                        url: null
                    },
                    {
                        menuId: 'MENU 1-1',
                        menuNm: 'MENU 1-1',
                        isActive: false,
                        upMenuId: 'MENU 1',
                        url: null
                    },
                    {
                        menuId: 'MENU 1-2',
                        menuNm: 'MENU 1-2',
                        isActive: false,
                        upMenuId: 'MENU 1',
                        url: null
                    },
                    {
                        menuId: 'MENU 1-3',
                        menuNm: 'MENU 1-3',
                        isActive: false,
                        upMenuId: 'MENU 1',
                        url: null
                    },
                    {
                        menuId: 'MENU 1-1-1',
                        menuNm: '메인',
                        isActive: false,
                        upMenuId: 'MENU 1-1',
                        url: '/'
                    },
                    {
                        menuId: 'MENU 1-1-2',
                        menuNm: '회원가입',
                        isActive: false,
                        upMenuId: 'MENU 1-1',
                        url: '/register'
                    },
                    {
                        menuId: 'MENU 1-1-3',
                        menuNm: '로그인',
                        isActive: false,
                        upMenuId: 'MENU 1-1',
                        url: '/login'
                    },
                    {
                        menuId: 'MENU 2',
                        menuNm: 'MENU 2',
                        isActive: true,
                        upMenuId: null,
                        url: null
                    },
                    {
                        menuId: 'MENU 2-1',
                        menuNm: 'MENU 2-1',
                        isActive: false,
                        upMenuId: 'MENU 2',
                        url: null
                    },
                    {
                        menuId: 'MENU 2-2',
                        menuNm: 'MENU 2-2',
                        isActive: false,
                        upMenuId: 'MENU 2',
                        url: null
                    },
                    {
                        menuId: 'MENU 3',
                        menuNm: 'MENU 3',
                        isActive: true,
                        upMenuId: null,
                        url: null
                    }
                ]
            }
            
        },
        computed: {
            isTopMenu() {
                return this.$store.state.common.isTopMenu
            },
        },
        created() {},
        methods: {
            onMenuClick(menu) {
                if(menu.upMenuId == null) {
                    if(!menu.isActive) {
                        this.menuList.filter(x => x.upMenuId == null && x.menuId !== menu.menuId).forEach(x => x.isActive = false);
                    }
                }
                
                this.menuList.find(x => x.menuId === menu.menuId).isActive = !menu.isActive;
            },
            onMenuMouseover(menu) {
                this.menuList.filter(x => x.upMenuId == null && x.menuId !== menu.menuId).forEach(x => x.isActive = false);
                this.menuList.find(x => x.menuId === menu.menuId).isActive = true;
                this.isMenuOpen = true;
            },
            onMenuMouseleave() {
                this.isMenuOpen = false;
            },
            onMenuReset(isBool) {
                this.menuList.forEach(x => x.isActive = isBool);
            },
            
            movePage() {

            }
        }
    }
</script>
  