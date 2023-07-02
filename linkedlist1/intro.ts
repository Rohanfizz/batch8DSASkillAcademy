class  ListNode{
    val : number;
    next : ListNode | null;
    constructor(x:number){
        this.val = x;
        this.next = null;
    }
}

class LinkedList{
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    display = function():void{
        let temp = this.head;
        let s="";
        while(temp != null){
            s = s + temp.val +" -> ";
            temp = temp.next;
        }
        console.log(s);
    }

    addLast = function( x : number ) : void {
        let nn : ListNode = new ListNode(x);

        if(this.size == 0){
            this.head = nn;
            this.tail  = nn;
            this.size++;
        }else{//list  is not empty
            this.tail.next = nn;
            this.tail = this.tail.next;
            this.size++;
        }
    }


}

let ll = new LinkedList();
ll.addLast(100);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.display();