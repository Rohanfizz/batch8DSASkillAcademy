function f2(a){
    console.log(a);
}

function f1(a){
    f2(a-1);
    console.log(a);
}

f1(10);