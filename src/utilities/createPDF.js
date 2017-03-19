function createPDF(state) {
  let answers = state.map(elem => {
    return {
      "issue": elem.statement,
      "answer": elem.answer
    }
  })
  console.log(answers)
}

module.exports = createPDF
