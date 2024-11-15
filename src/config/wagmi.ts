import {
  arbitrum,
  base,
  baseSepolia,
  bsc,
  celo,
  goerli,
  mainnet,
  mode,
  optimism,
  polygon,
  zksync,
} from "viem/chains";
import { createConfig, http } from "wagmi";

export const config = createConfig({
  chains: [
    mainnet,
    polygon,
    arbitrum,
    optimism,
    bsc,
    base,
    celo,
    zksync,
    mode,
    baseSepolia,
    goerli,
  ],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [bsc.id]: http(),
    [base.id]: http(),
    [celo.id]: http(),
    [zksync.id]: http(),
    [mode.id]: http(),
    //Testnet
    [baseSepolia.id]: http(),
    [goerli.id]: http(),
  },
});
