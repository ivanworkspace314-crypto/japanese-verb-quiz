'use client';

import { useState } from 'react';
import QuizItem from '../components/QuizItem';
import quizGroups from './data/quizGroups';

export default function GrammarQuiz() {
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const toggleAnswer = (id) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-4xl">
        {quizGroups.map((group) =>
          group.items.map((item, index) => (
            <QuizItem
              key={item.id}
              number={index === 0 ? group.number : undefined}
              question={item.question}
              english={item.english}
              answer={item.answer}
              id={item.id}
              expandedAnswers={expandedAnswers}
              toggleAnswer={toggleAnswer}
            />
          )),
        )}
      </div>
    </main>
  );
}
