//二叉树相关算法
function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
/**
 * 
 * @param {array} arr 
 * @param {TreeNode} node 
 * @param {number} index 
 */
function bulidTree(arr,node,index){
    var left = 2*index+1;
    var right = 2*index+2;
    if(left < arr.length && arr[left] !== null){
        var childNode = new TreeNode(arr[left]);
        node.left = childNode;
        bulidTree(arr,childNode,left);
    }
    if(right < arr.length && arr[right] !== null){
        var childNode = new TreeNode(arr[right]);
        node.right = childNode;
        bulidTree(arr,childNode,right);
    }
}
/**
 * 
 * @param {TreeNode} root 
 */
function firstIteration(root) {
    console.log(root.val);
    if(root.left) {          //判断当前节点是否有左孩子
      firstIteration(root.left);  //递归左孩子
    }
    if(root.right) {         //判断当前节点是否有右孩子
      firstIteration(root.right);  //递归右孩子
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var leftDepth = 1,rightDepth = 1;
    if(root == null){
        return 0;
    }
    if(root.left !== null){
        leftDepth = maxDepth(root.left);
        leftDepth += 1;
    }
    if(root.right !== null){
        rightDepth = maxDepth(root.right);
        rightDepth += 1;
    }
    return leftDepth>rightDepth?leftDepth:rightDepth;
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var max = Math.pow(2,31),min = -Math.pow(2,31)-1;
    return isBST(root,min,max);
};
var isBST = function(root,min,max) {
    if(root === null){
        return true;
    }
    if(root.val >= max || root.val <= min){
        return false;
    }
    return isBST(root.left,min,root.val)&&isBST(root.right,root.val,max);
};
var max = Math.pow(2,31)-1,min = -Math.pow(2,31);
var arr = [10,5,15,null,null,11,20];
var root = new TreeNode(10);
bulidTree(arr,root,0);
firstIteration(root);
// console.log(maxDepth(node));
 console.log(isValidBST(root));
// console.log(min);