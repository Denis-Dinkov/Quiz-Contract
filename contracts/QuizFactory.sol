// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./QuizGame.sol";

contract QuizFactory {
    QuizGame[] public quizzes;

    constructor() payable {}

    function createQuiz(
        string memory question,
        bytes32 hashedAnswer
    ) public payable {
        QuizGame quiz = new QuizGame{value: msg.value}(question, hashedAnswer);
        quizzes.push(quiz);
    }

    function getQuizzes() public view returns (QuizGame[] memory) {
        return quizzes;
    }
}
