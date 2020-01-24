var bills = [124, 48, 268];


var tip = function (bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >= 50 && bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

var tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
var finalpays = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills + '\n' + tips + '\n' + finalpays);