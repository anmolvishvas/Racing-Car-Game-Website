// creating the Game class which will take the speed and lives' value
class Game {
    constructor(speed, lives, score) {
        // declaring speed, lives and score variables
        this.speed=speed;
        this.lives=lives;
        this.score=score;
    }

    // setting the score value 
    setScore(score){
        this.score=score;
    }

    // returning the score value set before
    getScore(){
        return this.score;
    }

    // setting the speed value 
    setSpeed(speed){
        this.speed=speed;
    }

    // returning the speed value set before
    getSpeed(){
        return this.speed;
    }
    
    // setting the lives value 
    setLives(lives){
        this.lives=lives;
    }

    // return the lives value set before
    getLives(){
        return this.lives;
    }
}
