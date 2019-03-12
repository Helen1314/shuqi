<template>
	<div class='booklist wrapper'>
		<div class='content'>
			<ul >
				<li v-for='(item,index) in data' :key='index'
					@click='toChildren(item.id,item.sdesc)'
				>
					<div class='liwrap'>
						<div class='leftinfo'>
							<h4>{{item.title}}</h4>
							<p>{{item.sdesc}}</p>
							<div class='tags' v-if='item.tags.length>1'>
								<span v-for='(it,index) in item.tags' :key='index'>
									{{it}}
								</span>
							</div>
						</div>
						<div class='rightbg'>
							<div v-for='(it,index) in item.items' :key='index'

							>
								<img v-lazy="it.cover">
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	import BScroll from 'better-scroll';
	//http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1552200499607
	export default {
		name:'booklist',
		data(){
			return {
				data:[]
			}
		},
		methods:{
			normalData(data){
				data.forEach((item)=>{
					item.tags = item.tags.split(',');
				})
				return data;
			},
			toChildren(id,sdesc){ //转到书单的二级页面
				this.$router.push({name:'listdetail',params:{sid:id,sdesc:sdesc}})
			}
		},
		created(){
			let url = '/haha/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1552200499607'
			this.$axios.get(url)
						.then((data)=>{
							this.data = this.normalData(data.data.data);
							// console.log(this.data)
						})
		},
		mounted(){
			new BScroll('.wrapper',{click:true});
		}
	}

</script>
<style lang='less' scoped>
	@import '~style/index.less';
	.booklist{
		position:fixed;
		.top(45);
		.bottom(0);
		.w(375);
		.left(0);
		.right(0);
		overflow: hidden;
		// .bug(deeppink);
		ul{
			li{
				.padding(0,0,0,16);
				list-style:none;
					color:@font-color-header;
					.liwrap{
						.padding(20,16,20,0);
						border-bottom:1px solid @border-bottom;
						display:flex;
						.leftinfo{
							flex:1;
							.w(243);
							box-sizing:border-box;
							.margin(0,16,0,0);
							h4{
								font-size:@font-size-m;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								word-break:break-all;
								font-weight:normal;
							}
							p{
								font-size:@font-size-s;
								color:@font-color-categray-header;
								.l_h(18);
								.h(36);
								.margin(11,0,0,0);
								overflow: hidden;
								text-overflow: ellipsis;

							}
							.tags{
								overflow: hidden;
								.margin(8,0,0,0);
								.h(22);
								font-size:0;
								span{
									font-size:@font-size-s;
									.h(18);
									.margin(0,4,0,0);
									.padding(1,1,1,1);
									border:1px solid @border-color;
									display:inline-block;
									color:@font-color-categray-header;
								}
							}
						}
					}
					.rightbg{
						.w(84);
						.h(80);
						.margin(11,0,0,0);
						overflow: hidden;
						position:relative;
						div{position:absolute;.bottom(0);
							img{
								display:block;
								position:absolute;
								top:50%;
								left:50%;
								transform: translate(-50%,-50%);
								height:100%;
							}
						}
						div:nth-of-type(1),div:nth-of-type(3){
							.w(45);
							.h(60);
							z-index:1;
						}
						div:nth-of-type(1){
							left:0;
						}
						div:nth-of-type(3){
							right:0;
						}
						div:nth-of-type(2){
							.w(60);
							.h(80);
							left:50%;
							transform: translateX(-50%);
							z-index: 2;
						}
					}
				
			}
		}
	}
</style>