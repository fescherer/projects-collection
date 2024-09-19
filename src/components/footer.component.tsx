import { LinksType } from "@/@types/links.type";
import { FelipeSchererIcon } from "@/icons/felipe-scherer.icon";
import { FennecTalesIcon } from "@/icons/fennec-tales.icon";
import { GithubIcon } from "@/icons/github.icon";
import { LinkedinIcon } from "@/icons/linkedin.icon";
import Link from "next/link";

export function Footer() {
  const social: LinksType[] = [
    {
      href:"https://github.com/fescherer",
      name: <GithubIcon />
    },
    {
      href:"https://www.linkedin.com/in/fescherer",
      name: <LinkedinIcon />
    }
  ]

  return (
  // <footer className="bg-base-100 p-12 text-base">
  //   <div className="m-auto max-w-screen-xl">
  //     <div className="flex flex-col justify-between md:flex-row">
  //       <div className="max-w-xl">
  //         <div className="flex flex-col items-center gap-4 sm:flex-row">
  //           <FennecTalesIcon />
  //           <FelipeSchererIcon />
  //         </div>
  //         <p className="mt-4">If you like techlogy, Fennec Tales Studio is your place. Here you will find code tutorials, good code practices and many high quality content. Check out our job at our channels in Youtube, Linkedin and Instagram. If you have a great idea and want to build it with us, contact for more info.</p>
  //       </div>

  //       <div className="grid max-w-fit grid-cols-1">
  //         {
  //           links.map((link, index) => (
  //             <Link className="link" key={index} href={link.href}>{link.name}</Link>
  //           ))
  //         }
  //       </div>
  //     </div>



  //   </div>

  // </footer>

    <div className="bg-base-200 p-10">
      <footer className="footer m-auto max-w-screen-xl text-base-content">
        <aside>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <FennecTalesIcon />
            <FelipeSchererIcon />
          </div>
          <p className="mt-2 max-w-xl">
            If you like techlogy, Fennec Tales Studio is your place. Here you will find code tutorials, good code practices and many high quality content. Check out our job at our channels in Youtube, Linkedin and Instagram. If you have a great idea and want to build it with us, contact for more info.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Projects</h6>
          <Link href="/calculator" className="link-hover link">Calculator</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="https://fennectales.com" className="link-hover link">Blog</Link>
          <Link href="https://www.felipescherer.com" className="link-hover link">About Us</Link>
          <Link href="https://www.felipescherer.com" className="link-hover link">Support</Link>
          <Link href="https://www.fennectales.com/terms-of-use" className="link-hover link">Terms and Conditions</Link>
        </nav>
      </footer>

      <div className="divider" />

      <div className="flex flex-col items-center">
        <div className="flex gap-1">
          {
            social.map((social, index) => (
              <Link key={index} target="_blank" className="btn btn-circle btn-sm box-content text-base-content" href={social.href}>{social.name}</Link>
            ))
          }
        </div>
        <span>Copyright © 🞄2023 - 2024</span>
      </div>
    </div>
  )
}
