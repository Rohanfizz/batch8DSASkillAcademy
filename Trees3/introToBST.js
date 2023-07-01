var TreeNode = /** @class */ (function () {
    function TreeNode(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
function constructTree(arr, l, r) {
    if (l > r) {
        //invalid range
        return null;
    }
    var mid = Math.floor((l + r) / 2);
    var nn = new TreeNode(arr[mid]);
    nn.left = constructTree(arr, l, mid - 1);
    nn.right = constructTree(arr, mid + 1, r);
    return nn;
}
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
function findVal(root, target) {
    var temp = root;
    while (temp != null) {
        if (temp.val == target)
            return true;
        else if (target < temp.val)
            temp = temp.left;
        else
            temp = temp.right;
    }
    return false;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var root = constructTree(arr, 0, arr.length - 1);
// displayTree(root);
console.log(findVal(root, 45));
