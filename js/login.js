
// Step 1 : Add click event handler 
document.getElementById('btn-submit').addEventListener('click', function(){

    // Step 2 : Get the email address 

    // Always remember to use . value the email address
    const emailField = document.getElementById('user-email')
    const email = emailField.value;

    const passField = document.getElementById('user-password')
    const password = passField.value;


    // console.log(email , password, 'Login Success')

    // DO NOT Verify email and password on the client side 
    

    if(email === 'admin' && password === 'admin'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid Email and Password')
    }






})