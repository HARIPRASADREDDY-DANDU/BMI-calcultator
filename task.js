'use strict';

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass : 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = (this.mass * this.height)/2;
        return this.BMI;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.BMI = (this.mass * this.height)/2;
        return this.BMI;
    }
}
console.log(john.calcBMI());
// console.log(john.BMI);
console.log(mark.calcBMI());

if (john.BMI > mark.BMI){
    console.log(`John's BMI ${john.BMI} is higher than Mark's BMI ${mark.BMI}`);
}
else{
    console.log(`John's BMI ${john.BMI} is lower than Mark's BMI ${mark.BMI}`);
}