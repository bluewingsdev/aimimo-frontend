<template>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- isActive 값으로 체크박스의 체크에 따라 이미지를 바꿔주려고 합니다. 아래 rect 를 isActive로 구분해서 노출되게 해주세요. 아직 체크 이미지는 못받았습니다. -->
        <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="#192F66" :style="{ stroke: activeColor }"/>
        <!-- <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="#192F66" :style="{ stroke: defaultColor }"/> -->
    </svg>
</template>
  
<script>

    export default {
        name: "IcCheckOff",
        props: {
            isActive: {
                type: Boolean,
                default: false
            },
            defaultColor: {
                type: String,
                default:`var(--color-white-fixed)`
            },
            activeColor: {
                type: String,
                default:`var(--color-primary)`
            }
            
        },
        components: {},
        data() {},
        computed: {},
        created() {},
        methods: {},
    }
</script>
  