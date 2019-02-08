/*
SCOPE
GLOBAL VARIABLES - the variables can be used throughout the entire document/script
LOCAL VARIABLES - the variables can only be used in the section it was defined
*/
//ACTIVE
//********** NOT NEEDED FOR HTML TRIGGERING
$(document).ready(function(){
    $("button").click(function(){
        showInfo();
    })
});
/*********************/
// DEFINITIONS
var userName;
function getInfo(){
    userName=$("#userName").val();
}
function showInfo(){
    getInfo();
    var message="Hello "+userName+", glad to meet you!";
    $("#output").text(message).show().animate({"top":"0px","opacity":"1"},1250);
}