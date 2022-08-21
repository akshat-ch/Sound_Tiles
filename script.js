const button = document.querySelector(".btn");
const input = document.querySelector("#numberInput");
const grid = document.querySelector(".sketch");

const r = document.querySelector(":root");
var index = 7;


button.addEventListener("click", setNumberOfBlocks);
document.addEventListener("keyup", checkInputValidity);
document.addEventListener("onclick", checkInputValidity);

function checkInputValidity() {

    if (input.checkValidity()) {
        button.disabled = false;
        return;
    }
    button.disabled = true;
}

function getBlocksNumber() {
    return input.value;
}

var audio = ["do.wav", "re.wav", "mi.wav", "fa.wav", "la.wav", "si.wav"];

function getRandomAudio() {
    var max = audio.length;
    return Math.floor(Math.random() * (max + 1));
}

function setNumberOfBlocks() {

    clearGrid();

    let usrInput = getBlocksNumber();
    let gridSize = Math.pow(usrInput, 2);
    let randAu= getRandomAudio();

    r.style.setProperty("--numberOfBlocks", usrInput);

    for (let index = 1; index <= gridSize; index++) {
        let block = document.createElement("div");
        block.classList.add("gridBlock");
        block.addEventListener("mouseenter", function(){
      // generate random color then change it for each tile hover
      // colorHash is string type
      var colorHash = "#" + Math.floor(Math.random()*16777215).toString(16);
      console.log("Hash value generated: " + colorHash);
      block.style.backgroundColor = colorHash;
        })
        block.addEventListener("mouseleave", function(){
            this.classList.add("clear");
        })
        grid.appendChild(block);
    }
}

function clearGrid() {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}


