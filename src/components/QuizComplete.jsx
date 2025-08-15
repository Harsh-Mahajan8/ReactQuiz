import quizCompleteLogo from "../assets/quiz-complete.png";
import questions from "../assets/question.js";

export default function QuizComplete({ userAnswer }) {
  console.log("User answers:", userAnswer);
  const correctAns =  userAnswer.filter((answer, idx) => answer ===questions[idx].answers[0] );
  const skippedAns = userAnswer.filter((answer) => answer === null);
  const wrongAns = questions.length - (correctAns.length - skippedAns.length);
 
  return (
    <div className="summary">
      <img src={quizCompleteLogo} alt="Quiz completed" />
      <h3>Quiz Completed!</h3>
      <div className="summary-stats">
        <p>
          <span className="number text-6xl">{skippedAns.length}</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAns.length}</span>
          <span className="text">correctly answered</span>
        </p>
        <p>
          <span className="number">{wrongAns.length}</span>
          <span className="text">wrong</span>
        </p>
      </div>
      <ol className="pt-4 px-6">
        {userAnswer.map((answer, index) => {
          let cssClass =
            answer === questions[index].answers[0]
              ? "text-green-800"
              : "text-red-500";
          return (
            <li key={index}>
              <h4 className="bg-black text-white rounded-[50%] w-8 h-8 flex items-center justify-center mx-auto mt-5 my-3">
                {index + 1}
              </h4>
              <p className="question-Text">{questions[index].text}</p>
              <p className={`answer font-semibold ${cssClass}`}>{answer === null ? "Skipped" : answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
