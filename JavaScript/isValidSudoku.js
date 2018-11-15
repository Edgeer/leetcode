/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let cube = [];
    for (var i = 0; i < board.length; i++){
        cube[i] = [];
    }
    for (let i = 0; i < board.length; i++){
        let row = [];
        let col = [];
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] !== '.'){
                row.push(board[i][j]);
                cube[Math.floor(j/3)+(Math.floor(i/3)*3)].push(board[i][j]);
            }
            if(board[j][i] !== '.')col.push(board[j][i]);
        }
        let set1 = new Set(row);
        let set2 = new Set(col);
        if(set1.size !== row.length || set2.size !== col.length) return false;
    }
    for (var i = 0; i < board.length; i++){
        let set = new Set(cube[i]);
        if(set.size !== cube[i].length)return false;
    }
    return true;
};
var arr = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["1",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
console.log(isValidSudoku(arr));