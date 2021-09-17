function validate(){
    var gender = document.reg_form.gender;
    var course = document.reg_form.course;
    var batch = document.reg_form.batch;

    if(gender.value.length <= 0) {
        alert("Gender is required");
        gender.focus();
        return false;
    }
    if(course.value == "Select Course") {
        alert("Course is required");
        course.focus();
        return false;
    }

    var check = false;
    for(var i = batch.length - 1; i >= 0; i--){
        if(batch[i].checked){
            check=true;
        }
    }
    if(check == false) {
        alert("Batch is required");
        return false();
    }   

    console.log(document.reg_form.name.value);
    console.log(document.reg_form.email.value);
    console.log(document.reg_form.mobile.value);
    console.log(document.reg_form.gender.value);
    console.log(document.reg_form.course.value);
    console.log(document.reg_form.batch.value);
    return false;
}

function validateString(id){
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if(!regExp.test(element.value)){
        alert("Enter string value");
        element.style.border = "2px solid red";
        return false;
    }
    element.style.border = "2px solid green";
}

function validateEmail(id){
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+.[a-zA-Z.]{2,6}$/;
    if(!regExp.test(element.value)){
        alert("Enter valid email");
        element.style.border = "2px solid red";
        return false;
    }
    element.style.border = "2px solid green";
}


function validateNumber(id){
    var element = document.getElementById(id);
    var regExp = /^[0-9]{10}$/;
    if(!regExp.test(element.value)){
        alert("Enter number only and it should be 10 digit");
        element.style.border = "2px solid red";
        return false;
    }
    element.style.border = "2px solid green";
}
