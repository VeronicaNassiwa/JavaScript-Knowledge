 var gals=["vero", "Haphy", "Bint", "Diner"];
gals[3]="Nailah";
//document.write(gals);
var j, text="";
for(j=0; j<gals.length; j++){
    text += gals[j] + "<br>";
    document.getElementById('vero').innerHTML= text + "<br>";
}
// for (in) used to loop through properties of an object.
    var woman={name:"Nadia",colour:"chocolate",height:"4inch",religion:"moslem",address:" from Kigali"};
    var person="";
    var i;
    for(i in woman){
        person += woman[i] + " "; 
    }
    document.getElementById("vero1").innerHTML="She is called" + person;
    // the (while loop) it loops through a code whenever the condition is true
    var x=0;
    var txt="";
    while(x<5){
        txt += "<br>" + "Here is the number" + x;
        x++
    }
    document.write(txt);
    // do while it executes a code before checking if the condition is true 
    //then it executes again aftyer checking if the condition is true
    var i=0;
    var txt2="";
    do{ txt2 += " <br> the digit is" + i;
    i++;
}
while(i<4);
document.getElementById("vero2").innerHTML= txt2;

    