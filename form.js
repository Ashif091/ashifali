function validation(){
    let userName = document.getElementById("userName")
    let useremail = document.getElementById("useremail")
    let usermsg = document.getElementById("usermsg")
    // name===========>
    if(userName.value==''){
     userName.style.border="2px solid red";
    
     
        
        document.getElementById("validname").innerHTML="Eter the name"
        return false;
    }
    else if(userName.value.length<=4){
        userName.style.border="2px solid red";
        document.getElementById("validname").innerHTML="Eter a valid name"
        return false;


    }
    else if(isNaN(userName.value)){
        userName.style.border="1px solid rgb(222, 226, 230)";
        document.getElementById("validname").innerHTML=""
        
        
    }
    else{
        userName.style.border="2px solid red";
        document.getElementById("validname").innerHTML="can't use numbers"

    }
    // end_user name
    if(useremail.value==''){
        useremail.style.border="2px solid red";
        
        document.getElementById("validmail").innerHTML="Enter the mail with @"
        return false;
    }
    else{
        useremail.style.border="1px solid rgb(222, 226, 230)";
        document.getElementById("validmail").innerHTML=""
    }
    // end mail
    if(usersub.value==''){
        usersub.style.border="2px solid red";
        
       
        return false;
    }
    else{
        usersub.style.border="1px solid rgb(222, 226, 230)";
        
    }
    //msg
    if(usermsg.value==''){
        usermsg.style.border="2px solid red";
        
       
        return false;
    }
    else{
        usermsg.style.border="1px solid rgb(222, 226, 230)";
       
    }

}