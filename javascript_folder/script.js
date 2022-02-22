// presetting variable
const speedDash = document.querySelector('.speedDash');
const scoreDash = document.querySelector('.scoreDash');
const lifeDash = document.querySelector('.lifeDash');
const container_game = document.getElementById('container_game');
const btnStart = document.querySelector('.btnStart');

// declaring some global variables
let speed;
let lives=0
let globalVariablescore=0;

// presetting variable for the sounds
var sound_accident = document.getElementById('myAudio_Accident');
var sound_car = document.getElementById('myAudio_Game');
var sound = document.getElementById('myAudio_GameOver');


// if the start button will be pressed, it will start the game
btnStart.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup',pressKeyOff );

// Game variables
let animationGame;
let gamePlay = false;
let player ;
let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft:false,
    ArrowRight:false
}

// function for the beginner level of difficulty
function beginner(){
    // calling the class Game which is written in the Game.js file, and setting values for speed and lives
    beginnerGame= new Game(5,3,0);
    // using sweet alert to display a confirmation message before starting the game
    Swal.fire({
        title: "Ready to start?" ,
        text: "You choose 'beginner' as difficulty level! \nConfirm if you are ready to start the game.",
        showDenyButton: true,
        showCancelButton:false,
        confirmButtonText: "Yes, start!",
        denyButtonText: "No, Go Back!",
    }) .then((result) => {
        if (result.isConfirmed) {
            startGame(beginnerGame);
        }
    })
}

// function for the intermediate level of difficulty
function intermediate(){
    // calling the class Game which is written in the Game.js file, and setting values for speed and lives
    intermediateGame= new Game(10,2,2);
    // using sweet alert to display a confirmation message before starting the game
    Swal.fire({
        title: "Ready to start?" ,
        text: "You choose 'intermediate' as difficulty level! \nConfirm if you are ready to start the game.",
        showDenyButton: true,
        showCancelButton:false,
        confirmButtonText: "Yes, start!",
        denyButtonText: "No, Go Back!",
    }) .then((result) => {
        if (result.isConfirmed) {
            startGame(intermediateGame)
        }
    })
}

// function for the advanced level of difficulty
function advanced() {
    // calling the class Game which is written in the Game.js file, and setting values for speed and lives
    advancedGame= new Game(12,1,4);
    // using sweet alert to display a confirmation message before starting the game
    Swal.fire({
        title: "Ready to start?" ,
        text: "You choose 'advanced' as difficulty level! \nConfirm if you are ready to start the game.",
        showDenyButton: true,
        showCancelButton:false,
        confirmButtonText: "Yes, start!",
        denyButtonText: "No, Go Back!",
    }) .then((result) => {
        if (result.isConfirmed) {
            startGame(advancedGame)
        }
    })
}

// function for the start of the game
function startGame(game) {
    // Playing the sound of a driving car on the road
    sound_car.play();
    // styling the game container
    container_game.style.backgroundImage= "url(../images_folder/Game_Container.png)";
    container_game.innerHTML='';
    btnStart.style.display='none';
    // player's car
    var div = document.createElement('div');
    div.setAttribute('class', 'playerCar');
    // Initial position
    div.x=250;
    div.y=500;
    // appending the game container
    container_game.appendChild(div);
    gamePlay = true;
    // defining the player object
    player = {
        ele:div,
        speed: game.getSpeed(),
        lives: game.getLives(),
        score: game.getScore(),
        roadwidth:400,
        gameEndCounter:0
    };
    // starting the game animation while calling the playGame function
    animationGame = requestAnimationFrame(playGame);
    // calling the startBoard and setupOtherCars functions
    startBoard();
    setupOtherCars(10);
}

// function startBoard to set the road
function startBoard() {
    for (let x=0; x<44; x++){
        // styling the road and appending it into the game container
        let div = document.createElement('div');
        div.setAttribute('class','road');
        div.style.top = (x*50)+'px';
        div.style.width = player.roadwidth+'px';
        container_game.appendChild(div);
    }
}

