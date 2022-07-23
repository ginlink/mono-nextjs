// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Contract } from 'ethcall'
import type { NextApiRequest, NextApiResponse } from 'next'
import erc20Abi from '@/abis/erc20.json'
import gin from '@/lib/gin'

type Data = {
  data: string[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.time('111')
  await gin.init()
  console.timeEnd('111')

  const daiAddress = '0x2b7ea20ef2892f2d4894cab980b71301fa9b653a'
  const daiContract = new Contract(daiAddress, erc20Abi)

  const calls = []
  for (let i = 0; i < 100; ++i) {
    calls.push(daiContract.balanceOf('0x568b0B2793E775461052f295868198b186A95054'))
  }

  // const daiBalanceCall = daiContract.balanceOf('0x568b0B2793E775461052f295868198b186A95054')
  // const daiBalanceCall2 = daiContract.balanceOf('0x13F0b2a9691bB72cae72616b39E798a824F18271')

  const data = (await gin.multiProvider.all(calls)) as string[]
  console.log('[chainId]:', gin.chainId)

  res.status(200).json({ data })
}
