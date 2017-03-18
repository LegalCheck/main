export const getForm = (state = {}) => {
  const { form = {} } = state

  return form.questions
}

export const isLoaded = (state = {}) => {
  const {form = {} } = state

  return form.formFetched
}
