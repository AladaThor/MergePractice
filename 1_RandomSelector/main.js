var pictures = [
    "https://castle.womany.net/images/content/pictures/543/content_medium_5355787611__1_.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/180386/large_5775fef312fbf3e3.jpg",
    "https://pic.pimg.tw/twghome/1428017974-1054004439_m.jpg",
    "https://storage.googleapis.com/www-cw-com-tw/article/201811/article-5be2a45004954.jpg",
    "https://images.chinatimes.com/newsphoto/2018-03-18/900/20180318002941.jpg"
]

$(document).ready(function() {
    $("input").click(function(){
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",pictures[randomChildNumber]);
    });
});