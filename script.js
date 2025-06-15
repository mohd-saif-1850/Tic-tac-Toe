let startBtn = document.querySelector("#startBtn");
let start = document.querySelector(".start");

let container = document.querySelector(".container");
let game = document.querySelector(".game");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let result= document.querySelector(".result");
let resultText = document.querySelector(".result-text");
let winner = document.querySelector(".winner");
let playAgain = document.querySelector("#playAgain");


result.style.display = "none";
container.style.display = "none";

const winPatt= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check for a winner
function checkWinner() {
   for(let i =0; i<8;i++){
        let a = boxes[winPatt[i][0]].innerText;
        let b = boxes[winPatt[i][1]].innerText;
        let c = boxes[winPatt[i][2]].innerText;

        if( a===b && b===c && c!==""){
            container.style.display = "none";
            result.style.display = "block";
            start.style.display = "none";
            result.style.display = "flex";
            winner.innerText = `${a}`;
        }
        else if (Array.from(boxes).every(box => box.innerText !== "")) {
            container.style.display = "none";
            result.style.display = "block";
            start.style.display = "none";
            result.style.display = "flex";
            resultText.innerText = "It's a Draw!";
        }
        
        
   }

   
}




// Reset Button
reset.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = "";
    })
    turnX = true;
    turnO = false;
    container.style.display = "block";
    start.style.display = "none";
    result.style.display = "none";
});




// Start Game Button
startBtn.addEventListener('click', () => {
    start.classList.add("hide");
    container.style.display = "block";
    result.style.display = "none";
    start.style.display = "none";
});

// Play Again Button
playAgain.addEventListener('click', () => {
    container.style.display = "block";
    result.display = "none";
    reset.click();
    winner.innerText = "";
});


// X and O Logic
let turnX= true;
let turnO = false;
boxes.forEach((box) => {
        box.addEventListener('click', ()=>{
            if (box.innerHTML === "") {
                if(turnX){
                    box.innerText= "X";
                    turnX = false;
                    turnO = true;
                }
                else{
                    box.innerText= "O";
                    turnX = true;
                    turnO = false;
                }
            }
            checkWinner();
            reset();
        })

});



