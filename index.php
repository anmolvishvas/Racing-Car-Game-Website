<?php
    // including the common.php file which contains all the common code for the website
    include('common.php');
    // calling the outputHead function from the common.php file to display the title of the page
    outputHead("Racing Car Website - Home");
    // calling the background function from the common.php file to add a background to the page
    background('Home-Background.jpg');
    // calling the output_Navigation function from the common.php file to display the navigation bar
    outputNavigation('Home');
?>
<!-- calling the common.js file -->
<script src="../javascript_folder/common.js"></script>

<!-- Displaying the animation on the left side of the website -->
<div class="split left_side">
    <img src="/images_folder/Game_Animation.gif" class="homepage_animation">
</div>

<!-- Displaying a welcome message and a description of the game website on the right side of the website -->
<div class="split right_side">
    <div class="box_shadow">
        <h2 style="text-align: center;">
            <strong>Welcome to Racing Car Game!</strong>
        </h2>
        <p>
            Racing car game is a single player game where the user will control a car in the road using the arrow keys on the keyboard.
            The user will have to dodge all the incoming cars moving left or right. The user will have the option to choose the level of difficulty for the game.
        </p>

        <p style="text-align: center;">
            <i>Login to play! Or register if you have not sign up yet.</i>
        </p>

        <h3 style="text-align: center"> 
            <br><strong> Good Luck!</strong>
        </h3>
    </div>

    <!-- Buttons and the links -->
    <a href="login.php" id ="login"> <button class="btn"  id ="login_btn"> <img src="/images_folder/Icon Log-in.png"> <br> Login </button> </a> <br>
    <a href="leaderboard.php"> <button class="btn"> <img src="/images_folder/Trophy icon.png"> <br> Leaderboard </button> </a>
    <a href="contact_us.php"> <button class="btn"> <img src="/images_folder/Contact icon.png"> <br> Contact Us </button> </a> 
</div>

<!-- calling the index.js file -->
<script src="../javascript_folder/index.js"></script>


<?php
    // calling the footer function 
    outputFooter();
?>
