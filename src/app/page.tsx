import { GithubIcon } from "@/icons/github.icon";
import { LinkedinIcon } from "@/icons/linkedin.icon";
import { YoutubeIcon } from "@/icons/youtube.icon";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This is a personal showcase projects I made though time, feel free to check it out in Github or here too. Check my socials
          </p>
          <Link href="/project-list" className="btn btn-primary">Project list</Link>
          <div className="mt-10 flex justify-center gap-2">
            <Link href="https://github.com/fescherer" target="_blank" className="btn btn-circle"><GithubIcon /></Link>
            <Link href="https://www.linkedin.com/in/fescherer" target="_blank" className="btn btn-circle"><LinkedinIcon /></Link>
            <Link href="https://www.youtube.com" target="_blank" className="btn btn-circle"><YoutubeIcon /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
