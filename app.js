let boxes=document.querySelectorAll(".box");
let winner=document.querySelector("#winner");
let showbox=document.querySelector(".showbox");
let resetBtn=document.querySelector(".reset-btn");
let newbtn=document.querySelector("#new-btn");

let turn0=true;
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let count=0;
// let draw=()=>{
//     for(let box of boxes){
//         box.addEventListener("click",()=>{
//             count++;
//         })
//     }
//     if(count==9){
//         console.log("draw");
//     }
// }

const disableBoxes=()=>{
     for(let box of boxes){
        box.disabled=true;
     }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
     }
     count=0;
}

let showWinner=(pos1val)=>{
    winner.innerText=`Winner is ${pos1val}`;
    showbox.classList.remove("hide");
    disableBoxes();
}

let checkWinner=()=>{
    for(pattern of winPatterns){
    //    console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log(`Player ${pos1val} is win`);
                showWinner(pos1val);
                
            }
        }
    }
    if (count === 9) {  
        winner.innerText = "It's a draw!";  
        showbox.classList.remove("hide");  
        console.log("draw");
    }  
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    })
})

resetBtn.addEventListener("click",()=>{
    enableBoxes();
    showbox.classList.add("hide");

})

newbtn.addEventListener("click",()=>{
    enableBoxes();
    showbox.classList.add("hide");

})


    


