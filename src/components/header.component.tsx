import Image from "next/image";

export function Header() {
  return (
    <header className="bg-base-100 p-4">
      <Image unoptimized width={349} height={103} alt="Fennec Tales Studio logo" src="/logo.svg" className="w-60"/>
    </header>
  )
}
