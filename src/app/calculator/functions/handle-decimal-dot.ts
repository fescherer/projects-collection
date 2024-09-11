export default function handleDecimalDot(n: string, newItem: string): string {
  return n.includes(newItem) ? n : !n ? '0' + newItem : n + newItem
}
