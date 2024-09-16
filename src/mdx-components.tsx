import type { MDXComponents } from 'mdx/types'
import { slugyfy } from './util/slugyfy.function'
import { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import Link from 'next/link'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 id={slugyfy(children?.toString() || '')} className="inline-block scroll-m-24 text-4xl font-medium">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h1>
    ),
    h2: ({ children }) => (
      <h2 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-3xl font-medium">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-2xl font-medium">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h3>
    ),
    h4: ({ children }) => (
      <h4 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-xl font-medium">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h4>
    ),
    h5: ({ children }) => (
      <h5 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-lg font-medium">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h5>
    ),
    h6: ({ children }) => (
      <h6 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 font-medium">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h6>
    ),
    table: ({ children, ...props }: PropsWithChildren) => (
      <table className="border-collapse" {...props}>{children}</table>
    ),
    p: ({ children, ...props }: PropsWithChildren) => (
      <p className="my-3 text-justify leading-normal tracking-wider" {...props}>{children}</p>
    ),
    hr: ({ children, ...props }: PropsWithChildren) => (
      <div {...props} className='divider'>{children}</div>
    ),
    th: ({ children, ...props }: PropsWithChildren) => (
      <th className="border border-secondary bg-secondary text-center" {...props}>
        {children}
      </th>
    ),
    tr: ({ children, ...props }: PropsWithChildren) => (
      <tr className="" {...props}>
        {children}
      </tr>
    ),
    td: ({ children, ...props }: PropsWithChildren) => (
      <td className="border border-secondary px-6 py-2 text-center" {...props}>
        {children}
      </td>
    ),
    a: ({ children, ...props }:  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
      <Link {...props} aria-label={`Go to ${children}`} href={props.href || ''} target="_blank" className="tracking-wide">{children}</Link>
    ),
    ul: ({ children, ...props }: PropsWithChildren) => (
      <ul className="ml-4 list-disc" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: PropsWithChildren) => (
      <ol className="list-decimal" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: PropsWithChildren) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    Blockquote: ({ children, ...props }: PropsWithChildren) => (
      <blockquote className=" mt-6 border-l-2 border-l-primary pl-6 italic" {...props}>
        {children}
      </blockquote>
    ),
    ...components,
  }
}
