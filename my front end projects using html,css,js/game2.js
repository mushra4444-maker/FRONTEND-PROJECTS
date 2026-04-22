// let choices=document.querySelectorAll(".choices");
// let choice1=document.querySelectorAll(".choice");
// let score=document.querySelectorAll(".score");
// let playmsg=document.querySelectorAll(".playmsg");

// let computerscore=0;
// let yourscore=0;


// choice1.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userchoice=choice.getAttribute("id");
//         // console.log("hello world", userchoice);
//         playgame(userchoice);
//     });
// });

// const gencompterchoice=()=>{
//     let gamechoice =["paper","scissors","stone"];
//     let randomIndex=Math.floor(Math.random()*3)
//     // console.log(randomIndex);
//     return gamechoice[randomIndex];
// }

// const showwinner=(userwin)=>{
//     if(userwin){
//         console.log("you win!!");
//     }else{
//         console.log("you lose!!");
//     }
// }

// let playgame = (userchoice)=>{
//     console.log("userchoice=",userchoice);
//     const computerchoice=gencompterchoice();
//     console.log("user computer =",computerchoice);
//     if(userchoice===computerchoice){
//     draw();
// }else{
//     let userwin=true;
//     if(userchoice ==="rock"){
//         //scissor or paper
//         userwin = computerchoice === "paper"?false:true;
//     }else if(userchoice==="paper"){
//         // rock or scissor
//         userwin= computerchoice === "scissor"? false:true;

//     }else{
//         userwin= computerchoice === "rock"?false:true;
//     }
//     showwinner(userwin);
// }

// };

// let draw=()=>{
//     console.log(" your match has been draw")
// }

let score = document.querySelector(".score");
let playmsg = document.querySelector(".playmsg");

let computerscore = 0;
let yourscore = 0;

let choice1 = document.querySelectorAll(".choice");

choice1.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const gencompterchoice = () => {
    let gamechoice = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return gamechoice[randomIndex];
};

const showwinner = (userwin) => {
    if(userwin){
        yourscore++;
        playmsg.innerText = "You win!";
    } else {
        computerscore++;
        playmsg.innerText = "Computer wins!";
    }
    score.innerText = `Your Score: ${yourscore} | Computer Score: ${computerscore}`;
};

let playgame = (userchoice) => {
    const computerchoice = gencompterchoice();
    if(userchoice === computerchoice){
        playmsg.innerText = "It's a draw!";
    } else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userwin = computerchoice === "scissors" ? false : true;
        } else if(userchoice === "scissors"){
            userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
};


