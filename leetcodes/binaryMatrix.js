// breadth-first search (BFS) algorithm
// 1091. Shortest Path in Binary Matrix
// https://leetcode.com/problems/shortest-path-in-binary-matrix/

//

function shortestPathBinaryMatrix(grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1; // No clear path
  }

  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
    [1, 1], // diagonal down-right
    [-1, -1], // diagonal up-left
    [1, -1], // diagonal down-left
    [-1, 1], // diagonal up-right
  ];

  const queue = [[0, 0, 1]]; // [row, column, pathLength]
  grid[0][0] = 1; // Mark the start cell as visited

  while (queue.length > 0) {
    const [row, col, pathLength] = queue.shift();

    if (row === n - 1 && col === n - 1) {
      return pathLength; // Reached the bottom-right cell
    }

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < n &&
        grid[newRow][newCol] === 0
      ) {
        queue.push([newRow, newCol, pathLength + 1]);
        grid[newRow][newCol] = 1; // Mark the cell as visited
      }
    }
  }

  return -1; // No clear path found
}
