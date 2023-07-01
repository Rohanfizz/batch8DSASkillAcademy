var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
function displayTree(currNode) {
    if (currNode == null)
        return;
    var s = "";
    s += currNode.val + ": ";
    if (currNode.left != null)
        s += currNode.left.val + ", ";
    else
        s += -1 + ", ";
    if (currNode.right != null)
        s += currNode.right.val;
    else
        s += -1;
    console.log(s);
    displayTree(currNode.left);
    displayTree(currNode.right);
}
function generateTree(tree) {
    if (tree[idx] == -1) {
        idx++;
        return null;
    }
    var nn = new TreeNode(tree[idx]);
    idx++;
    nn.left = generateTree(tree);
    nn.right = generateTree(tree);
    return nn;
}
var tree = [5, 10, 3, 13, -1, -1, 6, -1, -1, -1, 2, 7, -1, 8, 11, -1, -1, -1, 4, 6, -1, -1, -1];
var idx = 0;
var root = generateTree(tree);
// console.log(root.val);
// displayTree(root);
function size(node) {
    if (node == null)
        return 0;
    var leftSize = size(node.left);
    var rightSize = size(node.right);
    return leftSize + 1 + rightSize;
}
console.log(size(root));
