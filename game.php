<?php
    // including the common.php file which contains all the common code for the website
    include('common.php');
    // calling the outputHead function from the common.php file to display the title of the page
    outputHead("Racing Car Website - Game");
    // calling the background function from the common.php file to add a background to the page
    background('game-background.jpg');
    // calling the output_Navigation function from the common.php file to display the navigation bar
    outputNavigation('Game');
    // calling the display_rules function to display the rules of the game
    DisplayRules('Rules?');
?>
<!-- calling the common.js file -->
<script src="../javascript_folder/common.js"></script>
<br>
<br>
<!-- diplaying the leaderboard button -->
<a href="leaderboard.php" style="margin-left:12%;"> <button class="button_highscore" ><img src="/images_folder/Leaderboard_button.png"> </button></a>


<!-- displaying the dashboard -->
<div class="btnStart"> Start Game </div>
<div class="dashBoard">
    Speed: <span class="speedDash"></span>  KPH|
    Score: <span class="scoreDash"></span> | 
    Lives: <span class="lifeDash"></span>
</div>
<!-- this is the game area -->
<div id="container_game"> 
    <div class="level_difficulties">        
        <h2 style="text-align: center; padding: 10%; font-size: 40px;"> Welcome To The Game Area</h2>
        <p style="text-align: center; font-size: 22px;"> Choose your difficulty level for the game: </p>
        <!-- displaying the option of level of difficulty -->
        <div class="option_box">
            <button style="text-align: center; padding: 20px; padding-left:50px; padding-right:50px; margin-left: 43.2%; margin-top: 20px;" onclick="beginner()">Beginner</button>
            <button style= "text-align: center; padding: 20px; padding-left:37px; padding-right:37px; margin-left: 43.2%; margin-top: 60px;" onclick="intermediate()"> Intermediate </button>
            <button style= "text-align: center; padding: 20px; padding-left: 48px; padding-right: 48px; margin-left: 43.2%; margin-top: 60px;" onclick="advanced()"> Advanced </button>
        <div>
    </div>
</div>

<!-- adding sounds that will be used in the game -->
<audio id="myAudio_Game">
  <source src="../sound_folder/Car_driving.ogg" type="audio/ogg">
  <source src="../sound_folder/Car_driving.mp3" type="audio/mpeg">
</audio>

<audio id="myAudio_Accident">
  <source src="../sound_folder/Car_Accident.ogg" type="audio/ogg">
  <source src="../sound_folder/Car_Accident.mp3" type="audio/mpeg">
</audio>

<audio id="myAudio_GameOver">
  <source src="../sound_folder/Game_Over.ogg" type="audio/ogg">
  <source src="../sound_folder/Game_Over.mp3" type="audio/mpeg">
</audio>

<!-- script used for alert -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11">   
</script>
<!-- calling the game's javascript files -->
<script src="../javascript_folder/script.js"></script>
<script src="../javascript_folder/Game.js"></script>


<?php
    // calling the footer function 
    outputFooter();
?>