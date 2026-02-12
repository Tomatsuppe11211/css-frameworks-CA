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

