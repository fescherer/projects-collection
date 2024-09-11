// File containing all calculator app logic

import { CalculatorFunction} from "./types";

const add: CalculatorFunction = (number1: number, number2: number) => number1 + number2
const subtract: CalculatorFunction = (number1: number, number2: number) => number1 - number2
const divide: CalculatorFunction = (number1: number, number2: number) => number1 / number2
const multiply: CalculatorFunction = (number1: number, number2: number) => number1 * number2

const operations: { [index: string]: CalculatorFunction } = {
  "+": add,
  "-": subtract,
  '*': multiply,
  '/': divide
};


export function getCalcResult(operation: string, number1: string, number2: string) {
  console.log( number1, operation, number2, operation in ['+', '-', '*', '/'])
  try {
    const n1 = parseFloat(number1)
    const n2 = parseFloat(number2)
    if(['+', '-', '*', '/'].includes(operation))
      return operations[operation](n1, n2).toString()

  } catch(err) {
    console.log(err, 'Algo deu errado com sua conta')
  }

  return ''
}
