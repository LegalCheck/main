export const updateAnswers = (answers = {}, formId, item, answer) => {
  const { id, version } = item

  return {
    ...answers,
    [formId]: {
      ...(answers[formId] || {}),
      [`${id}:${version}`]: answer
    }
  }
}
