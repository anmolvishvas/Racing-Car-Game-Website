<!-- common.php file which contains phph function of the common parts of the website to avoid duplicate codes -->

<?php
// php function to output the header
function outputHead($title) {
    echo '<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        // Linking Bootstrap CSS with HTML 
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>'.$title.'</title>',
        // Linking the CSS stylesheet with the html
        '<link rel="stylesheet" href="/css_folder/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>';
}

// php function for the background
function background($backgroundLink){
    echo '<img src="/images_folder/'.$backgroundLink.'" id="background" alt="">';
}

// php function to output the navigation 
function outputNavigation($pageName) {
    echo '<header>
    <nav class="navigation_container">
        <div class="website_logo">
            <img src="/images_folder/Logo.png" alt="">
        </div>';

    // array with name of each pages
    $linkNames =  array ("Home","Login","How To Play","Leaderboard", "Contact Us", "Logout");
    // array with id of each menu
    $linkMenu =  array ("Home","Login","How_To_Play","Leaderboard", "Contact_Us", "Logout");
    // array with link adresses of each pages in the same order as the first array created which contains the name of the pages
    $linkAdresses = array ("index.php","login.php","how_to_play.php","leaderboard.php","contact_us.php", "index.php");
    // array with icons for each menu for the navigation in the same order as the first array created which contains the name of the pages
    $linkIcons = array("<svg xmlns='http://www.w3.org/2000/svg' width='36' height='26' fill='currentColor' class='bi bi-house-door' viewBox='0 0 16 16'>
    <path d='M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z'/>
    </svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='26' fill='currentColor' class='bi bi-box-arrow-in-right' viewBox='0 0 16 16'>
    <path fill-rule='evenodd' d='M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z'/>
    <path fill-rule='evenodd' d='M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'/>
    </svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='26' fill='currentColor' class='bi bi-question-octagon' viewBox='0 0 16 16'>
    <path d='M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z'/>
    <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'/>
    </svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='26' fill='currentColor' class='bi bi-trophy' viewBox='0 0 16 16'>
    <path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z'/>
    </svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='26' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>
    <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'/>
    </svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='26' fill='currentColor' class='bi bi-box-arrow-left' viewBox='0 0 16 16'>
    <path fill-rule='evenodd' d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'/>
    <path fill-rule='evenodd' d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z'/>
  </svg>");
    echo '<div>';
    // for loop to include the selected class for the specific page that will have a different background if you are in that page
    for ($index = 0; $index < count ($linkNames); $index++) {
        echo '<a href = "'.$linkAdresses[$index].'" id= "'.$linkMenu[$index].'"';
        if ($linkNames[$index] == $pageName) {
            echo 'class="selected"';
        }
        if ($linkNames[$index] == "Logout") {
            echo 'onclick = "LogOut()"';
        }
        // displaying the specific icons for each menu
        echo '>'.$linkIcons[$index]. $linkNames[$index].' </a>';
    }
    echo '</div>
        </nav>
        </header>';  
}
// php function to output the rules for the game page and how to play page
function DisplayRules($title){
    echo 
    '<div class="box">
        <h2 style="text-align: center">
            <strong>'.$title.'</strong>
        </h2>

        <p>
            - You will have the option to choose the level (beginner, intermediate and advanced).<br>
            - If you chose beginner, you will get 0 score in bonus, as it is the easiest level. <br>
            - If you chose intermediate, you will get 2 score in bonus, as it is the normal level.<br>
            - If you chose advanced, you will get 4 score in bonus, as it is the most difficult level. <br>
            - In the beginning of the game, you will have 3 lives for beginner level, 2 lives for intermediate level and 1 life for advanced level.<br>
            - Using the arrow keys on the keyboard, dodge all the incoming cars moving left or right.<br> 
            - If you hit another car, the user may lose 1 life each time and it will slow down the speed of your car. <br>
        </p>

        <p style="text-align: center"> 
            <i>Press on the "Play" button if you are ready.</i>
            <br><strong> Good Luck!</strong>
        </p>
    </div>';
    
}

// php function to display the footer
function outputFooter() {
    echo '<footer>
            <div class="footer">
                <h4> © Car Racing Game 2021 - All Rights Reserved </h4>
            </div>
        </footer>
        </body>
    </html>';
}
