/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    for(var i = 1; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            var left = 2**31
            var top = 2**31
            var right = 2**31
            if(j > 0) left = matrix[i-1][j-1]
            var top = matrix[i-1][j]
            if(j < matrix[0].length-1) right = matrix[i-1][j+1]
            matrix[i][j] += Math.min(left,top,right)
        }
    }
    matrix[matrix.length-1].sort((a,b) => a-b)
    return matrix[matrix.length-1][0]
};