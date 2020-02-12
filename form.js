function regform(){
    var name=document.forms["RegForm"]["name"];
    var address=document.forms["RegForm"]["address"];
    var emaill=document.forms["RegForm"]["email"];
    var Tele=document.forms["RegForm"]["tel"];
    var password=document.forms["RegForm"]["passcode"];
    var depss= document.forms["RegForm"]["departments"];

    if(name.value==""){
        window.alert("Please fill your name");
        name.focus();
        return false;
    }
    if(emaill.value==""){
        window.alert("Please fill your email address");
        emaill.focus();
        return false;
    }

    if(address.value==""){
        window.alert("Please fill your address");
        address.focus();
        return false;
    }
    if(Tele.value==""){
        window.alert("Please fill your phone number");
        Tele.focus();
        return false;
    }
    if(comm.value==""){
        window.alert("Please say something");
    }
    if(password.value==""){
        window.alert("Please enter your passcode");
    } else if(password.value!=1234){
        window.alert("Invalid passcode");
    }
    
    if(depss.value==""){
        window.alert("Please select a department");
    }   
    window.alert("Thanks for regestering");
}
function txtarea(){
    document.getElementById("comm").value=" ";
}

