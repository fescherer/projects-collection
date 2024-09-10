

export type CalculatorProps = {
  value: string
  type: CalculatorType
}

export type CalculatorType = 'operator' | 'digit' | 'invalid'

export type CalculatorFunction = (number1: number, number2: number) => number
