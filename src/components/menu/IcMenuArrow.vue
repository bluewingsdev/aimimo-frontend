<template>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 4.5L6 8L2.5 4.5" stroke="#192F66" stroke-linecap="square" :style="{ stroke: themeColor === 'dark' ? defaultColor : activeColor }"/>
    </svg>
</template>
  
<script>

    export default {
        name: "MenuIcon",
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
        components: {
           
        },
        data() {},
        computed: { 
            themeColor() {
                return this.$store.state.common.themeColor
            },
        },
        created() {},
        methods: {},
    }
</script>
  