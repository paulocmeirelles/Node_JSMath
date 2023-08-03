import userImputHelper from "../helper/userImput.helper.js";

function check_prime_number(number) {
  if (!parseInt(number)) {
    return "Please, insert a integer";
  }
  number = parseInt(number);
  if (number == 2) {
    return "It's a prime number";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "It's not a prime number";
    } else {
      return "It's a prime number";
    }
  }
}

function first_n_prime_numbers(quantity) {
  if (!parseInt(quantity)) {
    return "Please, insert a integer";
  }

  let number = 1;
  let mark = true;
  for (let i = 2; number <= quantity; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        mark = false;
      }
    }
    if (mark == true) {
      console.log(i);
      number++;
    } else {
      mark = true;
    }
  }
}

userImputHelper.prompt.question(
  "Type a number to see if it's a prime number\n",
  (number) => {
    console.log(`${check_prime_number(number)}`);
    console.log("Print 10 first prime numbers");
    first_n_prime_numbers(10);
    userImputHelper.prompt.close();
  }
);
