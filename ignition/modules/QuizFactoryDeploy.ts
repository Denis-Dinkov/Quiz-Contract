import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const QuizFactoryDeploy = buildModule("LockModule", (m) => {
  const QuizFactory = m.contract("QuizFactory");

  return { QuizFactory };
});

export default QuizFactoryDeploy;
