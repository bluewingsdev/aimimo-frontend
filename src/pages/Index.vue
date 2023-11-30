<template>
    <v-row class="text-center">
        <v-col :cols="12" >
            메인화면
        </v-col>
        <v-row>
            <v-col :cols="6">
                화면분할50
            </v-col>
            <v-col :cols="6">
                화면분할50
            </v-col>
        </v-row>
    </v-row>
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
    };
</script>