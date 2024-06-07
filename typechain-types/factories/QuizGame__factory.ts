/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../common";
import type { QuizGame, QuizGameInterface } from "../QuizGame";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_question",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_hashedAnswer",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_answer",
        type: "string",
      },
    ],
    name: "guess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "question",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600581526020017f3078313233000000000000000000000000000000000000000000000000000000815250600290816200004a919062000362565b5060405162000f1c38038062000f1c8339818101604052810190620000709190620005e8565b6200008c67d75b93d1582a9c5560c01b620000e560201b60201c565b620000a86792b216789b92258660c01b620000e560201b60201c565b8160009081620000b9919062000362565b50620000d667a750aa51527e6b5660c01b620000e560201b60201c565b8060018190555050506200064e565b50565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200016a57607f821691505b60208210810362000180576200017f62000122565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ea7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001ab565b620001f68683620001ab565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002436200023d62000237846200020e565b62000218565b6200020e565b9050919050565b6000819050919050565b6200025f8362000222565b620002776200026e826200024a565b848454620001b8565b825550505050565b600090565b6200028e6200027f565b6200029b81848462000254565b505050565b5b81811015620002c357620002b760008262000284565b600181019050620002a1565b5050565b601f8211156200031257620002dc8162000186565b620002e7846200019b565b81016020851015620002f7578190505b6200030f62000306856200019b565b830182620002a0565b50505b505050565b600082821c905092915050565b6000620003376000198460080262000317565b1980831691505092915050565b600062000352838362000324565b9150826002028217905092915050565b6200036d82620000e8565b67ffffffffffffffff811115620003895762000388620000f3565b5b62000395825462000151565b620003a2828285620002c7565b600060209050601f831160018114620003da5760008415620003c5578287015190505b620003d1858262000344565b86555062000441565b601f198416620003ea8662000186565b60005b828110156200041457848901518255600182019150602085019450602081019050620003ed565b8683101562000434578489015162000430601f89168262000324565b8355505b6001600288020188555050505b505050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b620004838262000467565b810181811067ffffffffffffffff82111715620004a557620004a4620000f3565b5b80604052505050565b6000620004ba62000449565b9050620004c8828262000478565b919050565b600067ffffffffffffffff821115620004eb57620004ea620000f3565b5b620004f68262000467565b9050602081019050919050565b60005b838110156200052357808201518184015260208101905062000506565b60008484015250505050565b6000620005466200054084620004cd565b620004ae565b90508281526020810184848401111562000565576200056462000462565b5b6200057284828562000503565b509392505050565b600082601f8301126200059257620005916200045d565b5b8151620005a48482602086016200052f565b91505092915050565b6000819050919050565b620005c281620005ad565b8114620005ce57600080fd5b50565b600081519050620005e281620005b7565b92915050565b6000806040838503121562000602576200060162000453565b5b600083015167ffffffffffffffff81111562000623576200062262000458565b5b62000631858286016200057a565b92505060206200064485828601620005d1565b9150509250929050565b6108be806200065e6000396000f3fe6080604052600436106100385760003560e01c806312065fe0146100555780633fad9ae0146100805780634eee59b3146100ab5761003f565b3661003f57005b610053678cd97d4e04a3a9d360c01b6100d4565b005b34801561006157600080fd5b5061006a6100d7565b6040516100779190610455565b60405180910390f35b34801561008c57600080fd5b5061009561011b565b6040516100a29190610500565b60405180910390f35b3480156100b757600080fd5b506100d260048036038101906100cd9190610591565b6101a9565b005b50565b60006100ed67d362dc6accdc329660c01b6100d4565b61010167c430db22843bd0b960c01b6100d4565b61011567cf65b2301d9f330960c01b6100d4565b47905090565b600080546101289061060d565b80601f01602080910402602001604051908101604052809291908181526020018280546101549061060d565b80156101a15780601f10610176576101008083540402835291602001916101a1565b820191906000526020600020905b81548152906001019060200180831161018457829003601f168201915b505050505081565b6101bd67c311218d7f4446e060c01b6100d4565b6101d1679c8e80f2c2cf86c760c01b6100d4565b6101e567e21c6244d08876b960c01b6100d4565b6101f967b0708a3fac9b213860c01b6100d4565b6001548282600260405160200161021293929190610715565b6040516020818303038152906040528051906020012014610268576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025f90610787565b60405180910390fd5b61027c67d198d28add2d9b7460c01b6100d4565b6102906768b2248b5aed23c160c01b6100d4565b6102a467cecd31479727f3cb60c01b6100d4565b6102b867a68e766a33e86f5660c01b6100d4565b600047036102fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f2906107f3565b60405180910390fd5b61030f67a694c591ab09bd5560c01b6100d4565b61032367b9f5658d3abd97df60c01b6100d4565b6103376741920da5c1d36a8260c01b6100d4565b600047106104235761035367479b4b974b8a0df360c01b6100d4565b6103676771b00de1429d39f560c01b6100d4565b61037b674841207de691287760c01b6100d4565b60003373ffffffffffffffffffffffffffffffffffffffff16476040516103a190610844565b60006040518083038185875af1925050503d80600081146103de576040519150601f19603f3d011682016040523d82523d6000602084013e6103e3565b606091505b505090506103fb67174bce8c8c0b4ee260c01b6100d4565b61040f677b08d9292cad554860c01b6100d4565b8061041d5761041c610859565b5b50610438565b6104376733bb87c26a03212760c01b6100d4565b5b5050565b6000819050919050565b61044f8161043c565b82525050565b600060208201905061046a6000830184610446565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156104aa57808201518184015260208101905061048f565b60008484015250505050565b6000601f19601f8301169050919050565b60006104d282610470565b6104dc818561047b565b93506104ec81856020860161048c565b6104f5816104b6565b840191505092915050565b6000602082019050818103600083015261051a81846104c7565b905092915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126105515761055061052c565b5b8235905067ffffffffffffffff81111561056e5761056d610531565b5b60208301915083600182028301111561058a57610589610536565b5b9250929050565b600080602083850312156105a8576105a7610522565b5b600083013567ffffffffffffffff8111156105c6576105c5610527565b5b6105d28582860161053b565b92509250509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061062557607f821691505b602082108103610638576106376105de565b5b50919050565b600081905092915050565b82818337600083830152505050565b6000610664838561063e565b9350610671838584610649565b82840190509392505050565b60008190508160005260206000209050919050565b6000815461069f8161060d565b6106a9818661063e565b945060018216600081146106c457600181146106d95761070c565b60ff198316865281151582028601935061070c565b6106e28561067d565b60005b83811015610704578154818901526001820191506020810190506106e5565b838801955050505b50505092915050565b6000610722828587610658565b915061072e8284610692565b9150819050949350505050565b7f496e636f727265637420616e7377657200000000000000000000000000000000600082015250565b600061077160108361047b565b915061077c8261073b565b602082019050919050565b600060208201905081810360008301526107a081610764565b9050919050565b7f4e6f2062616c616e6365206c6566740000000000000000000000000000000000600082015250565b60006107dd600f8361047b565b91506107e8826107a7565b602082019050919050565b6000602082019050818103600083015261080c816107d0565b9050919050565b600081905092915050565b50565b600061082e600083610813565b91506108398261081e565b600082019050919050565b600061084f82610821565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea264697066735822122080f949e523c7eefe66a52db369774646d67cf79b1ec97396f86ac1e4440f2ebf64736f6c63430008180033";

type QuizGameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuizGameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QuizGame__factory extends ContractFactory {
  constructor(...args: QuizGameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _question: string,
    _hashedAnswer: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _question,
      _hashedAnswer,
      overrides || {}
    );
  }
  override deploy(
    _question: string,
    _hashedAnswer: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_question, _hashedAnswer, overrides || {}) as Promise<
      QuizGame & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): QuizGame__factory {
    return super.connect(runner) as QuizGame__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuizGameInterface {
    return new Interface(_abi) as QuizGameInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): QuizGame {
    return new Contract(address, _abi, runner) as unknown as QuizGame;
  }
}
