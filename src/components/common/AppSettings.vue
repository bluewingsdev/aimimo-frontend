<template>
    <div class="settings-wrap">
        <!-- 메뉴 위치 : left-menu-wrap, header-wrap : 선택된 메뉴의 클래스에 active -->
        <!-- 셋팅 영역 : left-menu-wrap active : open-page-wrap 안에 <AppSettings/> -->
        <!-- 셋팅 영역 : header-wrap active : header-wrap 안에 <AppSettings/> -->
        <div class="">텝닫기</div>
        <div class="">새로고침</div>
        <div class="">
            설정
            <div class="settings">
                <div class="tit">색상모드</div>
                <ul class="color-set">
                    <li class="navy active"><span class=""></span>Navy</li>
                    <li class="gray"><span class=""></span>Gray</li>
                    <li class="orange"><span class=""></span>Orange</li>
                    <li class="blue"><span class=""></span>Blue</li>
                    <li class="green"><span class=""></span>Green</li>
                    <li class="aqua"><span class=""></span>AquaBlue</li>
                    <li class="dark"><span class=""></span>Dark</li>
                </ul>
                <div class="tit">
                    메뉴위치
                    <span class="round-toggle">
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
        <div class="member"><span>홍길동</span>님</div>

    </div>
</template>
  
<script>

    export default {
        name: "AppSettings",
        components: {},
        data() {},
        computed: {},
        created() {},
        methods: {},
    }
</script>
  