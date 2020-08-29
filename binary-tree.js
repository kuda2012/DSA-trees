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
    if (this.root == null) {
      return 0;
    }
    let startingNode = this.root;
    let smallestNodeDepthVal;
    smallestDepth(startingNode);
    function smallestDepth(Node, endDepth = 1) {
      if (!Node.left && !Node.right) {
        if (!smallestNodeDepthVal) {
          smallestNodeDepthVal = endDepth;
        } else if (endDepth < smallestNodeDepthVal) {
          smallestNodeDepthVal = endDepth;
        }
      }
      if (Node.right && Node.left) {
        endDepth += 1;
        smallestDepth(Node.right, endDepth);
        smallestDepth(Node.left, endDepth);
      } else if (Node.right && !Node.left) {
        endDepth += 1;
        smallestDepth(Node.right, endDepth);
      } else if (Node.left && !Node.right) {
        endDepth += 1;
        smallestDepth(Node.left, endDepth);
      }
    }
    return smallestNodeDepthVal;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root == null) {
      return 0;
    }
    let startingNode = this.root;
    let biggestNodeDepthVal;
    largestDepth(startingNode);
    function largestDepth(Node, endDepth = 1) {
      if (!Node.left && !Node.right) {
        if (!biggestNodeDepthVal) {
          biggestNodeDepthVal = endDepth;
        } else if (endDepth > biggestNodeDepthVal) {
          biggestNodeDepthVal = endDepth;
        }
      }

      if (Node.right && Node.left) {
        endDepth += 1;
        largestDepth(Node.right, endDepth);
        largestDepth(Node.left, endDepth);
      } else if (Node.right && !Node.left) {
        endDepth += 1;
        largestDepth(Node.right, endDepth);
      } else if (Node.left && !Node.right) {
        endDepth += 1;
        largestDepth(Node.left, endDepth);
      }
    }
    return biggestNodeDepthVal;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root == null) {
      return null;
    }
    let startingNode = this.root;
    let nextLargestValue;
    slightyLarger(startingNode);
    function slightyLarger(Node) {
      if (startingNode.val > lowerBound && !nextLargestValue) {
        nextLargestValue = startingNode.val;
      }
      if (!Node.left && !Node.right) {
        if (Node.val > lowerBound && !nextLargestValue) {
          nextLargestValue = Node.val;
        } else if (Node.val < nextLargestValue && Node.val > lowerBound) {
          nextLargestValue = Node.val;
        }
      }

      if (Node.right && Node.left) {
        if (Node.val > lowerBound && !nextLargestValue) {
          nextLargestValue = Node.val;
        } else if (Node.val < nextLargestValue && Node.val > lowerBound) {
          nextLargestValue = Node.val;
        }
        slightyLarger(Node.right);
        slightyLarger(Node.left);
      } else if (Node.right && !Node.left) {
        if (Node.val > lowerBound && !nextLargestValue) {
          nextLargestValue = Node.val;
        } else if (Node.val < nextLargestValue && Node.val > lowerBound) {
          nextLargestValue = Node.val;
        }
        slightyLarger(Node.right);
      } else if (Node.left && !Node.right) {
        if (Node.val > lowerBound && !nextLargestValue) {
          nextLargestValue = Node.val;
        } else if (Node.val < nextLargestValue && Node.val > lowerBound) {
          nextLargestValue = Node.val;
        }
        slightyLarger(Node.left);
      }
    }
    if (!nextLargestValue) {
      return null;
    } else {
      return nextLargestValue;
    }
  }
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

module.exports = { BinaryTree, BinaryTreeNode };
