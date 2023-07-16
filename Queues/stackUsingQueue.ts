
class ListNode{
    val:number;
    next:ListNode | null;
    constructor(x:number){
        this.val = x;
        this.next = null;
    }
}

class LinkedList{
    head:ListNode | null;
    tail:ListNode | null;
    size:number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addLast = function(val:number){
        let nn = new ListNode(val);
        if(this.size == 0){
            this.head = nn;
            this.tail  = nn;
            this.size++;
            return;
        }
        this.tail.next = nn;
        this.tail = nn;
        this.size++;
    }

    removeFirst = function():number{
        if(this.size == 0){
            return -1;
        }else if(this.size == 1){
            let ret = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return ret;
        }
        let ret = this.head.val;
        this.head = this.head.next;
        this.size--;
        return ret;
    }

    getFirst = function():number{
        if(this.size  == 0) return -1;
        return this.head.val;
    }

    getSize = function(){
        return this.size;
    }

}

class Queue{
    ll: LinkedList;
    constructor(){
        this.ll = new LinkedList();
    }
    push = function(val:number){
        this.ll.addLast(val);
    }
    pop = function():number{
        return this.ll.removeFirst();
    }
    front = function():number{
        return this.ll.getFirst();
    }
    size= function(){
        return this.ll.getSize();
    }
}

class Stack{
    push=function(val:number){
        
    }
    pop=function():number{

    }
    top=function():number{

    }
    size=function():number{

    }
}