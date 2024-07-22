import React, { useState } from 'react'
import quizData from './quizData';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const handleAnswerClick = (option) => {
        if (option === quizData[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setResult(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {result ? (
                <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
                    <p className="text-lg">You scored {score} out of {quizData.length}</p>
                </div>
            ) : (
                <div className="w-full max-w-xl p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-center mb-6">{quizData[currentQuestionIndex].question}</h2>
                    <div className="flex flex-col space-y-4">
                        {quizData[currentQuestionIndex].options.map((option) => (
                            <button 
                                className="w-full py-2 px-4 border border-blue-500 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" 
                                key={option} 
                                onClick={() => handleAnswerClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
