// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
let finalDist = 0;
function minimumDistance(numRows, numColumns, area)
{
    // WRITE YOUR CODE HERE
    let visited = [];
    for(let i = 0; i<numRows; i++) {
        for(j=0; j<numColumns; j++) {
            if(!visited[i]){
                visited[i] = [];
            }
            visited[i][j] = false;
        }
    }


    if(calculateFinalDistance(numRows, numColumns, area, visited, 0, 0, 0)) {
        return finalDist;
    } else {
        return -1;
    }


}

function calculateFinalDistance(numRows, numColumns, area, visited, currentRow, currentColumn, distance) {
    if(currentRow < 0 || currentColumn <0 || currentRow >= numRows || currentColumn >= numColumns) {
        return false;
    }

    if(visited[currentRow][currentColumn]) {
        return false;
    }
    if(area[currentRow][currentColumn] === 0){
        return false;
    }
    if(area[currentRow][currentColumn] === 9){
        return true;
    }
    distance++;
    visited[currentRow][currentColumn] = true;
    if(calculateFinalDistance(numRows, numColumns, area, visited, currentRow++, currentColumn, distance)
    || calculateFinalDistance(numRows, numColumns, area, visited, currentRow--, currentColumn, distance)
    || calculateFinalDistance(numRows, numColumns, area, visited, currentRow, currentColumn++, distance)
    || calculateFinalDistance(numRows, numColumns, area, visited, currentRow, currentColumn--, distance)
    ) {
        if(finalDist === 0){
            finalDist = distance;
        }
        return true;
    } else {
        return false;
    }

}



// FUNCTION SIGNATURE ENDS
