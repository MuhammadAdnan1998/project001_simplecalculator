#! /usr/bin/env node
// SHABANG  (#SHA , !BANG)
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
console.log(answer);
//conditional statement
if (answer.operator === "addition") {
    console.log("Your value is :", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log("Your value is :", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log("Your value is :", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log("Your value is :", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator.");
}
