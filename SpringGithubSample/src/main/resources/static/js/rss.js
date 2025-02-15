$(function(){
	$.ajax({
		url: 'https://ascii.jp/mac/rss.xml',
		//url: 'https://news.yahoo.co.jp/rss/topics/top-picks.xml',
		//url: '/rss/rss.xml',
		dataType: 'xml',
		success : function(data){
			$("item",data).each(function(){
				$("dl").append("<dt><a href='"+$("link",this).text()+"'>"
				+$("title",this).text()+"</a></dt><dd>"
				+$("description",this).text()+"</dd>");
			});
		}
	});
});