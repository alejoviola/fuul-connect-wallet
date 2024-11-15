import { FUUL_USER_AUTH_TOKEN_KEY } from "@components/modules/auth/constants";
import { saveSignedMessage } from "@components/modules/auth/utils";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import {
  DynamicContextProps,
  getAuthToken,
} from "@dynamic-labs/sdk-react-core";
import Cookies from "js-cookie";
import { onLogout } from "../../modules/auth/utils";

export const commonDynamicContextProps: DynamicContextProps["settings"] = {
  appName: "Fuul",
  environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID as string,
  // @ts-ignore
  walletConnectors: [EthereumWalletConnectors],
  shadowDOMEnabled: false,
  siweStatement:
    "By signing this transaction, you acknowledge that you have read and agree to the applicable terms of use found at www.fuul.xyz/terms.",
  eventsCallbacks: {
    onSignedMessage: (params) => {
      saveSignedMessage(params.messageToSign, params.signedMessage);
    },
    onLogout,
    onAuthSuccess: () => {
      const authToken = getAuthToken();
      Cookies.set(FUUL_USER_AUTH_TOKEN_KEY, authToken as string, {
        expires: 1,
      });
    },
  },
};
