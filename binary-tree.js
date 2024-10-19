/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function depthHelper(node) {
      // if leaf node, return 1
      if (!node.left && !node.right) return 1;

      //if one of the children is missing, only include the existing child
      if (!node.left) return 1 + depthHelper(node.right);
      if (!node.right) return 1 + depthHelper(node.left);

      // if both children exist, take the minimum of the two depths
      return 1 + Math.min(depthHelper(node.left), depthHelper(node.right));
    }
    return depthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function depthHelper(node) {
      if (!node.left && !node.right) return 1;

      //if one of the children is missing, only include the existing child
      if (!node.left) return 1 + depthHelper(node.right);
      if (!node.right) return 1 + depthHelper(node.left);

      // if both children exist, take the maximum of the two depths
      return 1 + Math.max(depthHelper(node.left), depthHelper(node.right));
    }
    return depthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;

    let result = -Infinity; // initialize smallest number

    function maxSumHelper(node) {
      if (node === null) return 0; // if we reach a node that is null add 0

      const leftSum = maxSumHelper(node.left); // max sum for left subtree
      const rightSum = maxSumHelper(node.right); // max sum for right subtree

      // update result with max sum that includes current node + both subtrees /\/\
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, node.val + Math.max(leftSum, rightSum));
    }
    maxSumHelper(this.root);
    return result;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let result = null;

    function nextLargerhelper(node) {
      if (!node) return;

      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val
        }
      }
      nextLargerhelper(node.left);
      nextLargerhelper(node.right);
    }
    nextLargerhelper(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
