$(document).ready(function Schedule() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    function workday(){
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
    
        for(var x=0; x < topicCount; ++x){
            if(topic[x]!="休息"){
                $("#courseTable").append("<tr style=\"background-color: lightblue\">");
                $("#courseTable").append("<td style=\"background-color: lightblue\">"+(x+1)+"</td>");
                $("#courseTable").append("<td style=\"background-color: lightblue\">"+
                    (new Date(startDate.getTime()+x*7*dayUnit))
                    .toLocaleDateString().slice(5)+"</td>");
                $("#courseTable").append("<td style=\"background-color: lightblue\">"+topic[x]+"</td>");
                $("#courseTable").append("</tr>");
            }
            else{
                $("#courseTable").append("<tr style=\"background-color: lightgray\"><font color=\"gray\">");
                $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+(x+1)+"</td>");
                $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+
                    (new Date(startDate.getTime()+x*7*dayUnit))
                    .toLocaleDateString().slice(5)+"</td>");
                $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+topic[x]+"</td>");
                $("#courseTable").append("</tr>");
            }
    
        }
    }
    workday();
    
    $("#stb").click(function(){
        var sV = new Date(document.getElementById("stD").value);
        var dd = sV.getDate();
        var mm = sV.getMonth()+1;
        if(sV.length!=0){
            setMonthAndDay(mm,dd);
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
            workday();
        }
        else
            alert("invalid input");
    })
    $("#stE").click(function(){
        
        if($("#newEvnt").val()!=0){
            topic.push($("#newEvnt").val());
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
            workday();
        }
        else
            alert("invalid input");
    })
    
});

