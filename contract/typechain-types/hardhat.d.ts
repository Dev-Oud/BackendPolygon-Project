/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IKYCVerification",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYCVerification__factory>;
    getContractFactory(
      name: "KYCVerification",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KYCVerification__factory>;

    getContractAt(
      name: "IKYCVerification",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYCVerification>;
    getContractAt(
      name: "KYCVerification",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.KYCVerification>;

    deployContract(
      name: "IKYCVerification",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IKYCVerification>;
    deployContract(
      name: "KYCVerification",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.KYCVerification>;

    deployContract(
      name: "IKYCVerification",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IKYCVerification>;
    deployContract(
      name: "KYCVerification",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.KYCVerification>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
