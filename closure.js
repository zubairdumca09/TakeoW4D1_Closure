function outer(a) {
    let x = 14
    let inner = (b) => {
        console.log(b, x, a)
    }
    return inner;
}

let fun = outer(100)
// (b) => {
//     console.log(a)
// }
fun(11);

function unitConversion(unitPer) {
    return function (noOfUnits) {
        return unitPer * noOfUnits
    }
}
const mToCM = unitConversion(100);
const dayToHr = unitConversion(24)
const hrToMin = unitConversion(60);

console.log(hrToMin(.5));







