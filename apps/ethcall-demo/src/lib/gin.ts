import { Provider } from 'ethcall'
import { ethers } from 'ethers'
import { GinProps } from './types'

const url = 'https://rpc-testnet.kcc.network'
const defaultProvider = new ethers.providers.JsonRpcProvider(url)
const multiProvider = new Provider()

export class Gin {
  chainId: number | undefined
  provider: ethers.providers.Provider
  multiProvider: Provider

  constructor(props?: GinProps) {
    const { provider } = props || {}

    this.provider = provider || defaultProvider
    this.multiProvider = multiProvider
  }

  public async init() {
    if (!this.provider) {
      throw Error('Not found provider')
    }

    await multiProvider.init(this.provider)
    const netWork = await this.provider.getNetwork()

    this.chainId = netWork.chainId
  }
}

const gin = new Gin()

export default gin
