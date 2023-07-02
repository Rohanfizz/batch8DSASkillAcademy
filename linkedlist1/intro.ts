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
}

let ll = new LinkedList();
ll.addFirst(5);
ll.addFirst(4);
ll.addFirst(3);
ll.removeFirst();
ll.addLast(3);
ll.display();