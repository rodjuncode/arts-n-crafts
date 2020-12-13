let gridCols = 4;
let gridRows = 4;
let gridCellWidth, gridCellHeight;
let puzzle;
let palette;
let bgColor;
let gridColor;
let emptyColor;
let tintColor;

function preload() {
    art = loadImage('assets/milho.png');
}

function setup() {
    createCanvas(1000,1000);
    palette = [color("#77D48A"),color("#F85E58"),color("#3562E8"),color("#F8C552")];
    gridCellWidth = floor(width/gridCols);
    gridCellHeight = floor(height/gridRows);
    puzzle = new Puzzle(art,width,height,gridCols,gridRows);
    puzzle.shuffle();    

    bgColor = palette.splice(floor(random(palette.length)),1)[0];
    gridColor = palette.splice(floor(random(palette.length)),1)[0];
    emptyColor = palette.splice(floor(random(palette.length)),1)[0];
    tintColor = palette.splice(floor(random(palette.length)),1)[0];

}

function draw() {
    background(bgColor);

    stroke(gridColor);
    strokeWeight(0.5);
    noFill();
    puzzle.show();



    for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
            // image(art, i*gridCellWidth, j*gridCellHeight, 
            //     gridCellWidth, gridCellHeight, 
            //     i*gridCellWidth, j*gridCellHeight, 
            //     gridCellWidth, gridCellHeight);            
            rect(i*gridCellWidth,j*gridCellHeight,gridCellWidth,gridCellHeight);        
        }
    }


}

function mouseClicked() {

    puzzle.click(mouseX,mouseY);
    let a= 0;

//    shuffle(puzzle.tiles,true);
}