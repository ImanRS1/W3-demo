export default function evaluate(userInput) {
    // const input = document.getElementById("userInput").value;
    const input = userInput.value;
    const whiteSpacePattern = /\s+/;
    const inputNoWhiteSpace = input.replace(whiteSpacePattern, '');
    const digitPattern = /(-\d+|\d+)/g;
    const operand = inputNoWhiteSpace.replace(digitPattern, '');
    const resultContainer = document.querySelector(".userResult");
  
    if (inputNoWhiteSpace.match(digitPattern) === null) {
      return resultContainer.innerHTML = "You can only calculate using digits.";
    }
  
    const digitOne = parseInt(inputNoWhiteSpace.match(digitPattern)[0], 10);
    const digitTwo = parseInt(inputNoWhiteSpace.match(digitPattern)[1], 10);
  
    let result;
    switch (operand) {
      case '+':
        result = digitOne + digitTwo;
        break;
      case '':
        result = digitOne + digitTwo;
        break;
      case '-':
        result = digitOne - digitTwo;
        break;
      case '*':
        result = digitOne * digitTwo;
        break;
      case '/':
        if (digitTwo === 0) {
          result = 'Division by zero not allowed.';
        } else {
          result = digitOne / digitTwo;
        }
        break;
      default:
        throw Error('Use proper operator.');
    }
    resultContainer.innerHTML = `Your result is: ${result}`;
};