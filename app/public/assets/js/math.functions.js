function calculator(number1, number2, operator) {
  if (!parseFloat(number1) || !parseFloat(number2)) {
    return "There are inconsistencies in the numbers";
  }
  if (
    operator != "+" &&
    operator != "-" &&
    operator != "*" &&
    operator != "/" &&
    operator != "x"
  ) {
    return "Problem with operator";
  }
  if (operator.toString() == "+") {
    return parseFloat(number1) + parseFloat(number2);
  } else if (operator.toString() == "-") {
    return parseFloat(number1) - parseFloat(number2);
  } else if (operator.toString() == "*" || operator.toString() == "x") {
    return parseFloat(number1) * parseFloat(number2);
  } else if (operator.toString() == "/") {
    return parseFloat(number1) / parseFloat(number2);
  }
}

function check_prime_number(number) {
  if (!parseInt(number)) {
    return "Please, insert a integer";
  }
  number = parseInt(number);
  if (number == 2) {
    return `${number} - It's a prime number`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `${number} - It's not a prime number`;
    } else {
      return `${number} - It's a prime number`;
    }
  }
}

function first_n_prime_numbers(quantity) {
  if (!parseInt(quantity)) {
    return "Please, insert a integer";
  }

  let primeNumbers = [];
  let number = 1;
  let mark = true;
  for (let i = 2; number <= quantity; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        mark = false;
      }
    }
    if (mark == true) {
      primeNumbers.push(i);
      number++;
    } else {
      mark = true;
    }
  }
  return primeNumbers;
}

function factorial(number) {
  if (!parseInt(number)) {
    return "Please, insert a number next time";
  }
  let result = 1;
  for (let i = parseInt(number); i > 1; i--) {
    result *= i;
  }
  return result;
}

function table(number) {
  if (!parseInt(number)) {
    return "Please insert a number next time!";
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${parseInt(number)} * ${i} = ${parseInt(number) * i}`);
  }
}

function gradeAverage(grade1, grade2, grade3) {
  if (
    !parseInt(grade1.replace(",", ".")) ||
    !parseFloat(grade2.replace(",", ".")) ||
    !parseFloat(grade3.replace(",", "."))
  ) {
    return "Invalid Values";
  }

  return (
    (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) /
    3
  ).toFixed(2);
}

function simpleInterest(duration, initialCapital, interestRate) {
  if (
    !parseInt(duration) ||
    !parseFloat(initialCapital.replace(",", ".")) ||
    !parseFloat(interestRate.replace("%", "").replace(",", "."))
  ) {
    return "Invalid Values";
  }
  let rate = parseFloat(interestRate.replace("%", "").replace(",", ".")) / 100;

  return (
    parseFloat(initialCapital.replace(",", ".")) +
    rate * parseFloat(initialCapital.replace(",", ".")) * duration
  ).toFixed(2);
}

function compoundInterest(duration, initialCapital, interestRate) {
  if (
    !parseInt(duration) ||
    !parseFloat(initialCapital.replace(",", ".")) ||
    !parseFloat(interestRate.replace("%", "").replace(",", "."))
  ) {
    return "Invalid Values";
  }

  return (
    parseFloat(initialCapital.replace(",", ".")) *
    (1 + parseFloat(interestRate.replace("%", "").replace(",", ".")) / 100) **
      duration
  ).toFixed(2);
}
