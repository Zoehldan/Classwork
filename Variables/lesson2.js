/** THIS LESSON WILL DEMONSTRATE HOW MATH AND VARIABLES SHOULD WORK */
$(document).ready(function(){
    $("#add").click(function(){
        add();
    });
    $("#divide").click(function(){
        divide();
    });
    $("#modulos").click(function(){
        modulos();
    });
    $("#time").click(function(){
        time();
    });
    $("#sumDigits").click(function(){
        sumDigits();
    });
    $("#pow").click(function(){
        pow();
    });
    $("#abs").click(function(){
        abs();
    });
    $("#sqrt").click(function(){
        sqrt();
    })
})
function add(){
    var x=$("#num1").val();
    var y=$("#num2").val();
    x=parseInt(x);
    y=parseInt(y);
    var sum=x+y;
    var message=x+"+"+y+"="+sum;
    $("#output").text(message+"ALL info from user is considered STRING datatype. The '+' sign, means to put together").show()
}
function divide(){
    var x=$("#num1").val();
    var y=$("#num2").val();
    x=parseInt(x);
    y=parseInt(y);
    var quotient=x/y;
    $("#output").text(quotient)
}
function modulos(){
    var x=$("#num1").val();
    var y=$("#num2").val();
    var modulos=x%y;
    $("#output").text(modulos)
}
function time(){
    //x=days to secs
    //y=secs to days
    var secsR;
    var mins
    var minsR;
    var hours
    var hoursR;
    var days;
    var input=$("#num2").val();
    secsR=input%60;
    mins=Math.floor(input/60);
    minsR=mins%60;
    hours=Math.floor(mins/60);
    hoursR=hours%24;
    days=Math.floor(hours/24);
    $("#output").text(input+" seconds is equal to "+days+" days, "+hoursR+" hours, "+minsR+" minutes, and "+secsR+" seconds.")
}
var sumDigits=function(){
    //512 5 1 2
    var input=$("#num3").val();
    var digit1=input%10;
    var digit2=(Math.floor(input/10))%10;
    var digit3=(Math.floor(input/100))%10;
    var sum=digit1+digit2+digit3;
    $("#output2").text("The sum of the digits is "+sum);
}
var pow=function(){
    // Math.pow(a,b) - a to b power
    // Math.abs(a) - absolute value
    // Math.sqrt(a) - square root
    var x=$("#num4").val();
    var y=$("#num5").val();
    var pow=Math.pow(x, y);
    $("#output3").text("The product is "+pow);
}
var abs=function(){
    var x=$("#num4").val();
    var y=$("#num5").val();
    var abs=Math.abs(x);
    $("#output3").text("The absolute value is "+abs);
}
var sqrt=function(){
    var x=$("#num4").val();
    var y=$("#num5").val();
    var sqrt=Math.abs()
}