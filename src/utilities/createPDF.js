let jsPDF = require('jspdf')

function createPDF(state) {
  let answers = state.map(elem => {
    return {
      "issue": elem.statement,
      "answer": elem.answer
    }
  })
  console.log(answers)
  let doc = new jsPDF()

  doc.text('tsting')
  doc.save('answers.pdf')
}

module.exports = createPDF
