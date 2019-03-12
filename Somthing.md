###
--首页--home
--分页--pages
	----------------《一级》---------------
    --分类（post）
		--分类详情
	--排行
		--排行详情
	--女频/男频
	--书单
		--书单详情
	--搜索
--书架
--书本详情

home页
		
        http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&userId=8000000&type=2&key=shuqiapi&resetcache=&channelId=&versionId=&ver=&shuqi_h5=&md5key=&resetcache=
	
	Banner图 精品推荐
		&timestamp=1551964757&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=CFC67F40E5E9D843717CF2968A8E82D9
	女生美文  男生热文
		&timestamp=1551964757&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=8F1AF48FB44E4248DFEF5784D99589E4
	新书专区 书旗畅销榜
		&timestamp=1551964757&func_id=11%2C33%2C11%2C19%2C33%2C12%2C33%2C11%2C19%2C33&orderid=18%2C19%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30&sign=98F194015552872F5EBDECE0A5C01157
	精选书单 为你推荐
		&timestamp=1551964757&func_id=12%2C33%2C11%2C28%2C33%2C12%2C33%2C11%2C19&orderid=31%2C32%2C33%2C34%2C35%2C36%2C37%2C38%2C39&sign=8B437FAC68764D298872E5BC181F0826



分类--->post

	http://walden1.shuqireader.com/webapi/rank/classrelation?_=1551966449269
		
	formdata---
		type: 1
		timestamp: 1551966449267
		sign: 2677b8e200048e2662fe0270c0837bcc
		shuqi_h5: 

	    二级详情
		上部分分类 ---> post
			http://walden1.shuqireader.com/webapi/rank/classrelation?_=1551966633061
			
			formdata---
				type: 2
				cid: 21
				timestamp: 1551966633060
				sign: df3b4b7141faff1e50242552ae6c0f07
				shuqi_h5: 
		下部分显示--（变secondCate）
			http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1551966633220
			
			分类标签 --- secondCate
					古代言情 -----》 全部
					情仇爱恨 -----》 情仇爱恨
				 --- tag 
					王妃 ---------》 王妃
					种田 ---------》 种田
					嫡女 ---------》 嫡女
			字数 ------- words
					'' -----------》 全部
					1 ------------》 20万字
					2 ------------》 20-100万字
					3 ------------》 100万字以上
			最热 ------ sort
					montHot ------》 最热
					updateTime ---》 最新
				--status
					2 ------------》 完结
