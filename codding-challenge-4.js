var john = {
    name: 'John',
    mass: 100,
    height: 1.7,
    BMICalc: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var mark = {
    name: 'Mark',
    mass: 65,
    height: 1.7,
    BMICalc: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

john.BMICalc()
mark.BMICalc()

if (john.BMI > mark.BMI) {
    console.log(john.name + ' has higher BMI than ' + mark.name);
} else if (john.BMI < mark.BMI) {
    console.log(mark.name + ' as higher BMI than ' + john.name);
} else {
    console.log(mark.name + ' and ' + john.name + ' has same BMI:' + john.BMI);
}