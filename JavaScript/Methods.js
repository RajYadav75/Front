const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
    div : function(a,b){
        return a/b;
    }
}
console.log(calculator.add(3,4));
console.log(calculator.sub(4,5));
console.log(calculator.mul(4,5));
console.log(calculator.div(6,5));

const cal = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(cal.add(45,5));
console.log(cal.sub(5,6));