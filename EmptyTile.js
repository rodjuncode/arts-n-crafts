function EmptyTile(puzzle,x,y) {
    this.puzzle = puzzle;
    this.x = x;
    this.y = y;

    this.show = function() {
        push();
        // fill(emptyColor);
        // noStroke();
        // rect(0,0,this.puzzle.tileWidth,this.puzzle.tileHeight);
        // fill(0);
        // textSize(12);
        // text("Sesc Pompeia\nR. Clélia, 93\nSão Paulo /\nde 15 de janeiro\na 15 de julho\ndas 9h às 20h",10,10,this.puzzle.tileWidth,this.puzzle.tileHeight);        
        image(info,0,0);
        pop();
    }


}