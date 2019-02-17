export default [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x01ffc9a7"
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06fdde03"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x081812fc"
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x095ea7b3"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x23b872dd"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x42842e0e"
  },
  {
    constant: true,
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6c0360eb"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x715018a6"
  },
  {
    constant: true,
    inputs: [],
    name: "startTime",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x78e97925"
  },
  {
    constant: true,
    inputs: [],
    name: "genZeroInterval",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8c474392"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8da5cb5b"
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8f32d59b"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x95d89b41"
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address"
      },
      {
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa22cb465"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      },
      {
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xb88d4fde"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "lastStraw",
    outputs: [
      {
        name: "timestamp",
        type: "uint256"
      },
      {
        name: "counter",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xced6ef52"
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xe985e9c5"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2fde38b"
  },
  {
    inputs: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "symbol",
        type: "string"
      },
      {
        name: "_genZeroInterval",
        type: "uint256"
      },
      {
        name: "_genZeroLimit",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        name: "tokenid",
        type: "uint256"
      }
    ],
    name: "Moof",
    type: "event",
    signature:
      "0x307aef90a83e1fcc686679aaa631cda0658b3eec3fbe77f340e2c1485da107a3"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event",
    signature:
      "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event",
    signature:
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event",
    signature:
      "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event",
    signature:
      "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_straws",
        type: "address"
      }
    ],
    name: "setStraws",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x70fce538"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_baseURI",
        type: "string"
      }
    ],
    name: "setBaseURI",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x55f804b3"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xc87b56dd"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x18160ddd"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x70a08231"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6352211e"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x2f745c59"
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenByIndex",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x4f6ccce7"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getDNA",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x5bb209a5"
  },
  {
    constant: true,
    inputs: [],
    name: "blockTime",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x48b15166"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getMoofactoryPeriod",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x55ced49d"
  },
  {
    constant: false,
    inputs: [
      {
        name: "strawId1",
        type: "uint256"
      },
      {
        name: "strawId2",
        type: "uint256"
      }
    ],
    name: "moof",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x5e150b4a"
  },
  {
    constant: false,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "generatedStraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xec6d916f"
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "nextStraw",
    outputs: [
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x536452de"
  },
  {
    constant: true,
    inputs: [],
    name: "genZeroCount",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3b91cae9"
  }
];