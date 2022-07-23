import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { Box } from 'rebass'

const SuspenseDemo = dynamic(() => import('../components/SuspenseDemo/SuspenseDemo'), { ssr: false })

export default function suspense() {
  return (
    <Box>
      <Link href={'/'}>Home</Link>
      <SuspenseDemo />
    </Box>
  )
}
