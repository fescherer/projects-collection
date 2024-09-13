'use client'

import { cn } from "@/util/cn.function"
import { calculatorData } from "./btn"
import { useCalculatorContext } from "./calculator.context"
import { CollapseComponent } from "@/components/collapse.component"

export default function CalculatorPage() {
  const {number1, calcHistory, number2, operator, getResult} = useCalculatorContext()

  return (
    <div className='m-auto flex w-full max-w-lg flex-col items-center justify-center rounded bg-white p-4 shadow-md'>


      <div className='my-2 flex w-full flex-col rounded bg-primary p-4'>
        <div className="flex justify-end">{(number1 + operator + number2) || 0}</div>
        <div className="flex gap-4 overflow-scroll whitespace-nowrap text-sm">{calcHistory.map((item, index)=> (
          <div className="rounded border border-neutral/20 p-1 text-neutral" key={index}>
            {`${item.number1} ${item.operator} ${item.number2}`}
          </div>
        ))}</div>
      </div>
      <div className='grid w-full grid-cols-4 grid-rows-4 gap-2'>
        {
          calculatorData.map(item => (
            <button type="button" className={cn("btn", item.type === 'operator' ? 'btn-accent': '', item.value === '0' ? 'col-span-2' : '')} onClick={() => getResult(item)} disabled={item.type === 'invalid'} key={item.value}>{item.value}</button>
          ))
        }
      </div>

      <CollapseComponent title="About the project" className={'mt-12'}>
        <p>The project is a simple calculator</p>
      </CollapseComponent>
    </div>
  )
}
