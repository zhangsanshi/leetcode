/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {

    return JSON.stringify(p) === JSON.stringify(q);
};


///**
// * Definition for binary tree
// * function TreeNode(val) {
// *     this.val = val;
// *     this.left = this.right = null;
// * }
// */
//TreeNode.prototype.toString = function () {
//    return JSON.stringify(this);
//};
///**
// * @param {TreeNode} p
// * @param {TreeNode} q
// * @returns {boolean}
// */
//var isSameTree = function(p, q) {
//    if ((p && !q) || (!p &&q)) {
//        return false;
//    } else if (!p && !q) {
//        return true;
//    }
//    return p.toString() === q.toString();
//};