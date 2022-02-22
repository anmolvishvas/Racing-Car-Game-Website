// variables for the animation for the login and registration form
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');

// variable for validation (login section)
const form1 = document.getElementById('form1');
const login_username = document.getElementById('login_username');
const login_password = document.getElementById('login_password');

// variable for validation (Registration section)
const form = document.getElementById('form2');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const username = document.getElementById('username');
const date = document.getElementById('dob');
const phonenumber = document.getElementById('phone_number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// used to validate password
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
let check_special_character = new RegExp ("^(?=.*[!@#\$%\^&\*])");
let minRegex = new RegExp("(?=.{8,})");

// init function will be performed as soon as the page finishes loading
window.onload = init;

function init(){
    // add event for the login section
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        // when the submit button will be pressed, it will perform the login data validation 
        // calling the performLogin function
        performLogin();
    })

    // add event for the registration section
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // when the submit button will be pressed, it will perform the validation of the data entered into the input fields
        // calling the validate function
        validate();
    })

    //Create array of users if it does not exist.
    if(localStorage.users === undefined){
        localStorage.users = "[]";
    }
}

// function to perform login
function performLogin(){
    // local variable taking the value of the input fields
    let usernameVal=document.getElementById("login_username").value;
    let passwordVal=document.getElementById("login_password").value;
    // setting the user_exist to false
    user_exist=false;

    // converting localStorage data into object and storing it into users variable
    let users = JSON.parse(localStorage.users);

    // looping through localStorage data
    for(let i=0;i<users.length;i++){
        if(users[i].username==usernameVal){
            // if user found it will set the user_exist variable to true
            user_exist=true;
            // checking if data entered for username and password are correctly entered 
            if(users[i].username==usernameVal && users[i].password==passwordVal){
                // if yes, it will store the username in the sessionStorage.logged_in
                sessionStorage.setItem('logged_in',usernameVal);
                // calling the setSuccessMessage function for the username and password
                setSuccessMessage(login_username);
                setSuccessMessage(login_password);
                // displaying a welcome message when successfully logged in using sweet alert feature
                Swal.fire({
                    title: "Logged in successfully!" ,
                    text: "Welcome again, "+ users[i].firstname + '! \nYou have successfully logged in to the Racing Car Game website. Hope you will enjoy the game! Have a good day!',
                    icon: 'success',
                    showDenyButton: false,
                    showCancelButton:false,
                    confirmButtonText: "Continue",
                }) .then((result) => {
                    if (result.isConfirmed) {
                        window.location.href='how_to_play.php';
                    }
                })
                return;
            }
            else{
                // calling the setSuccessMessage function for the username field as it was correctly entered 
                setSuccessMessage(login_username);
                // checking if password value is empty
                if (passwordVal=="")
                {
                    // calling the setErrorMessage function to display the error message
                    setErrorMessage(login_password, "Password cannot be blank");
                }
                else {
                    // calling the setErrorMessage function to display the error message
                    setErrorMessage(login_password, "Incorrect Password");
                }
                return;
            }
        }
        
        else {
            // checking if username and password value is empty
            if (usernameVal=="" && passwordVal==""){
                // calling the setErrorMessage function to display the error message
                setErrorMessage(login_username, "Username cannot be blank");
                setErrorMessage(login_password, "Password cannot be blank");
            }
            // checking if username value entered doesn't match to any username stored localStorage and password field is empty
            else if (!(users[i].username==usernameVal) && passwordVal=="") {
                // calling the setErrorMessage function to display the error message
                setErrorMessage(login_username, "Username doesn't exist");
                setErrorMessage(login_password, "Password cannot be blank");
            }
            else if (!(users[i].username==usernameVal) && !(users[i].password==passwordVal)) {
                // calling the setErrorMessage function to display the error message
                setErrorMessage(login_username, "Username doesn't exist");
                setErrorMessage(login_password, "Invalid Password");
            }
            else {
                // calling the setErrorMessage function to display the error message
                setErrorMessage(login_password, "Password doesn't exist");
            }
        }            
    }
}

