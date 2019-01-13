<template>
    <div class="ebook">
        <ebook-reader></ebook-reader>
        <ebook-title></ebook-title>
        <ebook-menu></ebook-menu>
    </div>
</template>

<script type="text/ecmascript-6">
    import ebookReader from '../../components/ebook/ebookReader.vue'
    import ebookTitle from '../../components/ebook/ebookTitle.vue'
    import ebookMenu from '../../components/ebook/ebookMenu.vue'

    export default{
        name: '',
        components:{
            ebookReader,
            ebookTitle,
            ebookMenu
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    @import "../../assets/styles/global";
</style>
