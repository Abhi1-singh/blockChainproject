// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.27",
// };
// ===============================================
require("@nomiclabs/hardhat-waffle");
task ("accounts","Prints the list of accounts",async (taskArgs,hre)=>{
const accounts =await hre.ethers.getSigners();

for(const account of accounts){
  console.log(account.address)
}
})