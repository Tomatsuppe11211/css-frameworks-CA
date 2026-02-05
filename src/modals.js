//Getting login and register button on landing page
const loginModalButton = document.getElementById('loginModalButton');
const registerModalButton = document.getElementById('registerModalButton');


//Getting the modale
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

//Getting the error message for register modal
const errorMessage = document.getElementById('registerError');

//Getting the close buttons for the modals
const closeLoginButton = document.getElementById('closeLogin');
const closeRegisterButton = document.getElementById('closeRegister');


//Getting login and register buttons inside the forms
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');


//function for redirecting
function proceed(){
    window.location.href = "direction"; //swap with profile page when done 
}


//register function to check passwords and username
registerButton.addEventListener('click', function(){
    //Getting register details
    const username = document.getElementById('createUsername').value;
    const email = document.getElementById('addEmail').value
    const createdPassword = document.getElementById('createPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(username != "" && email != ""){
        if(createdPassword.length < 8){
            errorMessage.innerHTML = `Your password must contain at least 8 characters`
            errorMessage.style.display = 'block'
        } else if(createdPassword != confirmPassword){
            errorMessage.innerHTML = `Your passwords do not match`
            errorMessage.style.display = 'block'
        }
    }
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