// function to send data when data entered are correct
const sendData = (usernameVal, successRate, count) => {
    if (successRate === count) {
        // displaying a message using sweet alert feature
        Swal.fire({
            title: "Registered successfully!" ,
            text: "Welcome, "+ usernameVal + '! \nYou have successfully registered to the Racing Car Game website. Hope you will enjoy the game! Have a good day!',
            icon: 'success',
            showDenyButton: false,
            showCancelButton:false,
            confirmButtonText: "Continue",
        }) .then((result) => {
            if (result.isConfirmed) {
                window.location.href='how_to_play.php';
            }
        })
    }
}

// function to display the success message
const SuccessMessage = (firstnameVal, surnameVal, usernameVal, dateVal, phonenumberVal, emailVal, cpasswordVal) => {
    let controlFrom = document.getElementsByClassName('form_control');
    var count = controlFrom.length-1;
    for (var i=0 ; i<controlFrom.length; i++) {
        if (controlFrom[i].className === "form_control success") {
            var successRate = 0+i;
            // sending data when all the data are correctly entered
            sendData(usernameVal,successRate, count);
        }
    }
    //Create new user object
    let newUser = {
        firstname: firstnameVal,
        surname: surnameVal,
        username: usernameVal,
        date:dateVal,
        phonenumber: phonenumberVal,
        email: emailVal,
        password: cpasswordVal,
        highscore: 0,
    };
    // converting localStorage data into object and storing it into users variable
    let users = JSON.parse(localStorage.users);
    // pushing the newUser objects into the users variable
    users.push(newUser);
    // converting the objects into strings then storing it into the localStorage
    localStorage.users = JSON.stringify(users);
    // storing the username into the sessionStorage.logged_In user part
    sessionStorage.setItem('logged_in',usernameVal);
}

