
var johnScore1, johnScore2, johnScore3, mikeScore1, mikeScore2, mikeScore3, marryScore1, marryScore2, marryScore3;

johnScore1 = 117;
johnScore2 = 120;
johnScore3 = 103;

mikeScore1 = 117;
mikeScore2 = 120;
mikeScore3 = 103;

marryScore1 = 97;
marryScore2 = 134;
marryScore3 = 105;

var johnAverage = average(johnScore1, johnScore2, johnScore3);
var mikeAverage = average(mikeScore1, mikeScore2, mikeScore3);
var marryAverage = average(marryScore1, marryScore2, marryScore3);

if (johnAverage > mikeAverage && johnAverage > marryAverage) {
    console.log('John has highest average score. His average score is ' + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > marryAverage) {
    console.log('Mike has highest average score. His average score is ' + mikeAverage);
} else if (marryAverage > mikeAverage && marryAverage > johnAverage) {
    console.log('Marry has highest average score. Her average score is ' + marryAverage);
} else {
    console.log('There is a draw');
}

// if (johnAverage > mikeAverage) {
//     console.log('John has highest average score. His average score is ' + johnAverage);
// } else if (johnAverage === mikeAverage) {
//     console.log('Mike and John have the same average score. Their average score is ' + johnAverage);
// } else {
//     console.log('Mike has highest average score. His average score is ' + mikeAverage);
// }





function average(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}