import Cookies from "js-cookie";
import {
  FUUL_USER_AUTH_TOKEN_KEY,
  FUUL_USER_SIGNATURE,
  FUUL_USER_SIGNED_MESSAGE,
} from "../constants";

export const onLogout = () => {
  Cookies.remove(FUUL_USER_AUTH_TOKEN_KEY);
  Cookies.remove(FUUL_USER_SIGNATURE);
  Cookies.remove(FUUL_USER_SIGNED_MESSAGE);
};

export const saveSignedMessage = (signedMessage: string, signature: string) => {
  Cookies.set(FUUL_USER_SIGNED_MESSAGE, signedMessage);
  Cookies.set(FUUL_USER_SIGNATURE, signature);
};

export const getUserSignature = (): string => {
  return Cookies.get(FUUL_USER_SIGNATURE) ?? "";
};

export const getUserSignedMessage = () => {
  return Cookies.get(FUUL_USER_SIGNED_MESSAGE) ?? "";
};
