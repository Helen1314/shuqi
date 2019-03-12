<template>
	<div class='channel' ref='wrapper'>
		<div class='content'>
			<bookIntroduce :list='list1'></bookIntroduce>
			<div class='hot-categray'>
				<div class='common-header'>
					<h3 class='title'>{{list[1].m_s_name}}</h3>
				</div>
				<!-- 轮播图 -->
				<banner :list='listCat'></banner>
		   </div>
		   <bookIntroduce :list='list2'></bookIntroduce>
		   <BookPrefecture :Book='Bookstr'></BookPrefecture>
		   <div class='common-bottom'>
		    	<a href="javascript:;">
		    		<span>查看更多</span>
		    	</a>
		   </div>
		</div>
		
	</div>
</template>
<script>
	import bookIntroduce from '../../common/bookIntroduce/bookIntroduce.vue'
	import BScroll from 'better-scroll'
	import banner from '../../common/banner/banner.vue'
	import BookPrefecture from '../../common/bookPrefecture/BookPrefecture.vue'
	export default {
		name:'channel',
		data(){
			return {
				list:[],
				list1:[],
				listCat:[],
				list2:[],
				Bookstr:{
					url:'module'
				}
			}
		},
		methods:{
			fn(){
				alert(1)
			},
			normalData(data){//处理数据
				let arr = []
				data.forEach((item)=>{
					if( item.content instanceof Array  || item.content.data){
						arr.push(item)
					}

				})
				
				arr.forEach((item,index)=>{
					if(index == 0 || index == 2){
						let content1 = [];
						let content2 = [];
						arr[index].content.forEach((item,ind)=>{
							if(ind < 4){
								content1.push(item);
							}else{
								content2.push(item);
							}
						})
					}
					if(index == 1){
						arr[index].m_s_name='热门女生分类'
					}
				})
				
				return arr;
			}
		},
		created(){
			//请求数据
			//http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=3&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1552217788&type=2&resetcache=&sign=C1E7FC00AFBBFE0F66394948F31E854F&key=shuqiapi&_=1552217788946
			let num = '3';
			if(num === '3'){
				this.Bookstr.name='女生美文榜'
			}else if(num === '2'){
				this.Bookstr.name='男频爽文榜'
			}
			this.Bookstr.bookstr = `/stencil/query?appId=1&pageId=${num}&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1552217788&type=2&resetcache=&sign=C1E7FC00AFBBFE0F66394948F31E854F&key=shuqiapi&_=1552217788946`;

			//请求数据的路径
			let url = `/home/eva_bookstore/v1/stencil/query?appId=1&pageId=${num}&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1552217788&type=2&resetcache=&sign=C1E7FC00AFBBFE0F66394948F31E854F&key=shuqiapi&_=1552217788946`
			this.$axios.get(url)
						.then((data)=>{
							console.log(data)
							this.list = this.normalData(data.data.data.module);
							this.list1 = this.list[0];
							this.listCat = this.list[1];
							this.list2 = this.list[2];
							this.$nextTick(()=>{
								var wrapper = this.$refs['wrapper'];
								var scroll = new BScroll(wrapper,{click:true});
							})
						})
						
		},
		components:{
			bookIntroduce,banner,
			BookPrefecture,
		},
		mounted(){
			console.log(this)
			//实例化bscroll
			setTimeout(()=>{
				
			},500)
				console.log(this.Bookstr)
			
			
		}
	}

</script>
<style lang='less' scoped>
@import '~style/index.less';
	.channel{
		color:@font-color-normal;
		// .w(375);
		overflow: hidden;
		.top(44);
		.bottom(0);
		.left(0);
		.right(0);
		position:fixed;
		.hot-categray{
			position:relative;
			.common-header{
				width:100%;
				.padding(16,0,0,0);
				font-size: 0px;
				position:relative;
				.title{
					font-weight:normal;
					font-size: @font-size-ms;
					color:@font-color-header;
					display: inline-block;
					.h(16);
					.l_h(16);
					position:relative;
					.padding(0,0,0,16);
				}
				.title:after{
					content: '';
					.w(3);
					.h(14);
					display: inline-block;
					background-color:@state-color;
					position:absolute;
					.top(1);
					.left(0);
				}
			}
		}
		.common-bottom{
			border-top:1px solid @border-bottom;
			.h(48);
			font-size: @font-size-ms;
			text-align: center;
			.l_h(48);
			border-bottom:8px solid @border-bottom-color;
			a{
				text-decoration: none;
				color:@font-color-normal;	
			}
		}
	}
</style>