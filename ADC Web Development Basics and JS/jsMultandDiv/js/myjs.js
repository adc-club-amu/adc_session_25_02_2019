function multiplynum(){
    var num1 = document.getElementById("num1").value; // num1 will hold value of input 1
    var num2 = document.getElementById("num2").value; // num2 will hold value of input 2
    document.getElementById("result").innerHTML = num1 * num2; // element having id "result" will 
                                                               // will change to num1 * num2
}

function dividenum(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if(num2 != 0)
        document.getElementById("result").innerHTML = num1 / num2;
    else
        document.getElementById("result").innerHTML = "Can not divide by zero";
}