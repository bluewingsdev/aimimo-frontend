<template>
    <div class="left-menu-wrap active">
        <h1 class="logo"><img :src="require(`@/assets/images/common/logo_w.png`)" alt=""></h1>
        <ul class="one-depth">
            <!-- one 기본 첫번째는 active, 선택했을때 active -->
            <li class="one active">
                <IconSetting 
                    :color="'black'"
                    :bgColor="'blue'"
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
                <img class="svg" :src="require(`@/assets/images/common/menu-setting.svg`)" alt="" />
                <span>ONE DEPTH</span>
                <ul class="two-depth">
                    <li class="two">
                        <span>TWO DEPTH</span>
                    </li>
                </ul>
            </li>
            <li class="one">
                <img class="svg" :src="require(`@/assets/images/common/menu-setting.svg`)" alt="" />
                <span>ONE DEPTH</span>
            </li>
        </ul>
    </div>
</template>
  
<script>
    import IconSetting from "@/components/menu/IconSetting.vue";
    export default {
        name: "AppLeftMenu",
        components: {IconSetting},
        data() {},
        computed: {},
        created() {},
        methods: {}
    }
    
</script>