import QuizPage from "@/components/Quiz/QuizPage"
import universalCounter from "@/app/data/nouns/universalCounter"

const page = () => {
  return (
    <QuizPage quizQuestions={universalCounter}/>
  )
}

export default page