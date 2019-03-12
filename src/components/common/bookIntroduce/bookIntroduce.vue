<template>
	<div class='common-wrapper'>
		<div class='common-header'>
			<h3 class='title'>{{list.m_s_name}}</h3>
		</div>
		<div class='common-middle'>
			<ul class='book-group'>
				<li v-for='(item,index) of list.content' v-if='index<4'>
					<a href="javascript:;">
						<img v-lazy="item.book_cover">
						<div class='book-name'>{{item.bookname}}</div>
						<p class='book-author'>{{item.author_name}}</p>
					</a>
				</li>
			</ul>
			<div class='book-group2'
				v-for='(item,index) of list.content.slice(4)'

			>
				<a href="javascript:;">
					<div class='book-group2-item1'>
						<div class='book-name'>{{item.bookname}}</div>
						<p class='book-author'>
							<span>{{item.stat_name}}</span>
							<span>{{item.class_name}}</span>
						</p>
					</div>
					<div class='book-group2-item2'>{{item.book_info}}</div>
				</a>
			</div>
		</div>
		<div class='common-bottom' @click='changeOne'>
			<span>换一换</span>
			<i class='icofont-ui-rotation'></i>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'bookIntroduce',
		props:['list'],
		methods:{
			changeOne(){
				console.log(this.$route)
				
			}
		}
	}
</script>
<style lang='less'>
	@import '~style/index.less';
	.common-wrapper{
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
		.common-middle{
			position:relative;
			.book-group{
				.padding(16,16,16,0);
				.margin(0,0,0,16);
				text-align:center;
				overflow: hidden;
				width:100%;
				box-sizing:border-box;
				border-bottom:1px solid @border-bottom;
				li{
					list-style: none;
					width:25%;
					display: inline-block;
					.padding(0,14,0,0);
					float: left;
					position:relative;
					box-sizing: border-box;
					a{
						text-decoration: none;
						color:@font-color-header;
						img{
							width:100%;
							border:1px solid @border-bottom;
						}
						.book-name,.book-author{
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							word-break: break-all;
							font-size: @font-size-s;
							.l_h(16);
							.h(16);
							text-align: left;
						}
						.book-author{
							color:@font-color-categray-header;
						}
					}
				}
			}
			.book-group2{
				.margin(0,0,0,16);
				.padding(16,16,16,0);
				border-bottom:1px solid @border-bottom;
				a{
					text-decoration: none;
					color:@font-color-header;
					.book-group2-item1{
						display: flex;
						justify-content: space-between;
						font-size: 0px;
						div{
							.l_h(20);
							font-size: @font-size-ms;
							
						}
						p{
							span{
								font-size:@font-size-s;
								.padding(0,6,0,6);
								color: @font-color-categray-header;
								border:1px solid @border-color;
								.l_h(18);
								display: inline-block;
								.h(18);
								.margin(0,8,0,0);
							}
							span:nth-of-type(1){
								color:@state-color;
								border-color:@state-border-color;
							}
						}
					}
					.book-group2-item2{
						font-size: @font-size-s;
						color:@font-color-categray-header;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						.l_h(16);
						.margin(8,0,0,0);
					}
				}
			}
		}
		.common-bottom{
			.h(48);
			font-size: @font-size-ms;
			text-align: center;
			.l_h(48);
			border-bottom:8px solid @border-bottom-color;
		}
	}
</style>