'use strict';

function q3EmptyArea(array) {
    let count = 0;
    function bfs(row, col) {
        if (row < 0 || row >= array.length || col < 0 || col >= array[row].length || array[row][col] === '*') {
            return;
        }
        array[row][col] = '*';
        bfs(row, col - 1);
        bfs(row, col + 1);
        bfs(row - 1, col);
        bfs(row + 1, col);
    }

    array = array.map(element => {
        return element.split('');
    });

    for (let row = 0; row < array.length; row ++) {
        for (let col = 0; col < array[row].length; col++) {
            if (array[row][col] === ' ') {
                count++;
                bfs(row, col);
            }
        }
    }
    return count;
}

module.exports = q3EmptyArea;
