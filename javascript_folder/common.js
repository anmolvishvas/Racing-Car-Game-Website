// presetting variables
let nav_login = document.getElementById("Login");
let nav_logout = document.getElementById("Logout");

// logOut function, when pressed it will clear the logged_in user's detail from the sessionStorage data
function LogOut() {
    delete sessionStorage.logged_in;
}

// if sessionStorage.logged_in won't be null, 
if (!(sessionStorage.logged_in==null)){
    // login option won't be displayed in the navigation bar and logout menu will be displayed
    nav_login.style.display="none";
}
// else
else {
    // logout option won't be displayed in the navigation bar and login menu will be displayed
    nav_logout.style.display="none";
}

