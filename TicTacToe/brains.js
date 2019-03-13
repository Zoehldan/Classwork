$(document).ready(function(){
    var turn=1;
    var play=true;
    var p1score=0;
    var p2score=0;
    var total=0
    $("td").click(function(){
        if($(this).text()===""&&play===true){
            if(turn%2===1){
                $(this).text("X");
            }
            else
                $(this).text("O");
            turn++;
        }
        if(checkWin()==="X"){
            $("#output").text("PLAYER 1 WINS! Press RESET to play again.");
            play=false;
            p1score++;
            total++;
            $("#p1scoreNum").text(p1score);
            $("#totalNum").text(total);
        }
        else if(checkWin()==="O"){
            $("#output").text("PLAYER 2 WINS! Press RESET to play again.");
            play=false;
            p2score++;
            total++;
            $("#p2scoreNum").text(p2score);
            $("#totalNum").text(total);
        }
        else if(checkWin()===-1&&turn===10){
            $("#output").text("CAT'S GAME. GET THE CHEESE! Press RESET to play again.");
            play=false;
            total++;
            $("#totalNum").text(total);
        }
    });
    $("button").click(function(){
        turn=1;
        $("#0 #1 #2 #3 #4 #5 #6 #7 #8").text("");
        $("#output").text("");
        play=true;
    })
})
var checkWin=function(){
    var space=[];
    for(var i=0;i<9;i++){
        space.push($("#"+i).text());
    }
    checkMatch(0, 3, 6);
    checkMatch(1, 4, 7);
    checkMatch(2, 5, 8);
    checkMatch(0, 1, 2);
    checkMatch(3, 4, 5);
    checkMatch(6, 7, 8);
    checkMatch(0, 4, 8);
    checkMatch(2, 4, 6);
}
var checkMatch=function(a, b, c){
    if((space[a]===space[b])&&(space[b]===space[c])){
        return space[c]
    }
}