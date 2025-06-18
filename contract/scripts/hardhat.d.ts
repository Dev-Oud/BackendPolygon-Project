import "hardhat/types/runtime";
import "@nomiclabs/hardhat-ethers";

declare module "hardhat/types/runtime" {
  interface HardhatRuntimeEnvironment {
    ethers: typeof import("ethers");
  }
}
