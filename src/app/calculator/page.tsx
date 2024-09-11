'use client'

import { useState } from "react"
import { calculatorData } from "./btn"
import { getCalcResult } from "./fn"
import { CalculatorHistory, CalculatorProps } from "./types"

export default function CalculatorPage() {
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
            try {
              const n = parseFloat(number2)
              setNumber2((n * -1).toString())
            } catch(err) {
              console.log('Error transforming number into negative')
            }
          } else if(number1) {
            try {
              const n = parseFloat(number1)
              setNumber1((n * -1).toString())
            } catch(err) {
              console.log('Error transforming number into negative')
            }
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
      <div className='my-2 flex w-full flex-col rounded bg-slate-900 p-4 text-white'>
        <div className="flex justify-end">{(number1 + operator + number2) || 0}</div>
        <div className="flex gap-4 overflow-scroll whitespace-nowrap text-sm">{calcHistory.map((item, index)=> (
          <div className="rounded border border-slate-800 p-1 text-white" key={index}>
            {`${item.number1} ${item.operator} ${item.number2}`}
          </div>
        ))}</div>
      </div>
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
