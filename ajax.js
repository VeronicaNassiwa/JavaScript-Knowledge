var div=document.getElementById('info');
function myfunction(){

var request=new XMLHttpRequest;
request.open('GET','https://ghibliapi.herokuapp.com/films', true);
request.onload=function(){
    if(this.status==200){
    var resp=JSON.parse(this.responseText);
    htmlstring(resp);
};
}
request.send();
}
function htmlelement(data){
    var htmlstring="";
    for(var i=0;i<data.length;i++){
    htmlstring += "<p>" + data[i].title + "</p>";
    }
    div.insertAdjacentHTML('Beforeend','htmlstring ');
}