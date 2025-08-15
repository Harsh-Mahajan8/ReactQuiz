import { useRef } from "react";

export default function Answers({
  answer,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answer];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul className="my-6">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "answered";
        }
        if (
          (answerState === "correct" || answerState === "incorrect") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li
            key={answer}
            className={`bg-indigo-300 hover:bg-purple-400 hover:text-white m-2 rounded-3xl ${cssClass}`}
          >
            <button
              className={`p-2 cursor-pointer `}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
