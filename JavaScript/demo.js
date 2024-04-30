document.write("If - else Controls statement");
document.write("<br/>");
document.write("<br/>");
var x =8;
//If else
if(x%2==0)
{
    document.write(" Even Number");
}
else if(x<0)
{
    document.write("Negative");
}
else{
    document.write(" Odd Number");
}

if(x>0 && x%2==0)
{
    document.write(" <h3>Number is positive and Even number</h3>");
   
}
else
{
    document.write(" <h3>Number is Negative</h3>");
}
//Functions
function addNumber()
{
   var a = 5;
   var c = 6;
   var total = a+c;
   document.write("<h1>The Total is :"+total+"<h1>");

}
addNumber();


function add(a, b)
{
   var total = a+b;
   return total;
   

}
addNumbers("Vasanth","Bharani");

function addNumbers(a, b)
{
   var total = a+b;
   document.write("<h1>The Total is :"+total+"<h1>");

}

var output = add("Bharani"," Dharan");
// document.write("<h1>The Total is :"+output+"<h1>");
// /* objects in JS */
// var car = {
//     car_brand:"Tesla",
//     car_model:"Model 3",
//     price : 35000,

//     teslaAutopilot:function()
//     {
//         document.write("<h2>This car has Auto pilot</h2>")
//     }
// }
// document.write("<h2>"+car.car_brand+"</h2>")

function Cars(car_brand,car_model,price)
{
    this.car_brand= car_brand;
    this.car_model=car_model;
    this.price=price;
    this.teslaAutopilot = function()
    {
        document.write("<h2>This car has Auto pilot</h2>");
    }
}
var c1 = new Cars("Tesla","Model 3",35000);
var c2 = new Cars("Tesla","Model P",35000);
c1.teslaAutopilot();
document.write("<h2>"+c2.car_model+ "<br>"+ c1.car_brand+"</h2>")
function buttonclick()
{
    var str = document.getElementById("heading2").innerHTML;
   
}
//buttonclick();
function fn1()
{
    var str1= document.getElementById("text1").value;
    var str2= document.getElementById("text2").value;
    if(str1 == str2)
    {
        alert(("Password matches"));
    } 
    else
    {
        alert(("Password not matches"));
    }
    
}
function fn2()
{
    var button1=document.getElementById("button1");
    var button2=document.getElementById("button2");
    if(button1.checked==true)
    {
        alert("The channel is selected "+ button1.value);
    }
    else if(button2.checked==true)
    {
        alert("The channel is selected "+button2.value); 
    }
    else
    {
        alert("No channel is selected"); 
    }
}
function fn4()
{
    var select = document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value);
}