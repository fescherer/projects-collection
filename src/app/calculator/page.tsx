'use client'

import { cn } from "@/util/cn.function"
import { calculatorData } from "./btn"
import { useCalculatorContext } from "./calculator.context"
import ProjectWrapperComponent from "@/components/project-wrapper.component"
import { LinksType } from "@/@types/links.type"

export default function CalculatorPage() {
  const {number1, calcHistory, number2, operator, getResult} = useCalculatorContext()
  const links: LinksType[] = [
    {name: 'Github Page', href: "https://github.com/fescherer/projects-collection/tree/main/src/app/calculator"},
    {name: 'Instructions', href: '/calculator/instructions'}
  ]

  return (
    <ProjectWrapperComponent title='Simple Calculator' description="A very basic project to start your project collection" links={links}>
      <div className='my-2 flex w-full flex-col rounded bg-primary p-4'>
        <div className="flex justify-end">{(number1 + operator + number2) || 0}</div>
        <div className="flex min-h-8 gap-4 overflow-scroll whitespace-nowrap text-sm">{calcHistory.map((item, index)=> (
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
    </ProjectWrapperComponent>
  )
}
