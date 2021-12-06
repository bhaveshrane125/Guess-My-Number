console.log(document.querySelector('.message').textContent);
let number;
function numGen()
{
    number = Math.trunc(Math.random() * 20 + 1);
    console.log(number)
}

numGen();
let score = 20;
let highscore = 0;
let scoreboard = document.querySelector('.score');
let message = document.querySelector('.message')
let guessv = document.querySelector('.guess')
let secretBoard = document.querySelector('#secret');



document.querySelector('.again').addEventListener
('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';
    message.textContent = 'Start guessing...';
    document.querySelector('.highscore').textContent = highscore;
    score = 20;
    scoreboard.textContent = score;
    guessv.value = "";
    secretBoard.textContent = '?';
    secretBoard.style.width = '15rem'
    numGen();
    
})




document.querySelector('.check').addEventListener
('click', function(){
    let guess = guessv.value;
    console.log(guess);
    if (score>0)
    {
            if (guess != number)
            {
                score-=1;
                document.querySelector('.score').textContent = score;
                if(guess<number)
                {
        
                    document.querySelector('.message').textContent = "Too Low!!!";
                }
                else{
                    message.textContent = 'Too High!!!';
                }
            }
            else{
                message.textContent = 'Correct Number!!!!'
                document.querySelector('body').style.backgroundColor = 'green';
                let secretBoard = document.querySelector('#secret');
                secretBoard.style.width = '30rem';
                secretBoard.textContent = number;
                if (highscore<score)
                {
                    highscore = score;
                }

            }
    }
    else{
        message.textContent = 'You Lost!!!';

    }
    
    
})

