class TreeNode {
    val : number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(x:number){
        this.val  = x;
        this.left  = null;
        this.right = null;
    }
}

function constructTree(arr:number[],l:number,r:number) : TreeNode | null{
    if(l > r){
        //invalid range
        return null;
    }

    let mid = Math.floor((l+r)/2);
    let nn:TreeNode = new TreeNode(arr[mid]);
    nn.left = constructTree(arr,l,mid-1);
    nn.right = constructTree(arr,mid+1,r);
    return nn;
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

function findVal(root: TreeNode | null , target: number) : boolean{
    let temp : TreeNode | null = root;
    while(temp != null){
        if(temp.val == target) return true;
        else if(target < temp.val) temp = temp.left;
        else temp = temp.right;
    }
    return false;
}

function findValRecur(curr: TreeNode | null, target: number) : boolean{
    if(curr == null) return false;
    if(curr.val == target) return true;
    if(target<curr.val) return findValRecur(curr.left,target);
    return findValRecur(curr.right,target);
}

let arr = [10,20,30,40,50,60,70,80,90];

let root = constructTree(arr,0,arr.length-1);

// displayTree(root);

console.log(findVal(root,45));
