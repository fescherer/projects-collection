'use client'

import { calculatorData } from "./btn"
import { useCalculatorContext } from "./calculator.context"

export default function CalculatorPage() {
  const {number1, calcHistory, number2, operator, getResult} = useCalculatorContext()

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
