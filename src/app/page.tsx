"use client";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import styles from "./page.module.css";
import { commonDynamicContextProps } from "@components/context/dynamic/dynamic-context";
import { config } from "@components/config/wagmi";
import { WagmiProvider } from "wagmi";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Initialize_Button from "@components/components/Initialize_Button";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

export default function Home() {
  return (
    <DynamicContextProvider settings={commonDynamicContextProps}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <div className={styles.page}>
              <main className={styles.main}>
                <DynamicWidget />
                <Initialize_Button />
              </main>
            </div>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
