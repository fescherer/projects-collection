import Image from "next/image";

export function Footer() {
  return (
    <footer className="p-4">
      <Image unoptimized width={202} height={38} src="/felipe-scherer-logo.svg" alt="Felipe Scherer logo"/>
    </footer>
  )
}