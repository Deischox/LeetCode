/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root, min = 2**31, max = 0) {
    var left = 0
    var right = 0
    if(root.val < min) min = root.val
    if(root.val > max) max = root.val
    if(!root.left && !root.right) return Math.abs(min-max)
    if(root.left) left = maxAncestorDiff(root.left, min, max)
    if(root.right) right = maxAncestorDiff(root.right, min, max)
    if(left > right) return left
    else return right 

};