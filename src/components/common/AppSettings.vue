<template>
    <div class="settings-wrap" :class="{top: isTopMenu}">
        <!-- 메뉴 위치 : left-menu-wrap, header-wrap : 선택된 메뉴의 클래스에 active -->
        <!-- 셋팅 영역 : left-menu-wrap active : open-page-wrap 안에 <AppSettings/> -->
        <!-- 셋팅 영역 : header-wrap active : header-wrap 안에 <AppSettings/> -->
        <div class="">텝닫기</div>
        <div class="" @click="reload()"><IcRefresh /></div>
        <div class="setting-btn">
            <IcSettings   />
            <div class="settings">
                <div class="tit">색상모드</div>
                <ul class="color-set">
                    <li class="navy" :class="{active: themeColor === 'navy'}" @click="onColorSetClick('navy')"><span class=""></span>Navy</li>
                    <li class="gray" :class="{active: themeColor === 'gray'}" @click="onColorSetClick('gray')"><span class=""></span>Gray</li>
                    <li class="orange" :class="{active: themeColor === 'orange'}" @click="onColorSetClick('orange')"><span class=""></span>Orange</li>
                    <li class="blue" :class="{active: themeColor === 'blue'}" @click="onColorSetClick('blue')"><span class=""></span>Blue</li>
                    <li class="green" :class="{active: themeColor === 'green'}" @click="onColorSetClick('green')"><span class=""></span>Green</li>
                    <li class="aqua" :class="{active: themeColor === 'aqua'}" @click="onColorSetClick('aqua')"><span class=""></span>AquaBlue</li>
                    <li class="dark" :class="{active: themeColor === 'dark'}" @click="onColorSetClick('dark')"><span class=""></span>Dark</li>
                </ul>
                <div class="tit" @click="onToggleMenuClick()">
                    메뉴위치
                    <span class="round-toggle" :class="{active : isTopMenu}">
                        &nbsp;
                    </span>
                </div>
                <div class="tit">
                    KOR
                    <ul>
                        <li>KOR</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="member"><span v-if="currentUser">{{ currentUser.userNm }}</span>님</div>

    </div>
</template>
  
<script>
    import IcRefresh from "@/components/icon/IcRefresh.vue";
    import IcSettings from "@/components/icon/IcSettings.vue";
    export default {
        name: "AppSettings",
        components: { IcRefresh, IcSettings },
        data() {},
        computed: {
            themeColor() {
                return this.$store.state.common.themeColor
            },
            isTopMenu() {
                return this.$store.state.common.isTopMenu
            },
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        created() {},
        methods: {
            onColorSetClick(colorSet) {
                this.$store.dispatch("common/setThemeColor", colorSet);
            },
            onToggleMenuClick() {
                this.$store.dispatch("common/toggleTopMenu");
            },
            reload() {
                this.$router.go(this.$router.currentRoute);
            },
            handleLogout() {
                this.$store.dispatch("auth/logout").then(
                    () => {
                        this.$router.go("/");
                    }
                );
            }
        },
    }
</script>
  