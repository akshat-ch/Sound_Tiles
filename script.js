const button = document.querySelector(".btn");
const input = document.querySelector("#numberInput");
const grid = document.querySelector(".grid");

const r = document.querySelector(":root");

button.addEventListener("click", setNumberOfBlocks);

function getBlocksNumber() {
    return input.value;
}

function rand(input) {
    let i = 0;
    if (input != 7) {
        i = input;
    }
    let rnum = Math.floor(Math.random() * (8-i)) + i;
    return rnum;
}

function audioPlay(input){
    let audio = new Audio('Sounds/track-' + input + '.wav');
    audio.play();
}

function audioPause(input) {
    let audio = new Audio('Sounds/track-' + input + '.wav');
    audio.pause();
}

function setNumberOfBlocks() {
    clearGrid();      //clears the full grid layout each time button is pressed.

    let Input = getBlocksNumber();
    let gridSize = Math.pow(Input, 2);

    r.style.setProperty("--numberOfBlocks", Input);

    for (let index = 1; index <= gridSize; index++) {
        let block = document.createElement("div");
        block.classList.add("gridBlock");
        block.addEventListener("mouseenter", function(){
      // generate random color then change it for each tile hover
      // colorHash is string type
    var colorHash = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log("Hash value generated: " + colorHash);
    block.style.backgroundColor = colorHash;
    let trackNum = rand(0);
    audioPlay(trackNum);
    trackNum = rand(trackNum);
    //   block.addEventListener(randAu);
        })
        // block.addEventListener("mouseleave", function(){
        //     this.classList.add("clear");
        // })
        grid.appendChild(block);
    }
}

function clearGrid() {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}


