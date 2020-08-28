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
    let toVisitStack = [this][0].root.children;
    let total = recurseSumValues(toVisitStack, this.root.val);
    function recurseSumValues(stack, sum) {
      if (stack.length) {
        let current = stack.shift();
        sum += current.val;
        if (current.children.length > 0) {
          for (let child of current.children) {
            stack.push(child);
          }
        }
        return recurseSumValues(stack, sum);
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
    let toVisitStack = [this][0].root.children;
    console.log(this.root, toVisitStack);
    let isRootEven = this.root.val % 2 == 0 ? 1 : 0;
    let total = recurseCountEvenValues(toVisitStack, isRootEven);
    function recurseCountEvenValues(stack, sum) {
      if (stack.length) {
        let current = stack.shift();
        if (current.val % 2 == 0) sum += 1;
        if (current.children.length > 0) {
          for (let child of current.children) {
            stack.push(child);
          }
        }
        return recurseCountEvenValues(stack, sum);
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
    let toVisitStack = [this][0].root.children;
    let isRootGreater = this.root.val > lowerBound ? 1 : 0;
    let total = recurseCountGreaterThans(toVisitStack, isRootGreater);
    function recurseCountGreaterThans(stack, sum) {
      let copyStack = stack;
      if (stack.length) {
        let current = stack.shift();
        sum += current.val > lowerBound ? 1 : 0;
        if (current.children.length > 0) {
          for (let child of current.children) {
            stack.push(child);
          }
        }
        return recurseCountGreaterThans(stack, sum);
      }
      return sum;
    }

    return total;
  }
}

let numberTree = new Tree(
  new TreeNode(1, [
    new TreeNode(2),
    new TreeNode(3),
    new TreeNode(4),
    new TreeNode(5, [
      new TreeNode(6),
      new TreeNode(7),
      new TreeNode(8),
      new TreeNode(9),
      new TreeNode(10),
    ]),
  ])
);
// let n = new TreeNode(1);
// let n2 = new TreeNode(2);
// let n3 = new TreeNode(3);
// let n4 = new TreeNode(4);
// let n5 = new TreeNode(5);
// let n6 = new TreeNode(6);
// let n7 = new TreeNode(7);
// let n8 = new TreeNode(8);

// n.children = [n2, n3, n4];

// n4.children.push(n5, n6);
// n6.children.push(n7);
// n7.children.push(n8);

// largeTree = new Tree(n);
module.exports = { Tree, TreeNode };
