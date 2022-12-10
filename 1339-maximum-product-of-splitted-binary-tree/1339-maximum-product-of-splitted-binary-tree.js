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
var sumTree = (root) => {
    if(!root.left && !root.right) return root.val
    if(root.left) root.val += sumTree(root.left)
    if(root.right) root.val += sumTree(root.right)
    return root.val
}

var maxProduct = function(root) {
    var c = root
    var treeSum = sumTree(root)
    return calc(c,c)%(10**9+7)
};
var calc = (root, c) => {
    var left = 0
    var right = 0
    if(!root.left && !root.right) return root.val*(c.val-root.val)
    if(root.left){
        var s = root.val*(c.val-root.val)
         left = calc(root.left, c)
         if(s > left) left = s
    }
    if(root.right){
        var s = root.val*(c.val-root.val)
         right = calc(root.right, c)
         if(s > right) right = s
    }
    return (left > right ? left : right)
}