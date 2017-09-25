
// Iterate row by row. If the current cell has not been touched
//      if it is a 1, then dfs on it counting all neighbors
//      else mark as seen and move to next

function countRegion(grid, seen, i, j) {
    var count = 0;
    if (grid[i] && typeof grid[i][j] !== 'undefined') {
        //console.log(`grid[${i}][${j}] ${grid[i][j]} ${seen[i][j]} --- ${seen[i]}`);
        if (grid[i][j] && !seen[i][j]) {
            count++;
            seen[i][j] = true; 
            
            count += countRegion(grid, seen, i-1, j-1); //NW
            count += countRegion(grid, seen, i-1, j); // N
            count += countRegion(grid, seen, i-1, j+1); //NE
            count += countRegion(grid, seen, i, j-1); // W
            count += countRegion(grid, seen, i, j+1); // E
            count += countRegion(grid, seen, i+1, j-1);// SW
            count += countRegion(grid, seen, i+1, j); // S
            count += countRegion(grid, seen, i+1, j+1); //SE
        } else {
            seen[i][j] = true; 
        }
    }
    return count;
}

function main() {
    var n = parseInt(readLine()); //row
    var m = parseInt(readLine()); //column
    var grid = [];
    for(grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine().split(' ');
       grid[grid_i] = grid[grid_i].map(Number);
    }
    
    var seen = [];
    var row = [];
    for (var i = 0; i < m; i++) {
        row.push(false);
    }
    for (var i = 0; i < n; i++) {
        seen.push(row.slice());
    }
   
    regionCounts = [];
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            var count = countRegion(grid, seen, i, j);
            regionCounts.push(count);
        }
    }
    
    var max = Math.max.apply(null, regionCounts);
    console.log(max);
}