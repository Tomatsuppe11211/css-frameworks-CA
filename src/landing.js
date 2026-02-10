//Getting login and register button on landing page
const loginModalButton = document.getElementById('loginModalButton');
const registerModalButton = document.getElementById('registerModalButton');


//Getting the modals
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

//Getting the error message for register modal
const errorMessage = document.getElementById('registerError');

//Getting the close buttons for the modals
const closeLoginButton = document.getElementById('closeLogin');
const closeRegisterButton = document.getElementById('closeRegister');


//Getting login and register buttons inside the forms
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');


//function for redirecting
function proceed(){
    window.location.href='/feed/index.html';
}

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(loginForm.checkValidity()){
        alert('Logging in')
        proceed();
    }
    
})


//register function to check passwords and username
registerForm.addEventListener('submit', function(e){

    e.preventDefault();

    if(!registerForm.checkValidity()){
        return
    }

    //Getting password infomation
    const createdPassword = document.getElementById('createPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(createdPassword.length < 8){
        errorMessage.innerHTML = `Your password must contain at least 8 characters`
        errorMessage.style.display = 'block'
        return
    }
    
    if(createdPassword != confirmPassword){
        errorMessage.innerHTML = `Your passwords do not match`
        errorMessage.style.display = 'block'
        return
    }
    
    alert('Account created. Loggin in now.')
    proceed();
});

//Functions to make modals visible/invisible
function showLoginModal(){
    loginModal.style.display = 'flex'
};

function hideLoginModal(){
    loginModal.style.display = 'none'
};

function showRegisterModal(){
    registerModal.style.display = 'flex'
};

function hideRegisterModal(){
    registerModal.style.display = 'none'
};


//Making modals visible when clicking corresponding button
loginModalButton.addEventListener('click', showLoginModal);
registerModalButton.addEventListener('click', showRegisterModal);

//Making the close button work
closeLoginButton.addEventListener('click', function(e){
    e.preventDefault();
    hideLoginModal();
})

closeRegisterButton.addEventListener('click', function(e){
    e.preventDefault();
    hideRegisterModal();
})