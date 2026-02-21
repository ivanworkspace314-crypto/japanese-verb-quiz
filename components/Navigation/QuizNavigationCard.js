import Link from 'next/link';

export default function QuizNavigationCard({ title, description, href, emoji }) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
    >
      <div className="mb-4 text-4xl">{emoji}</div>
      <h2 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-blue-600 dark:text-slate-50 dark:group-hover:text-blue-400">
        {title}
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </Link>
  );
}
