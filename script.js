function ValidateForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var DOB = document.getElementById('birthday').value;
    var gender = document.getElementById('male').Checked;
    var gender = document.getElementById('female').checked;
    var educaton = document.getElementById('education').value;
    var letters = /^[0-9]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function validateDOB(DOB){
        var enter=new Date();
        var birthdate=new Date(DOB);
        if((enter.getFullYear() - birthdate.getFullYear()) >=18)
            return true
    }
    
    if(name.trim()=="" || letters.test(name)){ 
        alert("Please enter Your Name");
        return false;
    }
    else if(!emailRegex.test(email)){
        alert("Please enter a Valid Email Address");
        return false;
    }
    else if(pass.length<8){
        return false;
    }
     
    else if( ! validateDOB(DOB) )
    {
        alert("Invalid Date of birth")
    }
    else
        alert("Your Form submited sucessfull");
}
