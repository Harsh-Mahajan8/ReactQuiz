import Answers from "./Answers";
import QuestionTime from "./QuestionTime";
import { useState } from "react";
import question from "../assets/question";

export default function QuestionAndAnswers({
  index,
  onSelectAnswers,
  handleSkipAnswers,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect != null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === question[index].answers[0],
      });

      setTimeout(() => {
        onSelectAnswers(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "incorrect";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <>
      <QuestionTime onTimeOut={answer.selectedAnswer === ""? handleSkipAnswers:null} timeOut={timer} mode = {answerState} />
      <h2>{question[index].text}</h2>
      <Answers
        answer={question[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </>
  );
}
