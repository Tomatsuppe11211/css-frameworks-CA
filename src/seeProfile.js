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

const mobileProfileButton = document.getElementById('mobileProfileLogo');
const desktopProfileButton = document.getElementById('desktopProfileLogo');

function sendToProfile(){
    window.location.href = '../profiles/index.html';
};

mobileProfileButton.addEventListener('click', sendToProfile);
desktopProfileButton.addEventListener('click', sendToProfile);


//For following profile
const followButton = document.getElementById('followButton');
const followers = document.getElementById('followers');
let followersCount = 65;

//Adding function for following the user
function follow(){
    followersCount += 1;
    followers.innerHTML = `Followers: ${followersCount}`;
    followButton.innerHTML = 'Unfollow';
    followButton.removeEventListener('click', follow);
    followButton.addEventListener('click', unfollow);
}

function unfollow(){
    followersCount -= 1;
    followers.innerHTML = `Followers: ${followersCount}`;
    followButton.innerHTML = 'Follow';
    followButton.removeEventListener('click', unfollow);
    followButton.addEventListener('click', follow);
}


followButton.addEventListener('click', follow);



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