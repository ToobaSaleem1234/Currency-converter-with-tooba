#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bgBlueBright.bold("\n\t WELCOME-code-with-tooba-currency-converter:\n\t"))

let exchange_rates:any ={
    "USD":1,
    "EUR":0.9,
    "JPY":154.8,
    "CNY":7.22,
    "PKR":278
}
let userInput= await inquirer.prompt([
    {
        name:"from",
        type:"list",
        message:"Select the currency to convert from:",
        choices:["USD","EUR","JPY","CNY","PKR"]
    },
    {
        name:"to",
        type:"list",
        message:"Select the currency to convert:",
        choices:["USD","EUR","JPY","CNY","PKR"]
    },
    {
        name:"amount",
        type:"number",
        message:"Enter the amount to convert:"
    }
])
let from_amount = exchange_rates[userInput.from]
let to_amount = exchange_rates[userInput.to]
let amount = userInput.amount

let base_amount = amount/from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount is:${converted_amount}`)

console.log(chalk.bgBlueBright.bold("\n\t THANK YOU FOR USING MY PROJECT:\n\t"))