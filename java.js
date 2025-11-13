let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score = document.querySelector("#myScore");
const scores = document.querySelector("#compScore");

const emojiOverlay = document.querySelector("#emoji-overlay");

const genComputerChoice=()=>
{   const option=["rocks","paper","scissors"];
    const randIx= Math.floor( Math.random()*3);
    return option[randIx]
}

const drawGame=()=>
{
    console.log("game was draw");
    msg.innerText="Match Draw! Play again ";
    msg.style.backgroundColor="#081b31";
};
// dekhte h
const showEmoji = (emoji) => {
    emojiOverlay.innerText = emoji;
    emojiOverlay.classList.add("show");
    setTimeout(() => {
        emojiOverlay.classList.remove("show");
        emojiOverlay.innerText = "";
    }, 1500);
};


const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin){
        userscore++;
        score.innerText=userscore;
        console.log("you win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        // isko bhi
        showEmoji("🥳");
    }
    else{
        compscore++;
        scores.innerText=compscore;
        console.log("you lost");
        msg.innerText=`You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";

        // check
        showEmoji("😢");
    }
};
const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    // genertae computer choice
    const compChoice =genComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice===compChoice){
         drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
          // comp choice ya toh scissors hogi ya toh paper....
          userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {   // comp -> scissors , rock
          userWin= compChoice==="scissors"?false:true;
        }
        else{
            // comp -> rock,paper
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playgame(userChoice);
    });
});