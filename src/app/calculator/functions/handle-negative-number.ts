export default function handleNegativeNumber(n: string, setN: React.Dispatch<React.SetStateAction<string>>) {
  try {
    const newN = parseFloat(n)
    setN((newN * -1).toString())
  } catch(err) {
    console.log('Error transforming number into negative')
  }
}

