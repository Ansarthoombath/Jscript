function validateName(name){
    if(name.trim() ===''){
        document.getElementById('nameError').textContent = 'Name is required'
        return false;

    }
    document.getElementById('nameError').textContent = ''
    return true;
}

function validateEmail(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!emailPattern.test(email)){
        document.getElementById('emailError').textContent='Please Enter a valid email address'
        return false;
    }
    document.getElementById('emailError').textContent=''
    return true;
}

function validateAge(age){ 
    if(isNaN(age) ||age<18||age>100){
        document.getElementById('ageError').textContent='Please Enetr a valid age bw 18 an 65'
        return false;

    }
    document.getElementById('ageError').textContent=''
    return true

}
function validatePhoneNumber(phone){
    const PhonePattern=/^[0-9]{10}$/
    if(!PhonePattern.test(phone)){
        document.getElementById('phoneError').textContent='Please enter 10 dgit number'
        return false;
    }
    document.getElementById('phoneError').textContent=''
    return true;

}


function validateForm(event){
    let isValid=true;

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const age=document.getElementById('age').value;
    const phone=document.getElementById('phone').value;



    if(!validateName(name)){
        isValid=false
    }

    if(!validateEmail(email)){
        isValid=false
    }

    if(!validateAge(age)){
        isValid=false
    }

    if(!validatePhoneNumber(phone)){
        isValid=false
    }

    if(!isValid){
          event.preventDefault()
    }
    else{
        console.log("Form submitted with values")
        console.log("Name: ",name)
        console.log("Email: ",email)
        console.log("Age: ",age)
        console.log("Phone: ",phone)
    }
}
document.getElementById('submitBtn').addEventListener('click',validateForm)




