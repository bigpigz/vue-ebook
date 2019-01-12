<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>

    export default{

    }
    document.addEventListener('DOMContentLoaded', () => {
        const html = document.querySelector('html')
        let fontSize = window.innerWidth / 10
        fontSize = fontSize > 50 ? 50 : fontSize //最大字体限制
        html.style.fontSize = fontSize + 'px'
    })
</script>
<style lang="scss" scope type="text/scss">
#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
