//Getting login and register button on landing page
const loginModalButton = document.getElementById('loginModalButton');
const registerModalButton = document.getElementById('registerModalButton');


//Getting the modals
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

//Getting the close buttons for the modals
const closeLoginButton = document.getElementById('closeLogin');
const closeRegisterButton = document.getElementById('closeRegister');


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