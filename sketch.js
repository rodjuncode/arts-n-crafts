let gridCols = 4;
let gridRows = 4;
let gridCellWidth, gridCellHeight;
let puzzle;
let palette;
let bgColor, gridColor, emptyColor, tintColor, puzzleColor;

function preload() {
    art = loadImage('assets/milho.png');
}

function setup() {
    createCanvas(500,707);

    let p1 = [color("#77D48A"),color("#F85E58"),color("#3562E8"),color("#F8C552")];
    let p2 = [color("#D0506A"),color("#60532D"),color("#D83B32"),color("#F8883E")];
    let p3 = [color("#3562E8"),color("#9AA026"),color("#D83B32"),color("#F8C552")];
    let p4 = [color("#236390"),color("#77D48A"),color("#C09A86"),color("#F8C552")];            
    palette = p2;
    bgColor = palette.splice(floor(random(palette.length)),1)[0];
    gridColor = palette.splice(floor(random(palette.length)),1)[0];
    emptyColor = palette.splice(floor(random(palette.length)),1)[0];
    puzzleColor = palette.splice(floor(random(palette.length)),1)[0];
    
    puzzle = new Puzzle(art,30,207,440,440,gridCols,gridRows,bgColor,gridColor);
    puzzle.shuffle();    


}

function draw() {
    background(bgColor);

    puzzle.show();

}

function mouseClicked() {

    puzzle.click(mouseX,mouseY);
    let a= 0;

//    shuffle(puzzle.tiles,true);
}