// function to set up the other cars
function setupOtherCars(num) {
    for (let x = 0; x<num; x++) {
        // setting up other cars
        let temp = 'enemy'+(x+1);
        let div = document.createElement('div');
        div.innerHTML = (x+1);
        div.setAttribute('class','enemy');
        div.setAttribute('id',temp);
        makeEnemy(div);
        // appending the other cars into the game container
        container_game.appendChild(div);
    }
}

// function to randomize the other cars'color
function randomColor() {
    function c() {
        let hex = Math.floor(Math.random()*256).toString(16);
        return('0'+String(hex)).substr(-2);
    }
    // return the color value
    return'#'+c()+c()+c();
}

// function creating enemies
function makeEnemy(e) {
    // styling the enemies on the road and adding them in the road
    let tempRoad = document.querySelector('.road');
    e.style.left = tempRoad.offsetLeft+Math.ceil(Math.random()*tempRoad.offsetWidth)-30+'px';
    e.style.top = Math.ceil(Math.random()*-400)+'px';
    e.speed=Math.ceil(Math.random()*17)+2;
    // calling the randomColor function for the color of the cars
    e.style.backgroundColor=randomColor();
}

// function for the key on event while pressed
function pressKeyOn(event) {
    event.preventDefault();
    keys[event.key] = true;
}

// function for the key off event while pressed
function pressKeyOff(event) {
    event.preventDefault();
    keys[event.key] = false;
}

// function to update the values into the DashBoard with the score, life and speed values
function updateDash() {
    globalVariablescore = player.score;
    scoreDash.innerHTML = player.score;
    lifeDash.innerHTML = player.lives;
    speedDash.innerHTML = Math.round(player.speed*10);
}

// function to move to road
function moveRoad(){
    let tempRoad = document.querySelectorAll('.road');
    const pSpeed = Math.floor(player.speed);
    for (let x=0;x<tempRoad.length;x++)
    {
        let num = tempRoad[x].offsetTop + pSpeed;
        if (num>600)
        {
            num=num-650;
        }
        tempRoad[x].style.top=num+'px';
    }
}

// function check for collisions
function collision(a,b) {
    let aRect= a.getBoundingClientRect();
    let bRect= b.getBoundingClientRect();
    return !(
        (aRect.bottom < bRect.top) || 
        (aRect.top > bRect.bottom) ||
        (aRect.right < bRect.left)||
        (aRect.left > bRect.right)
    )    
}

// function to allow other cars to move
function moveOtherCars(){
    let tempEnemy = document.querySelectorAll('.enemy');
    for (let i = 0; i < tempEnemy.length; i++) {
        // checking if there is collision between enemy cars 
        for (let ii=0; ii<tempEnemy.length; ii++) {
            // if there is collision, we need to make some adjustments
            if (i != ii && collision(tempEnemy[i],tempEnemy[ii])){
                tempEnemy[ii].style.top=(tempEnemy[ii].offsetTop +20)+'px';
                tempEnemy[i].style.top=(tempEnemy[i].offsetTop -20)+'px';
                tempEnemy[ii].style.left=(tempEnemy[ii].offsetLeft -20)+'px';
                tempEnemy[i].style.left=(tempEnemy[i].offsetLeft +20)+'px';
            }
        }
        let y = tempEnemy[i].offsetTop+ player.speed - tempEnemy[i].speed;
        if (y>1000 || y<-1000){
            //reset position of car
            if (y>=1000){
                player.score++;
            }
            // adding more enemy cars on the road
            makeEnemy(tempEnemy[i]);
        }
        else {
            tempEnemy[i].style.top = y+'px';
            // checking if there is a collision / if the player hit an enemy cars
            let hitCar = collision(tempEnemy[i], player.ele);
            if (hitCar) {
                sound_car.pause();
                // playing the accident sound if a car is hit
                sound_accident.play();
                // reducing lives by 1 if there is a collision between cars
                player.lives--;
                // reducing speed if there is a collision between cars
                player.speed-=2;
                if (player.lives<1){
                    player.gameEndCounter=1;
                    lifeDash.innerHTML='0';
                }
                sound_car.play()
                makeEnemy(tempEnemy[i]);
            }
        }   
    }  
}

