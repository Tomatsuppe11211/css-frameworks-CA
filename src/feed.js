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




//For the sidebar/topbar
const filterButton = document.getElementById('filterButton');
const searchButton = document.getElementById('searchButton');
const mobileFilter = document.getElementById('mobileFilter');
const mobileSearch = document.getElementById('mobileSearch');
const mobileSearchButton = document.getElementById('mobileSearchButton');



//Adding show/hide filter and search functions
function showFilter(){
    mobileFilter.style.display = 'flex';
    filterButton.removeEventListener('click', showFilter);
    filterButton.addEventListener('click', hideFilter);
};

function hideFilter(){
    mobileFilter.style.display = 'none';
    filterButton.removeEventListener('click', hideFilter);
    filterButton.addEventListener('click', showFilter); 
};

function showSearch(){
    mobileSearch.style.display = 'flex';
    searchButton.removeEventListener('click', showSearch);
    searchButton.addEventListener('click', hideSearch);
};

function hideSearch(){
    mobileSearch.style.display = 'none'
    searchButton.removeEventListener('click', hideSearch);
    searchButton.addEventListener('click', showSearch);
};


//connecting functions to the buttons
filterButton.addEventListener('click', showFilter);
searchButton.addEventListener('click', showSearch);







//Getting button for creating a post
const createPostButton = document.getElementById('createPostButton');

//Getting the modal for creating a post
const postModal = document.getElementById('modal');
const closeButton = document.getElementById('closeCreatePost');
const publishPostButton = document.getElementById('publishPostButton');


//Making functions for making the modal visible/invisible
function showPostModal(){
    postModal.style.display = 'flex';
}; 

function hidePostModal(){
    postModal.style.display = 'none'; 
};


//Making create post button to show modal
createPostButton.addEventListener('click', function(){
    showPostModal();
});


//Making close button functional
closeButton.addEventListener('click', function(e){
    e.preventDefault();
    hidePostModal();
});


//getting and adding function to the create a post form
const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', function(){
    if(postForm.checkValidity()){
        alert('Post published');
        hidePostModal();
    }
    
});


//Getting profile buttons
const mobileProfileButton = document.getElementById('mobileProfileLogo');
const desktopProfileButton = document.getElementById('desktopProfileLogo');

//Creating a function that takes the user to their profile
function goToProfile(){
    window.location.href = '../profiles/index.html';
}

//Adding the functions to the profile icons
mobileProfileButton.addEventListener('click', goToProfile);
desktopProfileButton.addEventListener('click', goToProfile);


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