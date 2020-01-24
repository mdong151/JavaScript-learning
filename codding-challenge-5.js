var john = {
    name: 'John',
    bills: [124, 48, 268, 180],
    calcTip: function () {
        this.tips = new Array();
        this.finalPays = new Array();
        var tipPercentage;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                tipPercentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                tipPercentage = 0.15;
            } else {
                tipPercentage = 0.1;
            }
            this.tips.push(this.bills[i] * tipPercentage);
            this.finalPays.push(this.bills[i] + this.tips[i]);
        }
        console.log(this.tips);
        console.log(this.finalPays);
    }
}

john.calcTip();

var mark = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    calcTip: function () {
        this.tips = new Array();
        this.finalPays = new Array();
        var tipPercentage;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                tipPercentage = 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                tipPercentage = 0.1;
            } else {
                tipPercentage = 0.25;
            }
            this.tips.push(this.bills[i] * tipPercentage);
            this.finalPays.push(this.bills[i] + this.tips[i]);
        }
        console.log(this.tips);
        console.log(this.finalPays);
    }
}

mark.calcTip();

function calcTipsAverage(name) {
    var sum = 0;
    var length = name.bills.length;
    for (var i = 0; i < length; i++) {
        sum = sum + name.bills[i];
    }
    var average = sum / length;
    console.log('tips average = ' + average);
    name.tipsAverage = average;
    return average;
}

calcTipsAverage(john);
calcTipsAverage(mark);

if (john.tipsAverage > mark.tipsAverage) {
    console.log(john.name + ' has higher tips than ' + mark.name);
} else if (john.tipsAverage < mark.tipsAverage) {
    console.log(mark.name + ' has higher tips than ' + john.name);
} else {
    console.log(john.name + ' and ' + mark.name + ' tips equally');
}