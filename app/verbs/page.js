import QuizPage from "@/components/Quiz/QuizPage"
import transIntransVerbQuiz from "../data/transIntransVerbQuiz"

const page = () => {
  return (
    <QuizPage quizQuestions={transIntransVerbQuiz}/>
  )
}

export default page