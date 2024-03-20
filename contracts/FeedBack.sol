// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";


contract FeedbackDApp {
    constructor(){
        console.log("This is a Smart Contract");
    }

    struct Feedback {
        address sender;
        string message;
    }

    Feedback[] public feedbacks;

    event FeedbackReceived(address indexed sender, string message);

    function giveFeedback(string memory _message) public {
        feedbacks.push(Feedback(msg.sender, _message));
        emit FeedbackReceived(msg.sender, _message);
    }

    function getFeedbackCount() public view returns (uint) {
        return feedbacks.length;
    }

    function getFeedback(uint _index) public view returns (address, string memory) {
        require(_index < feedbacks.length, "Index out of bounds");
        Feedback memory feedback = feedbacks[_index];
        return (feedback.sender, feedback.message);
    }

    function getFeedbacks() public view returns (address[] memory, string[] memory) {
        address[] memory senders = new address[](feedbacks.length);
        string[] memory messages = new string[](feedbacks.length);
        for (uint i = 0; i < feedbacks.length; i++) {
            senders[i] = feedbacks[i].sender;
            messages[i] = feedbacks[i].message;
        }
        return (senders, messages);
    }
}

