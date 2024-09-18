import Link from "next/link";
import { ThemeChanger } from "./theme-changer.component";
import { FennecTalesIcon } from "@/icons/fennec-tales.icon";

export function Header() {
  return (
    <header className="bg-base-100 p-4 ">
      <div className="m-auto flex max-w-screen-xl items-center justify-between ">
        <Link href="/"><FennecTalesIcon /></Link>

        <div>
          <ThemeChanger />
        </div>
      </div>
    </header>
  )
}
