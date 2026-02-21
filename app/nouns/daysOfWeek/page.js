import QuizPage from "@/components/Quiz/QuizPage"
import daysOfWeekQuiz from "@/app/data/nouns/daysOfWeek.js"

const page = () => {
  return (
    <QuizPage quizQuestions={daysOfWeekQuiz}/>
  )
}

export default page