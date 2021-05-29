'use strict';

var random_number = Math.trunc( Math.random()*20 ) + 1 ;
var score =20 ;
var highscore =0;

document.querySelector('.check').addEventListener('click' , function(){

 const guess = Number(document.querySelector('.guess').value);

if(!guess){

    document.querySelector('.message').textContent = "No number is entered :("
}
else if( guess === random_number ){


document.querySelector('.message').textContent ="correct Number";

highscore = score;

document.querySelector('.label-highscore').textContent =  "🥇 Highscore" + highscore;

document.querySelector('.number').textContent =  random_number;

document.querySelector('body').style.backgroundColor = '#60b347';

}
else if(guess > random_number){ 
    if(score > 0){
        document.querySelector('.message').textContent ="High";
        score=score -1 ;
        document.querySelector('.label-score').textContent ="💯 Score:"+score;
        

    }
    else{

document.querySelector('.message').textContent = "You Lost the game";

    }

    }
else if(guess < random_number){
    if(score > 0 ){

        document.querySelector('.message').textContent ="Low ";
        score=score -1 ;
        document.querySelector('.label-score').textContent =  "💯 Score:" + score;
    }
    else{
        document.querySelector('.message').textContent = "You Lost the game";
    }
    
}

})  ;

document.querySelector('.again').addEventListener('click',function(){

    random_number = Math.trunc( Math.random()*20 ) + 1 ;
    var score =20 ;
    document.querySelector('.message').textContent = "Start guessing..." ;
    document.querySelector('.label-score').textContent = "💯 Score: 20" ;
    document.querySelector('.guess').value = null ;
    document.querySelector('body').style.backgroundColor = '#222';
});