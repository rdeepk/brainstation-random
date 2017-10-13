var sum = 0;
if(process.argv.length < 4) {
    console.log("Please provide at least 2 arguments");
} else {
    let nonNum = [];
for (i = 2; i < process.argv.length; i++) {
    let num = parseInt(process.argv[i]);
    if(num) {  //num will have NaN in cases it converts the non integer values, since NaN is falsy, it will stay false
        sum += Number(process.argv[i]);
    } else {
        nonNum.push(process.argv[i]);
    }
}
console.log("Non number values you added: ", nonNum);
console.log("Sum of integer numbers: ",sum);
}
