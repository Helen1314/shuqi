<template>
        <div class="header">
            <div class="icofont-rounded-left"></div>
            <!-- <span>{{context}}</span> -->
            <div class="icofont-ui-home"></div>
        </div>
</template>

<script>
import '@/icofont1/icofont.min.css';
export default {
    data(){
        return{
            list:[]
        }
    },
    watch:{
        $route(to,from){
            switch(to.path){
               // case '/categray':this.context = '分类';
              //  case '/rank':this.context = '排行';
            //     case '/categray':this.context = '分类';
            //     case '/categray':this.context = '分类';
            //     case '/categray':this.context = '分类';
            }
        }
    }
}
</script>

<style lang="less" scope>
    @import '~style/index.less';
    .header{
        .h(44);
        display:flex;
        justify-content:space-between;
        .l_h(44);
        text-align:center;
        .padding(0,10,0,10);
        font-size:@font-size-m;
        color:@font-color-header;
        border-bottom:1px solid @border-bottom;
        div{
            .l_h(44);
            color:@icon-color-header;
        }
    }
</style>