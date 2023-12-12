<template>
    <div class="left-menu-wrap" :class="{active: !isTopMenu}">
        <h1 class="logo"><img :src="require(`@/assets/images/common/logo_w.png`)" alt=""></h1>
        <div class="left-menus">
            <ul class="one-depth">
                <!-- one 기본 첫번째는 active, 선택했을때 active -->
                <template v-for="(depth1) in menuList.filter(x => x.upMenuId == null)" :key="depth1">
                    <li class="one" :class="{active: depth1.isActive}" @mouseover="onMenuMouseover(depth1)">
                        <IconSetting 
                            :isActive="depth1.isActive"
                        />
                        <span>{{ depth1.menuNm }}</span>
                        <ul class="two-depth" v-if="menuList.filter(x => x.upMenuId == depth1.menuId).length > 0">
                            <template v-for="(depth2) in menuList.filter(x => x.upMenuId == depth1.menuId)" :key="depth2">
                                <li class="two" :class="{active: depth2.isActive}">
                                    <div v-if="!depth2.url" class="boxs" @click="onMenuClick(depth2)">
                                        <span class="">{{ depth2.menuNm }}</span>
                                        <!-- three depth가 있을때 arr -->
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
                                        <!-- three 클릭했을때 active -->
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
        </div>
    </div>
</template>
  
<script>
    import IconSetting from "@/components/menu/IconSetting.vue";
    import IcMenuArrow from "@/components/menu/IcMenuArrow.vue";
    export default {
        name: "AppLeftMenu",
        components: {IconSetting,IcMenuArrow},
        data() {
            return {
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
                        isActive: true,
                        upMenuId: 'MENU 1',
                        url: null
                    },
                    {
                        menuId: 'MENU 1-2',
                        menuNm: 'MENU 1-2',
                        isActive: true,
                        upMenuId: 'MENU 1',
                        url: null
                    },
                    {
                        menuId: 'MENU 1-3',
                        menuNm: 'MENU 1-3',
                        isActive: true,
                        upMenuId: 'MENU 1',
                        url: null
                    },
                    {
                        menuId: 'MENU 1-1-1',
                        menuNm: '메인',
                        isActive: true,
                        upMenuId: 'MENU 1-1',
                        url: '/'
                    },
                    {
                        menuId: 'MENU 1-1-2',
                        menuNm: '회원가입',
                        isActive: true,
                        upMenuId: 'MENU 1-1',
                        url: '/register'
                    },
                    {
                        menuId: 'MENU 1-1-3',
                        menuNm: '로그인',
                        isActive: true,
                        upMenuId: 'MENU 1-1',
                        url: '/login'
                    },
                    {
                        menuId: 'MENU 2',
                        menuNm: 'MENU 2',
                        isActive: false,
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
                        isActive: false,
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
            },
            movePage() {

            }
        }
    }
    
</script>