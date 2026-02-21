import QuizNavigationCard from './QuizNavigationCard';

export default function QuizCatalog({ categories }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-50">
            Japanese Quiz
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Select a quiz to start practicing
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <QuizNavigationCard
              key={category.href}
              title={category.title}
              description={category.description}
              href={category.href}
              emoji={category.emoji}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
