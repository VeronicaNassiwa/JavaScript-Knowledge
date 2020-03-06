function ajc(){
    var obj= new XMLHttpRequest;
    obj.onreadystatechange=function (){
        if(this.readyState==4 && this.status==200){
            //var doc=JSON.parse(this.responseText);
            document.getElementById("very").innerHTML=this.responseText;

        }
    };
    obj.open("GET","https://ghibliapi.herokuapp.com/films",true);
    obj.send();
}
// how to convert json data to javascript object
/*
function myfunc(){
    var objj='{"name":"vero","age":"38","address":"abuDhabi"}';
    var conv=JSON.parse(objj);
    document.getElementById("very").innerHTML=conv.name + " from"+ " "+  conv.address;
}var
// how to convert from javascript object to json 

function jsn(){
var ojj={name:"vero",age:"38",address:"abuDhabi"};
var jsn2=JSON.stringify(ojj);
document.getElementById("very").innerHTML=jsn2;
}
 */