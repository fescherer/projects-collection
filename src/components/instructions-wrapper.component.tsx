import Link from "next/link";
import { PropsWithChildren } from "react";

type TInstructionsWrapper = {
  projectLink: string
}

export function InstructionsWrapper({children, projectLink}: PropsWithChildren<TInstructionsWrapper>) {
  return (
    <div className="m-auto flex size-full max-w-2xl flex-col">
      <div>
        <Link href={projectLink}>Go back</Link>
      </div>
      <section  className="rounded bg-neutral-100 p-6 px-4 shadow-md">
        {children}
      </section>
    </div>
  )
}
