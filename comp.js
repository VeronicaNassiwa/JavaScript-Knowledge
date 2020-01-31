function grades(){
var marks;
var grade;
if(grda.value>=90){
    grade="Your in grade A";
    document.getElementById("grd1").innerHTML=grade;
}
else if (grda.value>=80)
{
 grade="Your in grade B";
 document.getElementById("grd1").innerHTML=grade;
}
else if(grda.value>=70){
    grade="Your in grade C";
    document.getElementById("grd1").innerHTML=grade;
}
else if(grda.value>=60){
    grade="Your in grade E";
    document.getElementById("grd1").innerHTML=grade;
}
else
grade="Failed";
document.getElementById("grd1").innerHTML=grade;
}

