/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0; // if tree is empty sum is 0

    let total = this.root.val; // start with root node val

    function sumHelper(node) {
      // traverse through nodes
      for (let child of node.children) {
        total += child.val; // add each childs val to total
        sumHelper(child) // sum the childs children
      }

    }
    sumHelper(this.root); // start traveresal from root
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0; // if tree is empty sum is 0

    let count = this.root.val % 2 === 0 ? 1 : 0; // start wiht root node

    function countHelper(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;
        countHelper(child);
      }
    }
    countHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0; // if tree is empty sum is 0

    let count = this.root.val > lowerBound ? 1 : 0;

    function countHelper(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;
        countHelper(child)
      }
    }
    countHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
