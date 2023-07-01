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
function dfs(node, target) {
    if (node == null)
        return [];
    if (node.val == target)
        return [node.val];
    var leftAns = dfs(node.left, target);
    if (leftAns.length > 0) {
        leftAns.push(node.val);
        return leftAns;
    }
    var rightAns = dfs(node.right, target);
    if (rightAns.length > 0) {
        rightAns.push(node.val);
        return rightAns;
    }
    return [];
}
var ntrp = dfs(root, 13);
console.log(ntrp);
