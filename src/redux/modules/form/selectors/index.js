import { reduce } from 'lodash'

const COMPLETE = 'COMPLETE'
const IN_PROGRESS = 'IN_PROGRESS'
const LOADED = 'LOADED'
const NOT_LOADED = 'NOT_LOADED'

export const getForm = (state = {}) => {
  const { form = {} } = state

  return form.categories
}

export const isLoaded = (state = {}) => {
  const {form = {} } = state

  return form.formFetched
}

const getStatus = (prog) => {
  const { answered, total } = prog

  if (total === 0) {
    return {
      ...prog,
      status: NOT_LOADED
    }
  }

  if (answered === 0) {
    return {
      ...prog,
      status: LOADED
    }
  }

  if (answered < total) {
    return {
      ...prog,
      status: IN_PROGRESS
    }
  }

  return {
    ...prog,
    status: COMPLETE
  }
}

export const progress = (state = {}) => {
  const { form: { categories = [] } = {} } = state
  const output = reduce(
    categories,
    (acc, category) => {
      return reduce(
        category.questions,
        (acc, question) => {
          return question.answer
            ? {
              answered: acc.answered + 1,
              total: acc.total + 1
            }
            : {
              ...acc,
              total: acc.total + 1
            }
        },
        acc
      )
    },
    {
      answered: 0,
      total: 0
    }
  )

  return getStatus(output)
}
