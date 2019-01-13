<template>
    <div class="ebook-reader">
        <div class="mask">
            <div class="left" @click="prevPage()"></div>
            <div class="center" @click="toggleMenu()"></div>
            <div class="right" @click="nextPage()"></div>
        </div>
        <div id="read"></div>

    </div>
</template>

<script type="text/ecmascript-6">
    import {ebookMixin} from '../../utils/mixin.js'
    import Epub from 'epubjs'

    global.ePub = Epub
    export default{
        name: '',
        mixins:[ebookMixin],
        computed: {

        },
        methods: {
            initEpub(){
                const url = 'http://localhost:8088/epub/' + this.fileName + '.epub'
                this.book = new Epub(url)
                this.rendition = this.book.renderTo('read', {
                    width: innerWidth,
                    height: innerHeight,
                    method: 'default'  //兼容微信视图
                })
                this.rendition.display()

                this.rendition.on('touchstart', event => {
                    this.touchStartX = event.changedTouches[0].clientX
                    this.touchStartTime = event.timeStamp
                })
                this.rendition.on('touchend', event => {
                    const offsetX = event.changedTouches[0].clientX - this.touchStartX
                    const time = event.timeStamp - this.touchStartTime
                    if (time < 500 && offsetX > 40) {
                        this.prevPage()
                    } else if (time < 500 && offsetX < -40) {
                        this.nextPage()
                    } else {
                        this.toggleMenuVisible()
                    }
                    event.preventDefault()
                    event.stopPropagation()
                })

            },
            prevPage(){
                if(this.rendition){
                    this.rendition.prev()
                    this.hideTitleAndMenu()
                }
            },
            toggleMenu(){
//                this.$store.dispatch('setMenuVisible',!this.menuVisible)
                this.setMenuVisible(!this.menuVisible)
            },
            nextPage(){
                if(this.rendition){
                    this.rendition.next()
                    this.hideTitleAndMenu()
                }
            },
            hideTitleAndMenu(){
//                this.$store.dispatch('setMenuVisible',false)
                this.setMenuVisible(false)
            }
        },
        mounted(){
            const fileName = this.$route.params.fileName.split('|').join('/')
//            this.$store.dispatch('setFileName', fileName).then(() => {
//                this.initEpub()
//            })
            this.setFileName(fileName).then(() => {
                this.initEpub()
            })
        }

    }
</script>

<style lang="scss" scoped type="text/scss">
    @import "../../assets/styles/global";
    .mask{
        position: absolute;
        left: 0;
        top: px2rem(100);
        overflow: hidden;
        z-index: 999;
        height: 50%;
        width: 100%;
        .left{
            float: left;
            height: 100%;
            width: 33%;
            /*background: black;*/
        }
        .center{
            float: left;
            height: 100%;
            width: 34%;
            /*background: skyblue;*/
        }
        .right{
            float: right;
            height: 100%;
            width: 33%;
            /*background: blue;*/
        }
    }
</style>
