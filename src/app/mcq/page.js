'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLogic from '../authLogic/page';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "2 + 2 equals?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

export default AuthLogic(function MCQComponent() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected('');
    } else {
      setShowResult(true);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    router.push('/login');
  };

  useEffect(() => {
    const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl relative">
      {/* Logout Button */}
      <button
        onClick={handleLogOut}
        className="absolute top-4 right-4 text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>

      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h2>
          <p className="text-lg">Your Score: <span className="font-semibold">{score}</span> / {questions.length}</p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-6">{questions[current].question}</h3>
          <div className="space-y-4">
            {questions[current].options.map((opt) => (
              <label
                key={opt}
                className={`block border px-4 py-2 rounded-lg cursor-pointer transition ${
                  selected === opt ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
          <button
            disabled={!selected}
            onClick={handleSubmit}
            className={`mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md transition ${
              !selected ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
});
