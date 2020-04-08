function sign(){
  let myname=document.getElementById('name').value;
  let mylname=document.getElementById('lname').value;
  let myemail=document.getElementById('emaill').value;
  let mypasscode=document.getElementById('pasword').value;
  let sign_error=document.getElementById('signup_error');
fetch('https://epicmail-sentongo.herokuapp.com/api/v1/auth/signup',{
  method:'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
},
  body: JSON.stringify({myname:name,myemail:emaill,mypasscode:pasword,mylname:lname})
})
.then((response)=> response.json())
.then((data)=>{
  sign_error.innerText=data.error;
  console.log(data.error);
  localStorage.setItem('error' ,"called");
})

}
