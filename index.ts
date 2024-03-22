#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second number", type: "number", name: "SecondNumber" },
    {
        message: "Select one operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.SecondNumber);
}
else {
    "please Select Correct operator";
}