// function to display the game over message
function gameOverPlay() {
    // pausing the driving car sound
    sound_car.pause();
    // playing the game_Over sound
    sound.play();
    // getting the logged_in user details
    let loggedInUser= sessionStorage.getItem('logged_in');
    // setting the logged_in user's score
    setUserscore(loggedInUser);
    // styling the game container
    container_game.innerHTML='';
    container_game.style.backgroundImage = "none";
    // using sweet alert alert to display the game over message
    Swal.fire({
        title: "Game Over!" ,
        text: "Your score is :"+ player.score,
        showDenyButton: false,
        showCancelButton:true,
        confirmButtonText: "Check ranking table",
        cancelButtonText: "Restart",
    }) .then((result) => {
        if (result.isConfirmed) {
            window.location.href='leaderboard.php'
        } 
        else {
        // using sweet alert alert to display the other level of difficulty if the user decides to play again
            Swal.fire({
                title: "Restart?" ,
                text: "On which level would you like to play",
                showDenyButton: true,
                showCancelButton:true,
                confirmButtonText: "Beginner?",
                cancelButtonText: "Advanced?",
                denyButtonText: "Intermediate?"
            }) .then((result) => {
                if (result.isConfirmed) {
                    // calling the beginner function if the beginner level of difficulty has been chosen
                    beginner();
                } 
                else if (result.isDenied) {
                    // calling the intermediate function if the intermediate level of difficulty has been chosen
                    intermediate();
                }
                else{
                    // calling the advanced function if the advanced level of difficulty has been chosen
                    advanced();
                }
            });
        }
    });
    player.gameEndCounter=12;
    player.speed=0;
}

// function to set the logged_in user's score
function setUserscore(username){
    // converting the localStorage string into object and storing it into the users variable
    let users = JSON.parse(localStorage.users);
    // Loop through localStorage data
    for(let i=0;i<users.length;i++){
        // looking for username logged_in into the localStorage data
        if(users[i].username==username){
            // if user found, checking the users score
            if(globalVariablescore>users[i].highscore){
                // keeping the user's highest score
                users[i].highscore=globalVariablescore;
            }
        }
    }
    // storing the updated data of the user into the localStorage as a string
    localStorage.setItem('users',JSON.stringify(users))         
}

// function to play the game
function playGame() {
    // playing the driving car sound while playing the game
    sound_car.play();
    if (gamePlay) {
        // calling the updateDash function to update the DashBoard
        updateDash();
        // calling the moveRoad function to move the road
        moveRoad();
        // calling the moveOtherCars function to move the other in the road
        moveOtherCars();
        // movements of the player's car using arrow key
        // when key Arrow Up is pressed, it will increment the speed
        if (keys.ArrowUp) {
            if (player.ele.y>320){
                player.ele.y += -1;
                player.speed = player.speed < 20 ? (player.speed + 0.05) :20;
            }
        }
        // when key Arrow Down is pressed, it will decrease the speed
        if (keys.ArrowDown) {
            if (player.ele.y<400) {
                player.ele.y +=1;
                player.speed = player.speed>0?(player.speed-0.2): 0;
            }

        }
        // event when key Arrow Right is pressed
        if (keys.ArrowRight && player.ele.x<400) {
            player.ele.x += (player.speed/4);
        }
        // event when key Arrow Left is pressed
        if (keys.ArrowLeft && player.ele.x >90) {
            player.ele.x -= (player.speed/4);
        }
        // moving the car
        player.ele.style.top = player.ele.y+'px';
        player.ele.style.left = player.ele.x+'px';
    }
    // creating the game animation
    animationGame = requestAnimationFrame(playGame);

    // when there will be no more lives, the game over function is called and the animation frame will be canceled
    if (player.gameEndCounter>0) {
        player.gameEndCounter--;
        player.y = (player.y >60)?player.y-30:60;
        if (player.gameEndCounter == 0) {
            gamePlay = false;
            // canceling the game Animation frame
            cancelAnimationFrame(animationGame);
            btnStart.style.display = 'none';
            // Calling the game Over function to display the game over message
            gameOverPlay();
        }
    }
}