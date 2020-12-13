function Tile(puzzle,x,y) {
    this.puzzle = puzzle;
    this.x = x;
    this.y = y;

    this.show = function() {
        image(this.puzzle.art, 0, 0, 
            this.puzzle.tileWidth, this.puzzle.tileHeight, 
            this.puzzle.tileWidth*this.x, this.puzzle.tileHeight*this.y, 
            this.puzzle.tileWidth, this.puzzle.tileHeight);            
    }

}