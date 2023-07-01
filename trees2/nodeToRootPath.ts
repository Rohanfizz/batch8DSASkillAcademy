
class TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;
    constructor(value:number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function displayTree(currNode:TreeNode | null) : void{
    if(currNode == null) return;
    let s ="";
    s+= currNode.val +": ";

    if(currNode.left != null) s+=currNode.left.val+", ";
    else s+= -1+", ";

    if(currNode.right  != null) s+=currNode.right.val;
    else s+=-1;

    console.log(s);

    displayTree(currNode.left);
    displayTree(currNode.right);
}

function generateTree(tree:number[]) : TreeNode | null{
    if(tree[idx] == -1){
        idx++;
        return null;
    }
    let nn = new TreeNode(tree[idx]);
    idx++;
    nn.left = generateTree(tree);
    nn.right = generateTree(tree);
    return nn;
}


let tree:number[] = [5,10,3,13,-1,-1,6,-1,-1,-1,2,7,-1,8,11,-1,-1,-1,4,6,-1,-1,-1];

let idx:number = 0;
let root : TreeNode | null = generateTree(tree);

function dfs(node: TreeNode | null , target : number) : number[]{

    if(node == null) return [];
    if(node.val == target) return [node.val];

    let leftAns : number[] = dfs(node.left,target);

    if(leftAns.length > 0){
        leftAns.push(node.val);
        return leftAns;
    }

    let rightAns :  number[] = dfs(node.right,target);

    if(rightAns.length > 0){
        rightAns.push(node.val);
        return rightAns;
    }

    return [];
}

let ntrp = dfs(root,11);
console.log(ntrp);

