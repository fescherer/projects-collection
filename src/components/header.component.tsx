import Link from "next/link";
import { FennecTalesIcon } from "@/icons/fennec-tales.icon";
import ThemeSwitcher from "./theme-switcher.component";

export function Header() {
  return (
    <header className="bg-base-200">
      <div className="navbar m-auto max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <button type="button" role="button" className="btn btn-circle btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <ul
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              <li><Link href="/">Homepage</Link></li>
              <li><Link target="_blank" href="https://fennectales.com">Blog</Link></li>
              <li><Link target="_blank" href="https://felipescherer.com">Portfolio</Link></li>
              <li><Link target="_blank" href="https://felipescherer.com">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/"><FennecTalesIcon /></Link>
        </div>
        <div className="navbar-end">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
