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
        this.getNodeAt = function (idx) {
            if (idx >= this.size) {
                console.log("Index out of bounds!");
                return null;
            }
            var temp = this.head;
            var cidx = 0;
            while (cidx != idx) {
                temp = temp.next;
                cidx++;
            }
            return temp;
        };
        this.getValueAt = function (idx) {
            if (idx >= this.size) {
                console.log("Index out of bounds!");
                return -1;
            }
            var nodeAtTargetIndex = this.getNodeAt(idx);
            return nodeAtTargetIndex.val;
        };
        this.removeLast = function () {
            if (this.size == 0)
                return -1;
            var deletedVal = this.tail.val;
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
                this.size--;
                return deletedVal;
            }
            var temp = this.getNodeAt(this.size - 2);
            temp.next = null;
            this.tail = temp;
            this.size--;
            return deletedVal;
        };
        this.removeAt = function (idx) {
            if (this.size == 0) {
                console.log("LinkedList is empty!");
                return -1;
            }
            else if (idx == 0)
                return this.removeFirst();
            else if (idx == this.size - 1)
                return this.removeLast();
            else if (idx >= this.size || idx < 0) {
                console.log("Index out of bounds!");
                return -1;
            }
            var temp = this.getNodeAt(idx);
            var deletedValue = temp.val;
            var next = temp.next;
            while (next != null) {
                temp.val = next.val;
                temp = temp.next;
                next = next.next;
            }
            this.removeLast();
            return deletedValue;
        };
        this.addAt = function (idx, value) {
            if (idx == 0) {
                this.addFirst(value);
                return;
            }
            else if (idx == this.size) {
                this.addLast(value);
                return;
            }
            else if (idx < 0 || idx > this.size) {
                console.log("Index out of bounds!");
                return;
            }
            var nn = new ListNode(value);
            var temp = this.getNodeAt(idx - 1);
            nn.next = temp.next;
            temp.next = nn;
            this.size++;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
ll.addLast(10);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
// ll.addLast(50); //10 20 30 40
console.log(getMid(ll.head));
function getMid(head) {
    if (head == null) {
        return -1;
    }
    var slow = head;
    var fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.val;
}
