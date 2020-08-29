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
    if (this.root == null) {
      return 0;
    }
    let toVisitNode = this.root.children;
    let total = recurseSumValues(toVisitNode, this.root.val);
    function recurseSumValues(node, sum) {
      for (let child of node) {
        sum += child.val;
        if (child.children.length > 0) {
          return recurseSumValues(child.children, sum);
        }
      }
      return sum;
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root == null) {
      return 0;
    }
    let toVisitNode = this.root.children;
    let isRootEven = this.root.val % 2 == 0 ? 1 : 0;
    let total = recurseCountEvenValues(toVisitNode, isRootEven);
    function recurseCountEvenValues(node, sum) {
      for (let child of node) {
        sum += child.val % 2 == 0 ? 1 : 0;
        if (child.children.length > 0) {
          return recurseCountEvenValues(child.children, sum);
        }
      }
      return sum;
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root == null) {
      return 0;
    }
    let toVisitNode = this.root.children;
    let isRootGreater = this.root.val > lowerBound ? 1 : 0;
    let total = recurseCountGreaterThans(toVisitNode, isRootGreater);
    function recurseCountGreaterThans(node, sum) {
      for (let child of node) {
        sum += child.val > lowerBound ? 1 : 0;
        if (child.children.length > 0) {
          return recurseCountGreaterThans(child.children, sum);
        }
      }
      return sum;
    }

    return total;
  }
}

module.exports = { Tree, TreeNode };
