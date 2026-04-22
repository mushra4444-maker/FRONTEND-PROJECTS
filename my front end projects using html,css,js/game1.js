let boxes = document.querySelectorAll(".BOX");
let reset= document.querySelector(".reset");
let newgame= document.querySelector("#newgame");
let msg=document.querySelector(".msg_container");
let paragraph=document.querySelector("#msg");

let turnO= true;

const winnerpattern=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
]

const resetgame=()=>{
    turnO=true;
    enablebtns();
    msg.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText = "X";
            turnO=true;
        }
        
        checkwinner();
        box.disabled=true;  
       
    });
    
});

let disablebtns = ()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}

let enablebtns = ()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const showwinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msg.classList.remove("hide");
    disablebtns();
};


let checkwinner = () =>{
    for(let pattern of winnerpattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val !=="",pos2val !=="",pos3val !== ""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("congratulations you have own the game",pos1val)
                showwinner(pos1val);
            }
        }
    }
}
    
reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);