function calculator(number1, number2, operator) {
  if (!parseFloat(number1) || !parseFloat(number2)) {
    return "There are inconsistencies in the numbers";
  }
  if (
    operator != "+" ||
    operator != "-" ||
    operator != "*" ||
    operator != "/" ||
    operator != "x"
  ) {
    return "Problem with operator";
  }
  if (operator.toString() == "+") {
    return number1 + number2;
  } else if (operator.toString() == "-") {
    return number1 - number2;
  } else if (operator.toString() == "*" || operator.toString() == "x") {
    return number1 * number2;
  } else if (operator.toString() == "/") {
    return number1 / number2;
  }
}
