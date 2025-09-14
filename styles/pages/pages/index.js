import { useState } from "react";
import questions from "../data/questions";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const question = questions[current];

  const handleAnswer = (answer) => {
    if (answer === question.correct) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, question]);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert(`Quiz Finished! Score: ${score + 1}/${questions.length}`);
      setCurrent(0);
      setScore(0);
      setWrongAnswers([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">My Quiz App</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <p className="mb-4">{question.question}</p>
        <div className="flex flex-col space-y-2">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4">Score: {score}</p>
    </div>
  );
}
