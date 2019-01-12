<template>
    <div class="ebook">
        <ebook-reader></ebook-reader>
    </div>
</template>

<script type="text/ecmascript-6">
    import ebookReader from '../../components/ebook/ebookReader.vue'
    export default{
        name: '',
        components:{
            ebookReader
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    @import "../../assets/styles/global";
</style>
