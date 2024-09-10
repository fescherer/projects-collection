'use client'

import { useState } from "react"
import { calculatorData } from "./btn"
import { getCalcResult } from "./fn"
import { CalculatorProps } from "./types"

export default function CalculatorPage() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operator, setOperator] = useState<string>('')

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
        if(!!operator) setNumber2(prev => setDot(prev, item.value))
        else setNumber1(prev => setDot(prev, item.value))
        break;
    }
  }

  function setDot(n: string, newItem: string) {
    return n.includes(newItem) ? n : !n ? '0' + newItem : n + newItem
  }

  function setCurrentOperator(item: CalculatorProps) {
    if(!!number1)
      switch(item.value) {
        case '=':
          if(operator){
            const n = getCalcResult(operator, number1, number2)
            setNumber1(n)
            setNumber2('')
            setOperator('')
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
    <div className='m-auto flex w-full max-w-lg flex-col items-center justify-center p-4'>
      <div className='my-2 flex w-full justify-end rounded bg-slate-900 p-4 text-white'>{(number1 + operator + number2) || 0}</div>
      <div className='grid w-full grid-cols-4 grid-rows-4 gap-2'>
        {
          calculatorData.map(item => (
            <button type="button" onClick={() => getResult(item)} disabled={item.type === 'invalid'} key={item.value}>{item.value}</button>
          ))
        }
      </div>
    </div>
  )
}
