// function go to play that will be used for the play button in how to play page.
function goToPlay(){
    // if sessionStorage.logged_in is not null, it will take the user to the game page when the button play will be pressed
    if(!(sessionStorage.logged_in==null)){
        window.location.href='game.php';
    }
    // else
    else{
        // it will display an error message asking the user to login first using the sweet alert feature
        Swal.fire({
            title: "Error!" ,
            text: "To play the game, you will need to login or register if you don't have an account.",
            showDenyButton: false,
            showCancelButton:true,
            confirmButtonText: "Ok",
            denyButtonText: "Cancel",
        }) .then((result) => {
            if (result.isConfirmed) {
                window.location.href='login.php';
            }
        })
    }
}