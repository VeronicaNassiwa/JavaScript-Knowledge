
function add(){
    let fnumber=document.getElementById("fnumber").value;
    let lsnumber=document.getElementById("lnumber").value;
    let x= parseInt(fnumber) + parseInt(lsnumber);
    document.getElementById("vero").innerHTML="The sum of the values is" + x;
}
function multi(){
let number1=document.getElementById("fnumber").value;
let number2=document.getElementById("lnumber").value;
let z=number1*number2;
document.getElementById("vero").innerHTML="The answer is " + z;

}
function sub(){
let no1=document.getElementById("fnumber").value;
let no2=document.getElementById("lnumber").value;
let y=no1-no2;
document.getElementById("vero").innerHTML="The difference is " + y;

}

function squareroot(){
 let y=document.getElementById("fnumbe").value;
 let Z=document.getElementById("lnumbe").value;
 let x=Math.sqrt(y,Z);
 document.getElementById("hus").innerHTML="The sauareroot of the two numbers is" + " " + x;

} 

function roundoff(){
let v =document.getElementById("fnumbe").value;
let n=document.getElementById("lnumbe").value;
let c=Math.round(v,n);
document.getElementById("hus").innerHTML="The answer is" + " " + c;

}