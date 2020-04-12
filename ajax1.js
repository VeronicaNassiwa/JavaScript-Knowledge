


function myfunction(){
    var httpR= new XMLHttpRequest();
    httpR.open('GET','https://ghibliapi.herokuapp.com/films/');
    httpR.onload=function(){
        var data2=JSON.parse(httpR.responseText);
        htmlfunction(data2);
    };
    httpR.send();
    
};
function htmlfunction(data){
    var division1=document.getElementById("data1");
    var datastring="";
    for( i=0; i<data.length; i++){
datastring +=  "<p>"+ data[i].title   + "<p>" + "Produces by" + " " + 
data[i].producer + " " + "Released in" + " " + data[i].release_date +"</p>";
    }
    division1.insertAdjacentHTML('beforeend', "Movie Titles " + datastring);

}
