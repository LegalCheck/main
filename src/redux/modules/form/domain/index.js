export const updateAnswers = (answers = {}, formId, categoryId, questionId, answer) => {
  return {
    ...answers,
    [formId]: {
      ...(answers[formId] || {}),
      [questionId]: {
        categoryId,
        answer
      }
    }
  }
}
