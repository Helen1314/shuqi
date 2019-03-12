<template>
    <div class="book">
        <dl>
            <dt>
                <div class="left-img">
                    <img :src="one.picImg" alt="">
                    <i class="book-top"></i>
                </div>
                <div class="right-text">
                    <h3>{{one.name}}</h3>
                    <p class="author">{{one.author}}</p>
                    <p class="describe">{{one.describe}}</p>
                    <div class="squral-tag">
                        <span :class="one.state === '完结'? 'finished' : 'serialized'">{{one.state}}</span>
                        <span class="words">{{Math.ceil((one.words/10000))+'万'}}</span>
                        <span v-for="(item,index) in one.tag" :key='index' v-if='index<2'>
                            {{item}}
                        </span>
                    </div>
                </div>
            </dt>
            <dd v-for="(rank,ind) in list" :key="ind">
                <i :class="ind/1+2<4 ? 'light' : 'gray'">{{ind+2}}</i>
                <h4>{{rank.name}}</h4>
                <div class="squral-tag">
                    <span :class="rank.state==='连载' ? 'serialized' : 'finished'">{{rank.state}}</span>
                    <span>{{rank.className}}</span>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
import {Base64} from 'js-base64';
export default {
    data(){
        return{
            list:[],
            one:{}
        }
    },
    methods:{
        // 处理数据
        getData(data){
            let arr = [];
            for( let i = 0 , length=data.length;i<length;i++ ){
                arr.push({
                    name:data[i].bookname,
                    author:data[i].author_name,
                    tag:data[i].tag,
                    state:data[i].stat_name,
                    describe:data[i].introduction,
                    picImg:data[i].book_cover,
                    words:data[i].size,
                    className:data[i].class_name
                })
            }
            this.one = arr[0];
            // console.log(this.one)
            arr.shift();
            this.list = arr;
        },
        
    },
    props:['Book'],
    created(){
        // 拿到总体的数据
        let url = ` /home/eva_bookstore/v1${this.Book.bookstr}`
        this.$axios.get(url)
        .then((data)=>{
            let listData = data.data.data.module;
            let context = listData.find(v=>v.m_s_name===this.Book.name && v.content instanceof Array)
            this.getData(context.content);
        })
        .catch((err)=>{
            console.log(err)    
        })
    }
}
</script>

<style lang="less" scoped>
    @import '~style/index.less';
    .book{
        dl{
            .squral-tag{
                span{
                    display:inline-block;
                    border:1px solid @categray-novel-border;
                    .padding(0,6,0,6);
                    .margin(0,4,0,0);
                    font-size:@font-size-s;
                    color:@font-color-categray-header;
                    border-radius:unit(2/@rem-size,rem);
                }
                span.finished{
                    color:@categray-novel-finished;
                    border-color:@categray-novel-finished-border;   
                }
                span.serialized{
                    color:@categray-novel-serialized;
                    border-color:@categray-novel-serialized-border;  
                }
            }
            dt{
                .padding(16,16,16,16);
                display:flex;
                .left-img{
                    position:relative;
                    .w(84);
                    .h(110);
                    border:1px solid @border-bottom;
                    .margin(0,16,0,0);
                    img{
                        height:100%;
                    }
                    .book-top{
                        position:absolute;
                        top:0;
                        left:0;
                        background:url('../../../assets/firstIcon.png');
                        background-size:cover;
                        .h(34.5);
                        .w(22.5);
                    }
                }
                .right-text{
                    color:@font-color-categray-header;
                    h3{
                        color:@font-color-header;
                        font-size:@font-size-ms;
                        font-weight:normal;
                    }
                    .author{
                        font-size:@font-size-s;
                        .margin(8,0,8,0);
                    }
                    .describe{
                        width:100%;
                        font-size:@font-size-s;
                        text-overflow:ellipsis;
                        overflow:hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        .margin(0,0,8,0);
                    }
                }

            }
            dd{
                .margin(0,0,0,16);
                .padding(15,15,16,0);
                font-size:@font-size-ms;
                color:@font-color-header;
                display:flex;
                border-top:1px solid @border-bottom;
                i.light{
                    color:@home-rank-color;
                }
                i{
                    font-weight:bold;    
                }
                i.gray{
                    color:@font-color-categray-header;
                }
                h4{
                    .margin(0,0,0,16);
                    flex:1;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    font-weight:normal;
                }
            }
        }
    }
</style>