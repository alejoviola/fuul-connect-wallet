import {
  fuulClientFeeCollectorAddress,
  fuulFactoryContractAddress,
} from "@components/address";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { FuulFactoryAbi } from "@fuul/protocol-abis";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useAccount, useWriteContract } from "wagmi";

const Initialize_Button = () => {
  const { address } = useAccount();
  const { primaryWallet } = useDynamicContext();

  const { error: deployContractError, writeContract } = useWriteContract();

  const init = () => {
    writeContract?.({
      address: fuulFactoryContractAddress as `0x${string}`,
      abi: FuulFactoryAbi,
      functionName: "createFuulProject",
      args: [address, address, "example", fuulClientFeeCollectorAddress],
    });
  };

  useEffect(() => {
    if (deployContractError) {
      toast.error(deployContractError.message);
    }
  }, [deployContractError]);

  return (
    <button onClick={init} data-disabled={!!primaryWallet}>
      Initialize
    </button>
  );
};

export default Initialize_Button;
