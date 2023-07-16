var ListNode = /** @class */ (function () {
    function ListNode(x) {
        this.val = x;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.addLast = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
                this.size++;
                return;
            }
            this.tail.next = nn;
            this.tail = nn;
            this.size++;
        };
        this.removeFirst = function () {
            if (this.size == 0) {
                return -1;
            }
            else if (this.size == 1) {
                var ret_1 = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return ret_1;
            }
            var ret = this.head.val;
            this.head = this.head.next;
            this.size--;
            return ret;
        };
        this.getFirst = function () {
            if (this.size == 0)
                return -1;
            return this.head.val;
        };
        this.getSize = function () {
            return this.size;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.push = function (val) {
            this.ll.addLast(val);
        };
        this.pop = function () {
            return this.ll.removeFirst();
        };
        this.front = function () {
            return this.ll.getFirst();
        };
        this.size = function () {
            return this.ll.getSize();
        };
        this.ll = new LinkedList();
    }
    return Queue;
}());
var q = new Queue();
q.push(10);
q.push(20);
console.log(q.pop()); //10
