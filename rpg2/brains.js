$(document).ready(function(){
    updateNar(n1);
    $("footer").html(createButton("button1", o1)+createButton("button2", o2)+createButton("button3", "not used"));
    $("#button3").hide();
    $("#button1").click(function(){
        if($("#button1").text()===o1){
            updateNar(n2);
            updateButtons(o, o, o);
            $("#button3").show();
        }
        else if($("#button1").text()===o&&has===true){
            updateNar(n);
            updateButtons(o);
        }
        else if($("#button1").text()===o){
            updateNar(n);
        }
    });
    $("#button2").click(function(){
        if($("#button2").text()===o2){
            updateNar(n3);
            updateButtons(o, o);
        }
        else if($("#button2").text()===o){
            updateNar(n);
            updateButtons(o);
            has=true;
        }
        else if($("#button2").text()===o){
            updateNar(n);
            $("#button2").text(o);
        }
    });
    $("#button3").click(function(){
        if($("#button2").text()===o){
            updateNar(n);
        }
    });
})
var n1="Once upon a time there was a ...";
var n2=" ...";
var n3=" ...";
var o1=".";
var o2=".";
var o3=".";
var updateNar=function(a){
    $("article").text(a);
}
var updateButtons=function(a, b){
    $("#button3").hide();
    $("#button1").text(a);
    $("#button2").text(b);
    $("#button3").text(c);
}
var createButton=function(id, text){
    return "<button type=button id="+id+">"+text+"</button>";
}