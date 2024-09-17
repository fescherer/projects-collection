import { LinksType } from "@/@types/links.type";
import Link from "next/link";
import { PropsWithChildren } from "react";

type ProjectWrapperComponentType = {
  title: string
  description: string
  links: LinksType[]
}

export default function ProjectWrapperComponent({children, title, description, links}: PropsWithChildren<ProjectWrapperComponentType>) {
  return (
    <section className="relative m-auto flex size-full max-w-2xl flex-col">
      <div className="text-center">
        <h2 className="my-4 text-4xl font-medium">{title}</h2>
        <p className="my-2">{description}</p>

        <div className="my-4 flex w-full justify-center gap-4">
          {
            links.map(link => (
              <Link href={link.href} key={link.href+link.name} className="btn-secondary link link-neutral">{link.name}</Link>
            ))
          }
        </div>
      </div>
      <div className='w-full items-center justify-center rounded bg-base-100 p-4 shadow-md'>
        {children}
      </div>
    </section>
  )
}
