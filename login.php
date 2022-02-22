<?php
    // including the common.php file which contains all the common code for the website
    include('common.php');
    // calling the outputHead function from the common.php file to display the title of the page
    outputHead("Racing Car Website - Login");
    // calling the background function from the common.php file to add a background to the page
    background('Login-Background.jpg');
    // calling the output_Navigation function from the common.php file to display the navigation bar
    outputNavigation('Login');
?>
<!-- calling the common.js file -->
<script src="../javascript_folder/common.js"></script>
<!-- Codes to display the form box for the login and registration -->
<div class="form-box">
    <div class="button-box">
        <div id="btn"></div>
        <!-- toggle buttons -->
        <button type="button" class="toggle-btn" onclick='login()'>Log In</button>
        <button type="button" class="toggle-btn" onclick='register()'>Register</button>
    </div>

    <!-- form for the login section -->
    <form id="form1">
        <div id=login class="input-group-login">
            <p style="color: white; text-align:center; left:100px"> Welcome to the login page, <br> Enter your username and password.</p>
            
            <div class= 'form_control' style="padding-bottom:3%">
                <input type="text"  placeholder="@username" id="login_username">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Error message</small>
            </div>  
            
            <div class= 'form_control' style="padding-bottom:5%">
                <input type="password"  placeholder="@password" id="login_password">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Error message</small>
            </div>

            <input type="submit" class="submit-btn">Log in</button> 
            <br>
            <p onclick='register()' class="form_text"> If you are a new user, register here </p>
        </div>
    </form>

    <!-- form for the registration section -->
    <form id='form2'>
        <div id="register" class="input-group-register">
            <p style="color: white; text-align:center; left:30px; margin-top:3%"> Welcome to the registration page!</p>
            
            <div class= "form_control">
                <input type="text"  placeholder="@firstname" id='firstname' >
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Please provide your firstname</small>
            </div>
            
            <div class= "form_control">
                <input type="text"  placeholder="@surname" id='surname' >
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Please provide your surname</small>
            </div>

            <div class= "form_control">
                <input type="text"  placeholder="@username" id='username' >
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Error message</small>
            </div>
            

            <div class= "form_control">
                <input type="date" id='dob'>
                <small> Please provide date of birth</small>
            </div>
            
            <div class= "form_control">
                <input type="number"  placeholder="@phone_number" id='phone_number' >
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Please provide your phone_number</small>
            </div>

            <div class= "form_control">
                <input type="text" placeholder="@email" id='email'>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Error message</small>
            </div>
            
            <div class= "form_control">
                <input type="password"  placeholder="@password" id='password'>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Error message</small>
            </div>
            
            <div class= "form_control">
                <input type="password" placeholder="@confirmpassword" id='cpassword'>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small> Error message</small>
            </div>
            
            <input type="submit" value='Submit' class="submit-btn_registration">  Sign Up
            <p onclick='login()' class="form_text"> If you have an account, login here </p>
        </div>
    </form>
</div>

<!-- script used for alert -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11">
    
</script>
    
<!-- calling the javascript script for validation of datas-->
<script src="../javascript_folder/login_registration_script.js"></script>

<?php
    // calling the footer function 
    outputFooter();
?>