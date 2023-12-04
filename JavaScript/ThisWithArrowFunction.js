const student = {
    name : "Raj",
    marks : 95,
    prop : this,
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMark : () => {
        console.log(this);
        return this.marks;
    },
    getInfo1 : () => {
        setTimeout(()=>{
            console.log(this);
        },2000);
    },
    getInfo2 : () => {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    }
}
student.getInfo1();
student.getInfo2();