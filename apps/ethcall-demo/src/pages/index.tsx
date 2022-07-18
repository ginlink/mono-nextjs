import React from 'react'
import { Box } from '@ginlink/uilib'
import { Hello } from '@/components/Hello'
import { GradientTextDemo } from '@/components/GradientText'
// import { SentryTest, TestResponsive } from '@/components/Test'

export default function index() {
  return (
    <Box m={3}>
      <Hello />

      <GradientTextDemo />

      {/* <SentryTest /> */}

      {/* <TestResponsive /> */}
    </Box>
  )
}
