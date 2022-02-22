// if sessionStorage.logged_in won't be null, 
if (!(sessionStorage.logged_in==null)){
    // login button will be disabled 
    document.getElementById("login_btn").disabled=true;
    document.getElementById("login").addEventListener("click", function(event){
        event.preventDefault()
    });
}
else {
    // login button won't be disabled
    document.getElementById("login_btn").disabled=false;
}