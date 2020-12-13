function Puzzle(art,w,h,c,r) {
    this.art = art;
    this.width = w;
    this.height = h;
    this.cols = c;
    this.rows = r;
    this.tiles = [];
    this.tileWidth = floor(this.width/this.cols);
    this.tileHeight = floor(this.height/this.rows);

    let emptyI = floor(random(this.cols));
    let emptyJ = floor(random(this.rows));

    let k = 0;
    for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
            if (i == emptyI && j == emptyJ) {
                let emptyTile = new EmptyTile(this,j,i);
                this.tiles.push(emptyTile);
                this.emptyTileIndex = k;
                continue;
            }
            this.tiles.push(new Tile(this,j,i));
            k++;
        }
    }

    this.show = function() {
        for (let i = 0; i < this.tiles.length; i++) {
            push();
            translate((i%this.cols)*this.tileWidth,floor(i/this.rows)*this.tileHeight);
            this.tiles[i].show();
            pop();
        }
    }

    this.click = function(x,y) {
        let adjacentTiles = [];
        if (this.emptyTileIndex % this.cols > 0) {
            adjacentTiles.push(this.emptyTileIndex-1);
        }
        if (this.emptyTileIndex >= this.cols) {
            adjacentTiles.push(this.emptyTileIndex-this.cols);
        }
        if (this.emptyTileIndex % this.cols < this.cols - 1) {
            adjacentTiles.push(this.emptyTileIndex+1);
        }        
        if (this.emptyTileIndex <= this.tiles.length-1-this.cols) {
            adjacentTiles.push(this.emptyTileIndex+this.cols);
        }                
       for (let i = 0; i < adjacentTiles.length; i++) {
            let tilePosition = this.getTilePosition(adjacentTiles[i]);
            if ((x >= tilePosition.x && x <= tilePosition.x + this.tileWidth) &&
                (y >= tilePosition.y && y <= tilePosition.y + this.tileHeight)) {
                console.log("clicked");
                    let emptyTile  = this.tiles[this.emptyTileIndex];
                    let filledTile = this.tiles[adjacentTiles[i]];  
                    this.tiles[adjacentTiles[i]] = emptyTile;
                    this.tiles[this.emptyTileIndex] = filledTile;
                    this.emptyTileIndex = adjacentTiles[i];
                    break;
            }
        }
    }    

    this.getTilePosition = function(i) {
        return createVector((i%this.cols)*this.tileWidth,floor(i/this.rows)*this.tileHeight);
    }

    this.getTile = function(x,y) { 
        for (let i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].x == x && this.tiles[i].y == y) {
                return this.tiles[i];
            }
        }

    }

    this.shuffle = function() {
        shuffle(this.tiles,true);
        for (let i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i] instanceof EmptyTile) {
                this.emptyTileIndex = i;
                break;
            }
        }
    }
   

}