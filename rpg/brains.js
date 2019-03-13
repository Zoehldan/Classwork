var hasBow=false;
var hasPhaser=false;
$(document).ready(function(){
    
    updateNar(n1);
    $("footer").html(createButton("button1", o1)+createButton("button2", o2));
    createButton("button3", "not used");
    $("#button3").hide();
    $("#button1").click(function(){
        if($("#button1").text()===o1){
            updateNar(n2)
            updateButtons(o3, o4, o5);
            $("#button3").show();
        }
        else if($("#button1").text()===o3&&hasBow===true){
            updateNar(n5);
            updateButtons(o81);
            $("#button2").hide()
        }
        else if($("#button1").text()===o3){
            updateNar("Did not get bow.")
        }
    });
    $("#button2").click(function(){
        if($("#button2").text()===o2){
            updateNar(n3);
            updateButtons(o6, o7);
        }
        else if($("#button2").text()===o4){
            updateNar("He went to his bags to get the pancake mix, and found his favorite weapon, a super slicer thingy 4000, bow.");
            updateButtons(o3, "runs to target practice.")
            hasBow=true;
        }
        else if($("#button2").text()===o7){
            updateNar(n6);
            $("#button2").text(o82);
            $("#button1").hide();
        }
    });
    $("#button3").click(function(){
        
    })
})

var n1="Once upon a time in the Wild Wild West there lived a ...";
var n2="This ranger was the most dangerous archer known to man. He loved to ...";
var n3="This robot had killer instincts. Purge the Wild West of all evil-doers. Armed with a phaser he ...";
var n4="";
var n5="The ranger approaches the insiduous Mr. Pig. He raises his bow and ...";
var n6="The robot approaches the insiduous Mr. Pig. He raises his phaser and ...";
var o1="ranger.";
var o2="robot.";
var o3="chase tumbleweeds.";
var o4="cook pancakes.";
var o5="arrest bad robots.";
var o6="heats his pork and beans.";
var o7="purges the Wild West of all evil-doers.";
var o81="shoots an arrow through Mr. Pig.";
var o82="fires, vaporizing Mr. Pig.";
var updateNar=function(a){
    $("article").text(a);
}
var updateButtons=function(a, b){
    $("#button3").hide()
    $("#button1").text(a);
    $("#button2").text(b);
    $("#button3").text(c);
}
var createButton=function(id, text){
    return "<button type=button id="+id+">"+text+"</button>";
}