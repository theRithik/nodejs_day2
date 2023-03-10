const number1 = parseInt(process.argv[2]);
const operator = process.argv[3];
const number2 = parseInt(process.argv[4]);

let result= null;
switch(operator){
    case '+' :result =number1+number2;
    break;
    case '-' :result=number1-number2;
    break;
    case '/' :result=number1/number2;
    break;
    case '*' :result= number1*number2;
    break;
}
console.log("result",result)