import { useState, useCallback } from "react";
import questions from "../assets/question.js";
import QuestionAndAnswers from "./QuestionAndAnswers.jsx";
import QuizComplete from "./QuizComplete.jsx";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestion = userAnswer.length;

  const quizIsComplete = questions.length === userAnswer.length;

  const handleAnswer = useCallback(function (selectedAnswer) {
    setUserAnswer((preAnswers) => {
      return [...preAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleAnswer(null),
    [handleAnswer]
  );
  if (quizIsComplete) {
    return <QuizComplete userAnswer={userAnswer} />
  }

  return (
    <div className="quiz">
      
      <QuestionAndAnswers
        key={activeQuestion}
        index={activeQuestion}  
        onSelectAnswers={handleAnswer}
        handleSkipAnswers={handleSkipAnswer}
      />
    </div>
  );
}
