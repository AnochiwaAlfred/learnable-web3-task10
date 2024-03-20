
const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const provider = deployer.provider;
    const accountBalance = await provider.getBalance(deployer.address);
    console.log("Deploying contracts with account:", deployer.address);
    console.log("Account Balance:", accountBalance.toString());


    try {
        const feedbackContractFactory = await hre.ethers.getContractFactory("FeedbackDApp");
        const feedbackContract = await feedbackContractFactory.deploy();
        // await feedbackContract.deployed();
        console.log("Contract deployed to:", feedbackContract.target);


        // fbCount = await feedbackContract.getFeedbackCount();
        // console.log(fbCount);

        // await feedbackContract.giveFeedback("New Feedback");
        // fbCount = await feedbackContract.getFeedbackCount();
        // console.log(fbCount);
        // newFB = await feedbackContract.getFeedback(0)
        // console.log(newFB);
        // fbs = await feedbackContract.getFeedbacks()
        // console.log(fbs);

        // await feedbackContract.giveFeedback("Second Feedback");
        // fbCount = await feedbackContract.getFeedbackCount();
        // console.log(fbCount);
        // newFB = await feedbackContract.getFeedback(0)
        // console.log(newFB);
        // fbs = await feedbackContract.getFeedbacks()
        // console.log(fbs);


        const { artifacts } = require("hardhat");
        const contractArtifact = await artifacts.readArtifact("FeedbackDApp");
        console.log(contractArtifact.abi);

        

    } catch (error) {
        console.error("Error deploying contract:", error);
    }

};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();