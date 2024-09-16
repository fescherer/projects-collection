import Link from "next/link";
import { PropsWithChildren } from "react";

type TInstructionsWrapper = {
  projectLink: string
}

export function InstructionsWrapper({children, projectLink}: PropsWithChildren<TInstructionsWrapper>) {
  return (
    <div className="m-auto flex size-full max-w-2xl flex-col">
      <Link className="link flex items-center justify-end gap-1" href={projectLink}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
          <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
        </svg>
        Go back
      </Link>
      <section  className="rounded bg-neutral-100 p-6 px-4 shadow-md">
        {children}
      </section>
    </div>
  )
}
