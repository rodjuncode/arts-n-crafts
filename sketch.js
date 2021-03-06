let art, ornament, info, header, footer;
let gridCols = 4;
let gridRows = 4;
let gridCellWidth, gridCellHeight;
let puzzle;
let puzzleSize = 600;
let palette;
let bgColor, gridColor, emptyColor, tintColor, puzzleColor;
let illustrationPos = 140;

let infoIndex;

const ORNAMENTS = 1;
const FULL_IMAGE = 2;
const PUZZLE = 3;

let state = ORNAMENTS;

function preload() {
    art = loadImage('assets/milho.png');
    ornament = loadImage('assets/ornamento.png');
    info = loadImage('assets/info-azul.png');
    header = loadImage('assets/header.png');
    footer = loadImage('assets/realizacao.png');
}

function setup() {
    let c = createCanvas(640,900);
    c.mousePressed(changeState);

    let p1 = [color("#77D48A"),color("#F85E58"),color("#3562E8"),color("#F8C552")];
    let p2 = [color("#D0506A"),color("#60532D"),color("#D83B32"),color("#F8883E")];
    let p3 = [color("#3562E8"),color("#9AA026"),color("#D83B32"),color("#F8C552")];
    let p4 = [color("#236390"),color("#77D48A"),color("#C09A86"),color("#F8C552")];            
    palette = p4;
    bgColor = palette.splice(floor(random(palette.length)),1)[0];
    bgColor = color(255);
    gridColor = palette.splice(floor(random(palette.length)),1)[0];
    emptyColor = palette.splice(floor(random(palette.length)),1)[0];
    puzzleColor = color("#e94929");

    puzzle = new Puzzle(art,(width-puzzleSize)/2,illustrationPos,puzzleSize,puzzleSize,4,4,puzzleColor,null);
    puzzle.shuffle();    

    infoIndex = floor(random(gridCols*gridRows));

    let downloadLink = select(".expo a");
    downloadLink.mousePressed(savePoster);

}

function draw() {
    background(bgColor);

    header.resize(puzzleSize,0);
    image(header,(width-puzzleSize)/2,15);

    if (state == ORNAMENTS) {
        let gridWidth = floor(puzzleSize/gridCols);
        let gridHeight = floor(puzzleSize/gridRows);
        push();
        translate((width-puzzleSize)/2,illustrationPos);
        imageMode(CENTER);
        let k = 0;
        for (let i = 0; i < gridCols; i++) {
            for (let j = 0; j < gridRows; j++) {
                push();
                translate(j*gridWidth+gridWidth/2,i*gridHeight+gridHeight/2);
                if (k == infoIndex) {
                    image(info,0,0,gridWidth,gridHeight);
                } else {
                    if (i%2 != 0) {
                        if (j%2 != 0) {
                            rotate(radians(180));
                        } else {
                            rotate(radians(270));
                        }
                    } else {
                        if (j%2 != 0) {
                            rotate(radians(90));
                        }                    
                    }
                    image(ornament,0,0,gridWidth,gridHeight);
                }
                // if (j%2 != 0) scale(1,-1);
                pop();
                k++;
            }
        }
        pop();
    } else if (state == FULL_IMAGE) {
        let gridWidth = floor(puzzleSize/gridCols);
        let gridHeight = floor(puzzleSize/gridRows);
        push();
        translate((width-puzzleSize)/2+puzzleSize/2,illustrationPos+puzzleSize/2);
        noStroke();
        //fill(puzzleColor);
        rect(-puzzleSize/2,-puzzleSize/2,puzzleSize,puzzleSize);
        imageMode(CENTER);
        let angle = 360;
        for (let l = 0; l < 360; l+=angle) {
            tint(puzzleColor);
            image(puzzle.art,0,0);
            rotate(radians(angle));
        }
        pop();
        push();
        translate((width-puzzleSize)/2,illustrationPos);
        let k = 0;
        for (let i = 0; i < gridCols; i++) {
            for (let j = 0; j < gridRows; j++) {
                if (k == infoIndex) {
                    push();
                    translate(j*gridWidth+gridWidth/2,i*gridHeight+gridHeight/2);                    
                    fill(bgColor);
                    noStroke();
                    rectMode(CENTER);
                    imageMode(CENTER);
                    rect(0,0,gridWidth,gridHeight);
                    image(info,0,0,gridWidth,gridHeight);
                    pop();
                } 
                k++;
            }
        }
        pop();
    } else if (state == PUZZLE) {
        puzzle.show();
    }

    footer.resize(270,0);
    image(footer,25,header.height+puzzleSize+(width-puzzleSize));



}

function changeState() {
    if (state == ORNAMENTS || state == FULL_IMAGE) {
        infoIndex = floor(random(gridCols*gridRows));
        state++;
    }
    if (state == PUZZLE) {
        puzzle.click(mouseX,mouseY);
    }
}

function savePoster() {
    save("arts-crafts-generativo.png");
}