//Getting clickable buttons
const menubarIcon = document.getElementById('menubarIcon');
const mobileNav = document.getElementById('dropdownNavbar'); 
const closeMobileNavButton = document.getElementById('closeNavbar');




menubarIcon.addEventListener('click', function(){
    mobileNav.style.display = 'flex';
});

closeMobileNavButton.addEventListener('click', function(){
    mobileNav.style.display = 'none';
});




//Getting the logout button
const mobileLogoutButton = document.getElementById('mobileLogout');
const desktopLogoutButton = document.getElementById('desktopLogout');


//Logout function
function logout(){
    alert('Logging out');
    window.location.href='../index.html';
};


desktopLogoutButton.addEventListener('click', logout);
mobileLogoutButton.addEventListener('click', logout);