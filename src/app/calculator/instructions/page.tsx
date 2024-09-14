import { InstructionsWrapper } from '@/components/instructions-wrapper.component'
import Instructions from './instructions.mdx'

export default function InstructionsPage() {
  return (
    <InstructionsWrapper projectLink='/calculator'>
      <Instructions />
    </InstructionsWrapper>
  )
}
