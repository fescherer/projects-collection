// File containing all calculator app logic

import { CalculatorFunction, CalculatorProps } from "./types";

export enum CalculatorOperators {
  SUM="+",
  MINUS="-",
  DIVIDE="/",
  MULTIPLY="*"
}

const add: CalculatorFunction = (number1: number, number2: number) => number1 + number2
const subtract: CalculatorFunction = (number1: number, number2: number) => number1 - number2


const operations: { [index: string]: CalculatorFunction } = {
  "+": add,
  "-": subtract,
};


export function getResult(item: CalculatorProps, number1: string, number2: string) {

  try {
    const n1 = parseFloat(number1)
    const n2 = parseFloat(number2)

    if(item.type === 'operator')
      return operations[item.type](n1, n2)

  } catch(err) {
    console.log(err)
  }

}
