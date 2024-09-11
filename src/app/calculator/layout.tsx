import { PropsWithChildren } from "react";
import { CalculatorProvider } from "./calculator.context";

export default function CalculatorLayout({ children,}: Readonly<PropsWithChildren>) {
  return (
    <CalculatorProvider>
      {children}
    </CalculatorProvider>
  );
}
