// This component can be either checkbox or details and summary tags, the problem with the last ones is that we cannot add animations
// See the options here https://daisyui.com/components/collapse

import { cn } from "@/util/cn.function";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

/**
   * Collapse is a component used for showing and hiding content
   *
   * @param defaultClasses - Tailwind default classes;
   * @param specificClasses - Component specific Tailwind classes;
   * @param conditionalClasses - Conditional Tailwind classes;
   * @returns Tailwind classes
   *
*/

type CollapseComponent = {
  title: string
  className?: ClassValue
}

export function CollapseComponent({children, title, className}: PropsWithChildren<CollapseComponent>) {
  return (
    <div className={cn("collapse collapse-arrow bg-base-200", className)}>
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        {children}
      </div>
    </div>
  )
}
