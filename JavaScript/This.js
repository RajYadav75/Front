const student = {
   name : "BabaYaga",
    age : 14,
    math : 95,
    eng : 96,
    phy : 98,
    getAvg(){
        let avg = (this.math + this.eng+ this.phy)/3;
        console.log(avg);
        console.log(`${this.name} got avg mark = ${avg}`);
    }
    
}
student.getAvg();