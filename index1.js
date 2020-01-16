
function addd(){
    let fnumber=document.getElementById("fnumberr").value;
    let lsnumber=document.getElementById("lnumberr").value;
    let x= parseInt(fnumber) + parseInt(lsnumber);
    document.getElementById("vero").innerHTML="The sum of the values is" + x;
}
function multii(){
let number1=document.getElementById("fnumberr").value;
let number2=document.getElementById("lnumberr").value;
let z=number1*number2;
document.getElementById("vero").innerHTML="The answer is " + z;

}

function subb(){
let no1=document.getElementById("fnumberr").value;
let no2=document.getElementById("lnumberr").value;
let y=no1-no2;
document.getElementById("vero").innerHTML="The difference is " + y;

}

function squareroot(){
 let y=document.getElementById("fnumbee").value;
 let Z=document.getElementById("lnumbee").value;
 let x=Math.sqrt(y,Z);
 document.getElementById("hus").innerHTML="The sauareroot of the two numbers is" + " " + x;

} 

function roundoff(){
let v =document.getElementById("fnumbee").value;
let n=document.getElementById("lnumbee").value;
let c=Math.round(v,n);
document.getElementById("hus").innerHTML="The answer is" + " " + c;

}