// defining the validation function
const validate=() => {
    // to remove unecesary whitespaces
    let firstnameVal = firstname.value.trim();
    let surnameVal = surname.value.trim();
    let usernameVal = username.value.trim();
    let dateVal = date.value;
    let phonenumberVal = phonenumber.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();
    let cpasswordVal = cpassword.value.trim();

    // checking if the required data have been provided correctly before storing it into the array
    let check_firstname = true;
    let check_surname = true;
    let check_username = true;
    let check_date = true;
    let check_phone_number= true;
    let check_email = true;
    let check_password= true;
    let check_cpassword = true;

    var atSymbol = emailVal.indexOf("@");
    var dot = emailVal.lastIndexOf(".");
    


    // validate firstname
    // checking if the firstname field is empty
    if (firstnameVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(firstname, "First name cannot be blank");
        check_firstname = false;
        return;
    }
    // checking the length of the firstname value entered
    else if (firstnameVal.length <=2 ){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(firstname, "First name must have a minimum of 3 characters");
        check_firstname = false;
        return;
    }
    else {
        // calling the setSuccessMessage function
        setSuccessMessage(firstname);
        check_firstname = true;
    }

    // validate surname
    // checking if the surname field is empty
    if (surnameVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(surname, "Surname cannot be blank");
        check_surname = false;
        return;
    }
    // checking the length of the surname value entered
    else if (surnameVal.length <=2 ){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(surname, "Surname must have a minimum of 3 characters");
        check_surname = false;
        return;
    }
    else {
        // calling the setSuccessMessage function
        setSuccessMessage(surname);
        check_surname = true;
    }

    // validate username
    // checking if the username field is empty
    if (usernameVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(username, "Username cannot be blank");
        check_username = false;
        return;
    }
    // checking the length of the username value entered
    else if (usernameVal.length <=2 ){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(username, "Username must have a minimum of 3 characters");
        check_username = false;
        return;
    }
    else {
        // calling the setSuccessMessage function
        setSuccessMessage(username);
        check_username = true;
    }

    // validate dob
    // checking if the date of birth field is empty
    if (dateVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(date, "Date cannot be blank");
        check_date = false;
        return;
    }
    else {
        // calling the setSuccessMessage function
        setSuccessMessage(date);
        check_date = true;
    }

    // Validate phone number
    // checking if the phone number field is empty
    if (phonenumberVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(phonenumber, "Phone number cannot be blank");
        check_phone_number= false;
        return;
    }
    // checking the length of the phone number entered
    else if (!(phonenumberVal.length === 8)){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(phonenumber, "Not a valid phone number");
        check_phone_number= false;
        return;
    }
    else {
        // calling the setSuccessMessage function
        setSuccessMessage(phonenumber);
        check_phone_number= true;
    }
   
    // checking if the email field is empty
    if (emailVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(email, "Email cannot be blank");
        check_email = false;
        return;
    }
    // checking if the email contain the @ symbol
    else if (atSymbol <1) {
        setErrorMessage(email, "Not a valid email, @ symbol is missing");
        check_email = false;
        return;
    } 
    // checking of the dot symbol is well placed 
    else if (dot <= atSymbol+ 2) {
        setErrorMessage(email, "Not a valid email");
        return;
    }
    else if (dot === emailVal.length - 1) {
        setErrorMessage(email, "Not a valid email");
        return;
    }
    else {
        // calling the setSuccessMessage function
        setSuccessMessage(email);
        check_email = true;
    }

    // validate password
    // checking if the password field is empty
    if (passwordVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(password, "Password cannot be blank");
        check_password= false;
        return;
    }
    // checking if the password entered contains special characters
    else if(check_special_character.test(passwordVal)){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(password, "The password should not contain special character");
        check_password= false;
        return;
    }
    // checking the length of the password entered
    else if((minRegex.test(passwordVal))==false){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(password, "The password must be at least 8 characters");
        check_password= false;
        return;
    }
    // checking if the password contains lowercase, uppercase and digits
    else if (strongRegex.test(passwordVal)){
        // calling the setSuccessMessage function
        setSuccessMessage(password);
        check_password= true;
    }
    else {
        // calling the setErrorMessage function to display the error message
        setErrorMessage(password, "Not a valid password");
        check_password= false;
        return;
    }

    // validate the confirm password section
    // checking if the confirm password field is empty
    if (cpasswordVal === ""){
        // calling the setErrorMessage function to display the error message
        setErrorMessage(cpassword, "Password not matching");
        check_cpassword= false;
        return;
    }
    // checking if confirm password entered math to the password entered previously
    else if (passwordVal === cpasswordVal){
        // calling the setSuccessMessage function
        setSuccessMessage(cpassword);
        check_cpassword= true;
    }
    else {
        // calling the setErrorMessage function to display the error message
        setErrorMessage(cpassword, "Password not matching");
        check_cpassword= false;
        return;
    }

    // calling check_if_User_Exist function to checking if username exist
    if (Check_if_User_Exist(usernameVal)){
        // displaying error message using sweet alert feature
        Swal.fire({
            title: "Username Not Valid" ,
            text: "Username already exist, create a new username.",
            showDenyButton: false,
            showCancelButton:false,
            confirmButtonText: "Okay!",
        }) .then((result) => {
            if (result.isConfirmed) {
                // calling the setErrorMessage function to display the error message
                setErrorMessage(username, "Username already exist");
            }
        })
       return;
    }
    // else if all data entered are correct
    else if (check_firstname && check_surname && check_username && check_date && check_email && check_phone_number && check_password && check_cpassword){
        // calling the setSuccessMessage function
        SuccessMessage(firstnameVal, surnameVal, usernameVal, dateVal, phonenumberVal, emailVal, cpasswordVal);
    }
    else {
        // displaying error message using sweet alert feature
        Swal.fire({
            title: "Error" ,
            text: "Something went wrong, please try again",
            showDenyButton: false,
            showCancelButton:false,
            confirmButtonText: "Okay!",
        }) .then((result) => {
            if (result.isConfirmed) {
                window.location.href='login.php'
            }
        })
       return;
    }
}

// function to set the error message
function setErrorMessage(input, error_message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form_control error";
    small.innerText = error_message;
}

// function to set the success message
function setSuccessMessage(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success"; 
}

// function to check if the user exist
function Check_if_User_Exist(usernameVal){
    // setting exist to false
    exist=false;

    // converting localStorage data into object and storing it into users variable
    let users = JSON.parse(localStorage.users);

    // looping thought the user data stored in the local storage
    for(let i=0;i<users.length;i++){
        if(users[i].username==usernameVal){
            // if username exist, exist variable will be set to true
            exist=true;
        }
    }
    return exist;
}

// function for the registration section's position
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}

// function for the login section's position
function login()
{
    x.style.left='50px';
    y.style.left='750px';
    z.style.left='0px';
}