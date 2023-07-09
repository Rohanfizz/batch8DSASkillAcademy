class Student{
    name : string;
    marks : number;
    constructor(name:string,marks:number){
        this.name  = name;
        this.marks  = marks;
    }
}

class Club{
    list : Student[];
    constructor(){
        this.list = [];
    }
    addStudent = function(x:Student) : void{
        this.list.push(x);
    };
    displayClub = function(){
        console.log(this.list);
    }
}
let music = new Club();

music.addStudent(new Student("Rohan",99));
music.addStudent(new Student("Shantanu",100));
music.displayClub();