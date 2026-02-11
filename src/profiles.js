//For navigationbar

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
    sessionStorage.removeItem('user');
    alert('Logging out');
    window.location.href='../index.html';
};


desktopLogoutButton.addEventListener('click', logout);
mobileLogoutButton.addEventListener('click', logout);








//For main content
const username = document.getElementById('username');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const postCount = document.getElementById('postCount')

//If newly registered, Display new profile info instead of the hardcoded.
const user = sessionStorage.getItem('user');

if(user){
    username.innerHTML = user;
    followers.innerHTML = 'Follwers: 0';
    following.innerHTML = 'Following: 0';
    postCount.innerHTML = 'Posts: 0';
};