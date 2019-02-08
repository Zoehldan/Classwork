$(document).ready(function(){
    updateNar("Hello");
    $("footer").html(createButton("option1", o1)+createButton("option2", o2));
    $("#option1").click(function(){
        updateNar(n2)
        $("footer").html(createButton("option3", o3)+createButton("option4", o4)+createButton("option5", o5))
    })
    $("#option2").click(function(){
        updateNar(n3)
        $("footer").html(createButton()+createButton())
    })
})
var n1="Once upon a time in the Wild Wild West there lived a ...";
var n2="This ranger was the most dangerous gunslinger known to man. He loved to ...";
var n3=""
var o1="ranger.";
var o2="robot.";
var o3="kill robots.";
var o4="cook pancakes.";
var o5="arrest bad robots.";
var updateNar=function(a){
    $("article").text(a);
}
var createButton=function(id, text){
    return "<button type=button id="+id+">"+text+"</button>";
}