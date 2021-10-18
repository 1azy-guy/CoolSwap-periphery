const SwapRouterV2 = artifacts.require("SwapRouterV2");

const factoryAddress = "";
const WETH = "";

module.exports = async (deployer) => {
  await deployer.deploy(SwapRouterV2, factoryAddress, WETH);
};
