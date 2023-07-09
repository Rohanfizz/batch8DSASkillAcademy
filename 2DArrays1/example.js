var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    return Student;
}());
var Club = /** @class */ (function () {
    function Club() {
        this.addStudent = function (x) {
            this.list.push(x);
        };
        this.displayClub = function () {
            console.log(this.list);
        };
        this.list = [];
    }
    return Club;
}());
var music = new Club();
music.addStudent(new Student("Rohan", 99));
music.addStudent(new Student("Shantanu", 100));
music.addStudent("xyz");
music.displayClub();
