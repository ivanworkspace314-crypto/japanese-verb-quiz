export default function QuizItem({ number, question, english, answer, id, expandedAnswers, toggleAnswer }) {
  const isExpanded = expandedAnswers[id];
  const answerId = `${id}-answer`;

  return (
    <div className="mx-auto mb-4 w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {number && (
        <p className="mb-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          {number}.
        </p>
      )}
      <p className="text-lg font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
        {question}
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        {english}
      </p>

      <div className="mt-3">
        <button
          type="button"
          onClick={() => toggleAnswer(id)}
          aria-expanded={isExpanded}
          aria-controls={answerId}
          className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-left text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        >
          <span>{isExpanded ? 'Hide Answer' : 'Show Answer'}</span>
          <span className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
            ▾
          </span>
        </button>
        <div
          id={answerId}
          className={`overflow-hidden rounded-b-lg bg-emerald-50 px-4 text-emerald-800 transition-all duration-200 dark:bg-emerald-950 dark:text-emerald-200 ${isExpanded ? 'mt-2 max-h-24 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        >
          <p className="text-base font-semibold">{answer}</p>
        </div>
      </div>

    </div>
  );
}
