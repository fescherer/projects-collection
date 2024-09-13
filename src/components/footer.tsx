import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-base-100 p-4">
      <Image unoptimized width={202} height={38} src="/felipe-scherer-logo.svg" alt="Felipe Scherer logo"/>
    </footer>
  )
}
