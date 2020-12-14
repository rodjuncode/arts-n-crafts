let gridCols = 10;
let gridRows = 10;
let gridCellWidth, gridCellHeight;
let puzzle;
let puzzleSize = 520;
let palette;
let bgColor, gridColor, emptyColor, tintColor, puzzleColor;

const ORNAMENTS = 1;
const FULL_IMAGE = 2;
const PUZZLE = 3;

let state = ORNAMENTS;

function preload() {
    art = loadImage('assets/milho.png');
    ornament = loadImage('assets/ornamento.png');
}

function setup() {
    createCanvas(600,850);

    let p1 = [color("#77D48A"),color("#F85E58"),color("#3562E8"),color("#F8C552")];
    let p2 = [color("#D0506A"),color("#60532D"),color("#D83B32"),color("#F8883E")];
    let p3 = [color("#3562E8"),color("#9AA026"),color("#D83B32"),color("#F8C552")];
    let p4 = [color("#236390"),color("#77D48A"),color("#C09A86"),color("#F8C552")];            
    palette = p4;
    bgColor = palette.splice(floor(random(palette.length)),1)[0];
    bgColor = color(255);
    gridColor = palette.splice(floor(random(palette.length)),1)[0];
    emptyColor = palette.splice(floor(random(palette.length)),1)[0];
    puzzleColor = palette.splice(floor(random(palette.length)),1)[0];
    
    puzzle = new Puzzle(art,(width-puzzleSize)/2,height-((width-puzzleSize)/2)-puzzleSize,puzzleSize,puzzleSize,4,4,bgColor,null);
    puzzle.shuffle();    


}

function draw() {
    background(bgColor);

    if (state == ORNAMENTS) {
        let gridWidth = floor(puzzleSize/gridCols);
        let gridHeight = floor(puzzleSize/gridRows);

        push();
        translate((width-puzzleSize)/2,height-((width-puzzleSize)/2)-puzzleSize);
        imageMode(CENTER);
        let k = 0;
        for (let i = 0; i < gridCols; i++) {
            for (let j = 0; j < gridRows; j++) {
                push();
                translate(j*gridWidth+gridWidth/2,i*gridHeight+gridHeight/2);
                rotate(radians((k%4)*90));
                // if (i%2 != 0) scale(-1,1);;
                // if (j%2 != 0) scale(1,-1);
                image(ornament,0,0,gridWidth,gridHeight);
                pop();
                k++;
            }
        }
        pop();
    } else if (state == FULL_IMAGE) {
        image(puzzle.art,(width-puzzleSize)/2,height-((width-puzzleSize)/2)-puzzleSize);
    } else if (state == PUZZLE) {
        puzzle.show();
    }



}

function mouseClicked() {
    if (state == ORNAMENTS || state == FULL_IMAGE) {
        state++;
    }
    if (state == PUZZLE) {
        puzzle.click(mouseX,mouseY);
    }
}