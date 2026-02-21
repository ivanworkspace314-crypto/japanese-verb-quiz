import QuizCatalog from '@/components/Navigation/QuizCatalog';

export default function Home() {
  const quizCategories = [
    {
      title: 'Transitive & Intransitive Verbs',
      description: 'Practice verb pairs and usage',
      href: '/verbs',
      emoji: '🔄',
    },
    {
      title: 'Days of the Week',
      description: 'Learn Japanese days: Monday to Sunday',
      href: '/nouns/daysOfWeek',
      emoji: '📅',
    },
    {
      title: 'Universal Counter',
      description: 'Count from objects from one to ten',
      href: '/nouns/universalCounter',
      emoji: '🔢',
    },
  ];

  return <QuizCatalog categories={quizCategories} />;
}
