<template>
	<div class='wrapper' v-show='this.$route' ref='wrapper'>
		<div class='content'>
			<h3>{{this.sdesc}}</h3>
			<ul>
				<li v-for='(item,index) in data' :key='index'>
					<a href="javascript:;">
						<div class='bookwrapper'>
							<div class='bookimg'>
								<img v-lazy="item.cover">
							</div>
							<div class='bookname'>
								<h4>{{item.title}}</h4>
								<p>{{item.author}}</p>
								<div class='tags'>
									<span class='state'>完结</span>
									<span>{{item.words}}万字</span>
								</div>
							</div>
						</div>
					</a>
					<div class='book-introduction'>{{item.desc}}</div>
					<div class='book-recommand'>{{item.recomment}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import BScroll from 'better-scroll'
	export default{
		name:'listdetail',
		data(){
			return{
				data:[]
			}
		},
		methods:{
			normalData(data){
				data.forEach((item)=>{
					item.words = (item.words+"").substring(0,2);
				})
				return data;
			}
		},
		created(){
			if(this.$route.params=={}){
				
				this.$router.back();
			}else{
				this.sdesc = this.$route.params.sdesc;
				this.sid = this.$route.params.sid;
				//axios请求页面数据信息
				let url = `/haha/novel/i.php?do=is_pay_sddetail&sdid=${this.sid}&p=1&shuqi_h5=&onlyCpBooks=1&_=1552206666814`
				this.$axios.get(url)
							.then((data)=>{
								// console.log(data)
								this.data =  this.normalData(data.data.data);
								// console.log(this.data)
								this.$nextTick(()=>{
									new BScroll(this.$refs.wrapper,{click:true})
								})
							})
				
			}
		},
		mounted(){
			
			
		}
	}

</script>
<style lang='less' scoped>
	@import '~style/index.less';
	.wrapper{
		position:fixed;
		.top(44);
		.bottom(0);
		.w(375);
		z-index:10;
		overflow: hidden;
		background-color:@bg-detail-color;
		.content{
			color:@font-color-normal;
			h3{
				background-color:@bg-categray-header;
				font-size:@font-size-ms;
				.l_h(22);
				.padding(12,16,12,16);
				border:1px solid @border-bottom;
				font-weight:normal;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			ul{
				li{
					list-style: none;
					border-bottom:1px solid @border-bottom;
					.padding(16,16,16,0);
					.margin(0,0,0,16);
					color:@font-color-header;
					position:relative;
					a{
						text-decoration:none;
						color:@font-color-header;
						.bookwrapper{
							display: flex;
							.bookimg{
								.w(56);
								.h(74);
								.margin(0,16,0,0);
								overflow: hidden;
								position: relative;
								img{
									width:100%;
								}
							}
							.bookname{
								flex:1;
								h4{
									font-size:@font-size-m;
									.margin(0,0,11,0);
									font-weight:normal;
									.l_h(18);
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									word-break: break-all;
								}
								p{
									color:@font-color-categray-header;
									font-size:@font-size-s;
									.l_h(16);
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									word-break: break-all;
								}
								.tags{
									font-size: 0px;
									.margin(11,0,0,0);
									.h(20);
									.l_h(18);
									span{
										font-size: @font-size-s;
										.padding(0,6,0,6);
										.margin(0,4,0,0);
										border:1px solid @border-color;
										color:@font-color-categray-header;
									}
									.state{
										
										color:@state-color;
										border:1px solid @state-border-color;
									}
								}
							}
						}
					}
					.book-introduction{
						position:relative;
						.margin(8,0,8,0);
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
    					-webkit-box-orient: vertical;
    					-webkit-line-clamp: 3;
						font-size:@font-size-ms;
						.h(63);
						.l_h(22);
					}
					.book-recommand{
						font-size: @font-size-ms;
						color:@font-color-categray-header;
						position:relative;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
    					-webkit-box-orient: vertical;
    					-webkit-line-clamp: 3;
						// .h(40);
					}
					.book-recommand:before{
							content:'';
							display: inline-block;
							background:url(../../../../assets/sy.png);
							background-size:unit(50/37.5,rem) unit(14/37.5,rem);
							.w(50);
							.h(14);
							.margin(0,8,0,0);

						}
				}
			}
		}
	}

</style>
