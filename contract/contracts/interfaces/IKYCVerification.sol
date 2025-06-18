// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


interface IKYCVerification {
  function checkKYC(address user) external view returns (bool);
}
