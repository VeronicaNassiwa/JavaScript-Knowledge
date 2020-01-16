function validating(){
if(confirm("Are you sure you want to submit?")){
    alert("You have selected ok");
    return true;
}
else{
    alert("You selected cancel");
    return false;
}
}