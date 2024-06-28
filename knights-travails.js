
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

}