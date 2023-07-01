/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function ntrp(node:TreeNode | null,target:number) : TreeNode[] {
    if(node == null) return [];
    if(node.val == target) return [node];

    let leftAns : TreeNode[] = ntrp(node.left,target);

    if(leftAns.length > 0){
        leftAns.push(node);
        return leftAns;
    }

    let rightAns: TreeNode[] = ntrp(node.right,target);

    if(rightAns.length > 0){
        rightAns.push(node);
        return rightAns;
    }
    return [];
}


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let ntrp1 = ntrp(root,p.val);
    let ntrp2 = ntrp(root,q.val);

    let i = ntrp1.length-1;
    let j = ntrp2.length-1;

    while(i>=0 && j>=0 && ntrp1[i].val == ntrp2[j].val){
        i--;
        j--;
    }
    return ntrp1[i+1];
};
