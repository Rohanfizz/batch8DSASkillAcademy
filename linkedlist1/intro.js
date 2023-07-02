var ListNode = /** @class */ (function () {
    function ListNode(x) {
        this.val = x;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.display = function () {
            var temp = this.head;
            var s = "";
            while (temp != null) {
                s = s + temp.val + " -> ";
                temp = temp.next;
            }
            console.log(s);
        };
        this.addLast = function (x) {
            var nn = new ListNode(x);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
                this.size++;
            }
            else { //list  is not empty
                this.tail.next = nn;
                this.tail = this.tail.next;
                this.size++;
            }
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
ll.addLast(100);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.display();
