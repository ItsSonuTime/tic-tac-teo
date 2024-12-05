let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetgame");
let newGameBtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO =  true// playerx, playery 


const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,5],
    [2,5,8] ,
    [1,4,7],
    [0,3,6],
    [0,4,8],
    [2,4,8]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ]
;

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");


}



boxes.forEach((box) =>{
  box.addEventListener('click', () => {
   if ( turnO){
    box.innerText = "O";
    turnO = false;
   } else{
    box.innerText = "X";
    turnO = true;
   }

   box.disabled = true;

   checkWinner ();
});
});

const disableboxes =() => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes =() => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

 const ShowWinner = (Winner) =>{
     msg.innerText = `congratulations , Winner is ${Winner}`;
     msgContainer.classList.remove("hide");
     disableboxes();
 };

 const checkWinner = () =>{
    for( let Pattern of WinPatterns){

    
             let pos1val = boxes[Pattern[0]].innerText;
             let pos2val =  boxes[Pattern[1]].innerText ;
             let pos3val =  boxes[Pattern[2]].innerText ;

             if( pos1val != "" && pos2val != "" && pos3val != ""){
              if (pos1val === pos2val && pos2val === pos3val){
                ShowWinner(pos1val);
              }
             }
        
    }
 };

 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click",resetGame); 

 let magicbtn = document.querySelector('#magicbtn');
 let mode = "light";
  magicbtn.addEventListener('click',() =>{
 if(mode === "light"){
    document.querySelector("body").style.backgroundColor = " gray";
    mode = 'dark'
 } else{
    mode = "light"
    document.querySelector("body").style.backgroundColor = " #010113"
 
 }
 
})