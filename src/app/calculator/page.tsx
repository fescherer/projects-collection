'use client'

import { useState } from "react"
import { calculatorData } from "./btn"
import { getResult } from "./fn"
import { CalculatorProps } from "./types"

export default function CalculatorPage() {
  const [number1, setNumber1] = useState<undefined | string>()
  const [number2, setNumber2] = useState<undefined | string>()
  const [operator, setOperator] = useState('')


  function result(item: CalculatorProps) {
    if(item.type === 'digit' && !operator) setNumber1(prev => prev + item.value)
    if(item.type === 'digit' && !!operator) setNumber2(prev => prev + item.value)
    if(item.type === 'operator' && number1) setOperator(item.value)


    if(number1 && number2 && operator) console.log(getResult(item, number1, number2))
  }

  return (
    <div className='m-auto flex w-full max-w-lg flex-col items-center justify-center p-4'>
      <div className='my-2 flex w-full justify-end rounded bg-slate-900 p-4'>{(number1 + operator + number2) || 0}</div>
      <div className='grid w-full grid-cols-4 grid-rows-4 gap-2'>
        {
          calculatorData.map(item => (
            <button type="button" onClick={() => result(item)} disabled={item.type === 'invalid'} key={item.value}>{item.value}</button>
          ))
        }
      </div>
    </div>
  )
}
