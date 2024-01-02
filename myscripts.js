
let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGmeBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxs();
  msgContainer.classList.add("hide");
};

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "o";
            box.style.color = "blue";
            turnO = false;
        } else {
            box.innerText = "x";
            turnO = true;
            box.style.color = "red"; 
        }
        box.disabled = true;
        
        checkWinner ();
    });
});

const disabledBoxs = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
};

const enableBoxs = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxs();
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val !="" && pos3Val !="") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
           console.log("winner", pos1Val);
           showWinner(pos1Val);
         }
        }
    }
};

newGmeBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


