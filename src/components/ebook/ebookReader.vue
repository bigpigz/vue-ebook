<template>
    <div class="ebook-reader">
        <div id="read"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    import Epub from 'epubjs'

    global.ePub = Epub
    export default{
        name: '',
        computed: {
            ...mapGetters(['fileName'])
        },
        methods: {
            initEpub(){
                const url = 'http://localhost:8088/epub/' + this.fileName + '.epub'
                this.book = new Epub(url)
                this.rendition = this.book.renderTo('read',{
                    width:innerWidth,
                    height:innerHeight,
                    method:'default'  //兼容微信视图
                })
                this.rendition.display()
            }
        },
        mounted(){
            const fileName = this.$route.params.fileName.split('|').join('/')
            this.$store.dispatch('setFileName',fileName).then(()=>{
                this.initEpub()
            })
        }

    }
</script>

<style lang="scss" scoped type="text/scss">
    @import "../../assets/styles/global";
</style>
