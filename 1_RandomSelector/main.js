var pictures = [
    "http://n.sinaimg.cn/ent/transform/w630h630/20171207/wO9t-fypnsin7083398.png",
    "https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/1fab9d9b86c9071e3f10c14b7869e3ec338f1429.png",
    "https://hk.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png",
    "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png",
    "https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"
]

$(document).ready(function() {
    $("input").click(function(){
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",pictures[randomChildNumber]);
    });
});