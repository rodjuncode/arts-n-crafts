let gridCols = 4;
let gridRows = 4;
let gridCellWidth, gridCellHeight;
let puzzle;

function preload() {
    art = loadImage('assets/milho.png');
}

function setup() {
    createCanvas(1000,1000);
    gridCellWidth = floor(width/gridCols);
    gridCellHeight = floor(height/gridRows);
    puzzle = new Puzzle(art,width,height,gridCols,gridRows);
    puzzle.shuffle();    
}

function draw() {
    background(200);

    stroke(255,0,255);
    strokeWeight(0.2);
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