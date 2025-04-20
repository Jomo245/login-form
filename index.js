const myform=document.getElementById("myform");
let username=document.getElementById("username");
let myCurrentPassword=document.getElementById("myCurrentPassword");
let NewPassword=document.getElementById("NewPassword");
let mySubmit=document.getElementById("mySubmit");
//const myCurrentPassword_label=document.getElementById("myCurrentPassword_label");


mySubmit.onclick=function validate(myform){

  username=document.getElementById("username").value;
  myCurrentPassword=document.getElementById("myCurrentPassword").value;
  NewPassword=document.getElementById("NewPassword").value;

  if(username.length < 6){
    
    alert("Your Username should have more than 6 characters");
    document.myform.username.focus();
    return false
  }

  if( NewPassword!=myCurrentPassword){
    
    alert("Your password should match");
    document.myform.NewPassword.focus();
    return false
  }
  return 0;
  }

  
  

  

