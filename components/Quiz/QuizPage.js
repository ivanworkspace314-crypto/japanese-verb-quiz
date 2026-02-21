'use client';

import { useEffect, useState } from 'react';
import QuizItem from '@/components/Quiz/QuizItem';
import randomize from '@/utility/randomize'

export default function QuizPage({quizQuestions, random = true}) {
  const [expandedAnswers, setExpandedAnswers] = useState({});
  const [randomizedQuizQuestions, setRandomizedQuizQuestions] = useState(quizQuestions);

  useEffect(() => {
    if (random) {
      const randomizedGroups = quizQuestions.map(group => ({
        ...group,
        items: randomize(group.items)
      }));
      setRandomizedQuizQuestions(randomizedGroups);
    }
  }, [quizQuestions, random]);

  const toggleAnswer = (id) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (

        randomizedQuizQuestions.map((group) =>
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
        )
  
  );
}
