// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract QuizGame {
    string public question;
    bytes32 hashedAnswer;
    string salt = "0x123";

    constructor(string memory _question, bytes32 _hashedAnswer) payable {
        question = _question;
        hashedAnswer = _hashedAnswer;
    }

    function guess(string calldata _answer) external {
        require(
            keccak256(abi.encodePacked(_answer, salt)) == hashedAnswer,
            "Incorrect answer"
        );

        require(address(this).balance != 0, "No balance left");

        if (address(this).balance >= 0) {
            (bool sent, ) = payable(msg.sender).call{
                value: address(this).balance
            }("");
            assert(sent);
        }
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    fallback() external payable {}
    receive() external payable {}
}
