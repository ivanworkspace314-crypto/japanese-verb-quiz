import QuizCatalog from '@/components/Navigation/QuizCatalog';

export default function NounsPage() {
  const nounCategories = [
    {
      title: 'Days of the Week',
      description: 'Learn Japanese days: Monday to Sunday',
      href: '/nouns/daysOfWeek',
      emoji: '📅',
    },
    {
      title: 'Universal Counter',
      description: 'Count objects from one to ten',
      href: '/nouns/universalCounter',
      emoji: '🔢',
    },
  ];

  return <QuizCatalog categories={nounCategories} />;
}