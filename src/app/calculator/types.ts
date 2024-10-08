

export type CalculatorProps = {
  value: string
  type: CalculatorType
}

export type CalculatorType = 'operator' | 'digit' | 'invalid' | 'decimal-dot'

export type CalculatorFunction = (number1: number, number2: number) => number

export type CalculatorHistory = {
  number1: string,
  operator: string,
  number2: string
}
