class ListNode {
    val: number;
    next: ListNode | null;
    constructor(x: number) {
        this.val = x;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    display = function (): void {
        let temp = this.head;
        let s = "";
        while (temp != null) {
            s = s + temp.val + " -> ";
            temp = temp.next;
        }
        console.log(s);
    };

    addLast = function (x: number): void {
        let nn: ListNode = new ListNode(x);

        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
            this.size++;
        } else {
            //list  is not empty
            this.tail.next = nn;
            this.tail = this.tail.next;
            this.size++;
        }
    };

    addFirst = function (x: number): void {
        let nn = new ListNode(x);
        if(this.size == 0){//list is empty
            this.head = nn;
            this.tail = nn;
            this.size++;
        }else{
            nn.next = this.head;
            this.head = nn;
            this.size++;
        }
    };

    removeFirst = function () : number | null{
        if(this.size == 0){
            console.log("List is already empty!");
            return null;
        }else if(this.size == 1){
            let res = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return res;
        }else{
            let res = this.head.val;
            this.head = this.head.next;
            this.size--;
            return res;
        }
    }

    getNodeAt = function (idx : number) : ListNode | null{
        if(idx >= this.size){
            console.log("Index out of bounds!");
            return null;
        }
        let temp: ListNode | null = this.head;
        let cidx :number = 0;
        while(cidx != idx){
            temp = temp.next;
            cidx++;
        }
        return temp;
    }
    getValueAt = function (idx:number) : number{
        if(idx >= this.size){
            console.log("Index out of bounds!");
            return -1;
        }
        let nodeAtTargetIndex = this.getNodeAt(idx);
        return nodeAtTargetIndex.val;
    }

    removeLast = function ():number{
        if(this.size == 0) return -1;
        let deletedVal = this.tail.val;
        if(this.size == 1){
            this.head = null;
            this.tail = null;
            this.size--;
            return deletedVal;
        }
        let temp = this.getNodeAt(this.size-2);

        temp.next = null;
        this.tail = temp;
        this.size--;
        return deletedVal;
    }
    removeAt = function(idx: number) : number{
        if(this.size == 0){
            console.log("LinkedList is empty!");
            return -1;
        }else if(idx == 0) return this.removeFirst();
        else if(idx == this.size-1) return this.removeLast();
        else if(idx >= this.size || idx<0){
            console.log("Index out of bounds!");
            return -1;
        }

        let temp = this.getNodeAt(idx);
        let deletedValue = temp.val;
        let next = temp.next;

        while(next != null){
            temp.val = next.val;
            temp = temp.next;
            next = next.next;
        }
        this.removeLast();
        return deletedValue;
    }

    addAt = function(idx:number,value:number) : void {
        if(idx == 0){
            this.addFirst(value);
            return;
        }else if(idx == this.size){
            this.addLast(value);
            return;
        }else if(idx <0 || idx > this.size){
            console.log("Index out of bounds!");
            return;
        }

        let nn = new ListNode(value);
        let temp = this.getNodeAt(idx-1);
        nn.next = temp.next;
        temp.next = nn;
        this.size++;
    }
}

let ll = new LinkedList();
ll.addLast(10);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
// ll.addLast(50); //10 20 30 40

console.log(getMid(ll.head));

function getMid(head : ListNode | null) : number{
    if(head == null){
        return -1;
    }
    let slow : ListNode | null= head;
    let fast : ListNode | null= head;
    while(fast.next != null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.val;
}
