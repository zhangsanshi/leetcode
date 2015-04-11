/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var maxDepth = function(root) {
    var maxDepth = 0,
        subTrees = [root],
        subTree, tmp, left, right, hasTxt;

    while(subTrees.length) {
        tmp = [];
        hasTxt = false;
        for (var i = 0, len = subTrees.length; i < len; i++) {
            subTree = subTrees[i];
            if (subTree) {
                if (subTree.val!==undefined) {
                    hasTxt = true;
                }
                if ((left = subTree.left)) {
                    tmp.push(left);
                }
                if ((right = subTree.right)) {
                    tmp.push(right);
                }
            }
        }
        subTrees = tmp;
        if (hasTxt) {
            maxDepth++;
        }

    }
    return maxDepth;
};