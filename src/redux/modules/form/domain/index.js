import { map } from 'lodash'

export const updateAnswers = (categories = {}, categoryId, questionId, answer) => {
  return map(
    categories,
    (category) => {
      return (category.id === categoryId)
        ? {
          ...category,
          questions: map(
            category.questions,
            (question) => {
              return (question.id === questionId)
                ? {
                  ...question,
                  answer
                }
                : question
            }
          )
        }
        : category
    }
  )
}
