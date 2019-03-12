<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from 'common/pheader/Header'
import Categray from 'pages/Categray/Categray'
export default {
    components:{
        Header,Categray
    }
}
</script>

<style lang="less">
    // @import '~style/index.less'
</style>