<?php
    // including the common.php file which contains all the common code for the website
    include('common.php');
    // calling the outputHead function from the common.php file to display the title of the page
    outputHead("Racing Car Website - How To Play");
    // calling the background function from the common.php file to add a background to the page
    background('How_to_play-Background.jpg');
    // calling the output_Navigation function from the common.php file to display the navigation bar
    outputNavigation('How To Play');
    // calling the display_rules function to display the rules of the game
    DisplayRules('How To Play?');
?>
<!-- calling the common.js file -->
<script src="../javascript_folder/common.js"></script>


<!-- script used for alert -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11">
</script>

<!-- calling the how_to_play.js script -->
<script src="../javascript_folder/how_to_play.js"></script>

<!-- displaying the play and leaderboard buttons -->
<div>
    <button class="button_play" onclick="goToPlay()" id="playBtn"> <img src="/images_folder/Play_Button.PNG"></button>
    <a href="leaderboard.php"> <button class="button_highscore" ><img src="/images_folder/Leaderboard_button.png"> </button></a>
</div>';

<!-- this is the animation area where the animation is displayed -->
<img src="/images_folder/Game_Animation.gif" class="how-to-play_animation">

<?php
    // calling the footer function 
    outputFooter();
?>