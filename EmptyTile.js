function EmptyTile(puzzle,x,y) {
    this.puzzle = puzzle;
    this.x = x;
    this.y = y;

    this.show = function() {
        push();
        fill(255,0,0);
        noStroke();
        rect(0,0,this.puzzle.tileWidth,this.puzzle.tileHeight);
        pop();
    }


}