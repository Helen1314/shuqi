<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <dl>
                        <dt>{{index==='girl' ? '女生分类' : '男生分类'}}</dt>
                        <dd v-for="(data,index2) in list[index]" :key="index2">
                            <div class="picImg"
                               :style="{backgroundPositionY:index === 'girl' ? -index2*53+'px' : -(index2+list['girl'].length)*53+'px'}" 
                            ></div>
                            <!-- <img src="../../../assets/data_img.png" :style="{top:index === 'girl' ? -index2*53+'px' : -(index2+list['girl'].length)*53+'px'}"> -->
                            <span v-for="(title,index3) in data" :key="index3">
                                {{title}}
                            </span>
                        </dd>
                    </dl>
                </li> 
            </ul>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            list:{}
        }
    },
    created(){
        let url = 'http://walden1.shuqireader.com/webapi/rank/classrelation?_=1551966449269'
        this.$axios.post(url,qs.stringify({
            type: 1,
            timestamp: 1551966449267,
            sign: '2677b8e200048e2662fe0270c0837bcc',
            shuqi_h5:''
        }))
        .then((res)=>{
            // console.log(res) 
            this.list=res.data.data; 
            console.log(this.list)  
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang="less" scoped>
   @import '~style/index.less';
    .wrapper{
        position:fixed;
        .top(44);
        .bottom(0);
        .bug(red);
        overflow:hidden;
        font-size:@font-size-s;
        ul{
            .padding(0,0,1,0);
            .w(375);
            li{
                dl{
                    dt{
                        .padding(13.5,0,10,16);
                        background:@bg-categray-header;
                        color:@font-color-categray-header;
                        .l_h(12);
                    }
                    dd{
                        overflow:hidden;
                        position:relative;
                        // display:flex;
                        .margin(0,0,0,16);
                        .padding(14,0,10,0);
                        .l_h(40);
                        .h(40);
                        border-bottom:1px solid @border-bottom;
                        .picImg{
                            .w(36);
                            .h(43);
                            .margin(0,0,10,0);
                            background:url('../../../assets/data_img.png');
                            background-size:cover;
                        }
                        // img{
                        //     display:inline-block;
                        //     .w(36);
                        //     position:absolute;
                        // }
                        span{
                            .margin(0,0,0,50);
                            float:left;
                        }
                    }
                }
            }
        }
    }
</style>