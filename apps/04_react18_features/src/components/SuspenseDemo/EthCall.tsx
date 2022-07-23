import React from 'react'
import { Box } from 'rebass'
import { wrapPromise } from '../../services/wrapPromise'
import { queryEthCall } from '../../services/api'

const res111 = wrapPromise(queryEthCall())

export default function EthCall() {
  const data = res111.read()

  return <Box>{data && JSON.stringify(data)}</Box>
}
