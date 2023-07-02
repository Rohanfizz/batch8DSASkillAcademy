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
            else {
                //list  is not empty
                this.tail.next = nn;
                this.tail = this.tail.next;
                this.size++;
            }
        };
        this.addFirst = function (x) {
            var nn = new ListNode(x);
            if (this.size == 0) { //list is empty
                this.head = nn;
                this.tail = nn;
                this.size++;
            }
            else {
                nn.next = this.head;
                this.head = nn;
                this.size++;
            }
        };
        this.removeFirst = function () {
            if (this.size == 0) {
                console.log("List is already empty!");
                return null;
            }
            else if (this.size == 1) {
                var res = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return res;
            }
            else {
                var res = this.head.val;
                this.head = this.head.next;
                this.size--;
                return res;
            }
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
ll.addFirst(5);
ll.addFirst(4);
ll.addFirst(3);
ll.removeFirst();
ll.addLast(3);
ll.display();
