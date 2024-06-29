
function isValid(x, y) {
   if(x >= 0 && x < 8 && y >= 0 && y < 8) {
       return {x, y};
   }else {
      return null;
   }
}

function getKnightMoves(x, y) {
   const moves = [
       [x + 2, y + 1], [x + 2, y - 1],
       [x - 2, y + 1], [x - 2, y - 1],
       [x + 1, y + 2], [x + 1, y - 2],
       [x - 1, y + 2], [x - 1, y - 2]
   ];
   return moves.filter(([nx, ny]) => isValid(nx, ny));
}

function knightMoves(start, target) {
   const queue = [[start, [start]]];
   const visited = new Set([start.toString()]);

   while (queue.length > 0) {
      const [currentPosition, path] = queue.shift();
      const [cx, cy] = currentPosition;

      if (cx === target[0] && cy === target[1]) {
          return path;
      }

      for (const [nx, ny] of getKnightMoves(cx, cy)) {
          const nextPosition = [nx, ny];
          if (!visited.has(nextPosition.toString())) {
              visited.add(nextPosition.toString());
              queue.push([nextPosition, path.concat([nextPosition])]);
          }
      }
  }
};

const path = knightMoves([3, 3], [4,3]);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach(step => console.log(step));
