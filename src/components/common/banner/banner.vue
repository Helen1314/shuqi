<template>
	<div>


	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for='(item,index) in 4' :key='index'>
	        	<div class='title'>
	        		<span>{{list.content.title[index]}}</span>
	        	</div>
	        	<ul>
	        		<li v-for='(it,inx) in list.content.data[index].content' v-if='inx < 4'>
	        			<a href="javascript:;">
							<img v-lazy="it.book_cover">
							<div class='book-name'>{{it.bookname}}</div>
							<p class='book-author'>{{it.author_name}}</p>
						</a>
	        		</li>
	        	</ul>
	        </div>
	        

	    </div>
	    <div class="swiper-pagination"></div>
	</div>
	    <div class='common-bottom'>
	    	<a href="javascript:;">
	    		<span>查看更多</span>
	    	</a>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Swiper from 'swiper'
	import '../../../../node_modules/swiper/dist/css/swiper.css'
	export default{
		name:'banner',
		props:['list'],
		mounted(){
			new Swiper('.swiper-container',{
				 pagination: {
			        el: '.swiper-pagination',
			      },
			})
			
		}	
	}
</script>
<style lang='less'>
	@import '~style/index.less';
	.swiper-container{
		.h(230);
		.swiper-slide{
			.w(375);
			.title{
				text-align:center;
				font-size:@font-size-s;
				color:@state-color;
				.padding(16,16,0,16);
				display: flex;
				justify-content:space-between;
			}
			.title:before,.title:after{
				content:'';
				display: -webkit-box;
				.h(7);
				.w(136);
				border-bottom:1px solid @border-bottom;
				position:relative;
			}
			ul{
				.padding(16,0,16,16);
				text-align: center;
				
				li{
					width:25%;
					.padding(0,16,0,0);
					float: left;
					box-sizing:border-box;
					list-style: none;
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
</style>