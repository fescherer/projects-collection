'use client'

import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import { CalculatorHistory, CalculatorProps } from './types'
import handleDecimalDot from './functions/handle-decimal-dot'
import { handleMathCalc } from './functions/handle-math-calc'
import handleNegativeNumber from './functions/handle-negative-number'

interface CalculatorContextType {
  number1: string
  number2: string
  operator: string
  calcHistory: CalculatorHistory[]
  getResult: (item: CalculatorProps) => void
}

export const CalculatorContext = React.createContext<CalculatorContextType>({
  number1: '',
  number2: '',
  operator: '',
  calcHistory: [],
  getResult: () => null
})

export function CalculatorProvider({ children }: PropsWithChildren) {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operator, setOperator] = useState<string>('')
  const [calcHistory, setCalcHistory] = useState<CalculatorHistory[]>([])

  function getResult(item: CalculatorProps) {
    switch(item.type) {
      case 'operator':
        setCurrentOperator(item)
        break;

      case 'digit':
        if(!!operator) {
          setNumber2(prev => (prev+ item.value).replace(/^0+/, ""))
        } else {
          setNumber1(prev => (prev + item.value).replace(/^0+/, ""))
        }
        break;

      case 'decimal-dot':
        if(!!operator) setNumber2(prev => handleDecimalDot(prev, item.value))
        else setNumber1(prev => handleDecimalDot(prev, item.value))
        break;
    }
  }

  function setCurrentOperator(item: CalculatorProps) {
    if(!!number1)
      switch(item.value) {
        case '=':
          if(operator){
            const n = handleMathCalc(operator, number1, number2)
            setCalcHistory(prev => [...prev, {
              number1: number1,
              number2: number2,
              operator: operator
            }])
            setNumber1(n)
            setNumber2('')
            setOperator('')
          }
          break;

        case '-/+':
          if(number2) {
            handleNegativeNumber(number2, setNumber2)
          } else if(number1) {
            handleNegativeNumber(number1, setNumber1)
          }
          break;

        case '<-':
          if(number2) setNumber2(prev => prev.slice(0, -1))
          else if(operator) setOperator('')
          else if(number1) setNumber1(prev => prev.slice(0, -1))
          break;

        case 'C':
          setNumber1('')
          setNumber2('')
          setOperator('')
          break;

        default:
          setOperator(item.value)
      }
  }

  return (
    <CalculatorContext.Provider value={{ number1, number2, operator, calcHistory, getResult }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export function useCalculatorContext() {
  return React.useContext(CalculatorContext)
}
