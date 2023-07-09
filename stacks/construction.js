var ListNode = /** @class */ (function () {
    function ListNode(x) {
        this.val = x;
        this.next = null;
    }
    return ListNode;
}());
var LinkedListClass = /** @class */ (function () {
    function LinkedListClass() {
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
                console.log("LinkedListClass is empty!");
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
    return LinkedListClass;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.push = function (x) {
            this.ll.addFirst(x);
        };
        this.pop = function () {
            return this.ll.removeFirst();
        };
        this.top = function () {
            return this.ll.getValueAt(0);
        };
        this.ll = new LinkedListClass();
    }
    return Stack;
}());
var st = new Stack();
st.push(5);
st.push(6);
st.push(7);
console.log(st.pop()); //7 
console.log(st.top()); //6
st.push(10);
st.pop();
st.pop();
console.log(st.pop()); //5
