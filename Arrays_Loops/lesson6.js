$(document).ready(function(){
    output();
});
var numbers=["something","twothings",5,7.26];
numbers.push("one","two","three");
numbers.unshift("four","five",6);
numbers.splice(2,1,"something else");
var removed=numbers.splice(2,3);
numbers.shift();
numbers.pop();
numbers[2]="Replacement"
var output=function(){
    $("#output").text("END ARRAY: "+numbers);
    $("#output").append("FIRST ELEMENT OF ARRAY: "+numbers[0]);
    $("#output").append("\nREMOVED ELEMENTS: "+removed);
}
options=["kills bad guy","eat pancakes"]