import React, { Suspense } from 'react'
import { Box } from 'rebass'
import { Loader } from '../Loader'
import EthCall from './EthCall'

export default function SuspenseDemo() {
  return (
    <Box>
      <Suspense fallback={<Loader />}>
        <EthCall />
      </Suspense>
    </Box>
  )
}
