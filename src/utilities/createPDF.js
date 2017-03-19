let jsPDF = require('jspdf')

function createPDF(state) {
  let answers = state.map(elem => {
    return {
      "issue": elem.statement,
      "answer": elem.answer
    }
  })
  console.log(answers)
  let doc = new jsPDF("portrait")

  doc.setFontSize(20)
  doc.text(15, 20, "Summary of answers from 'Can the Law Help Me?'")
  doc.setFontSize(12)
  doc.setLineWidth(150)
  doc.text(15, 32, "Testing!!!")
  doc.text(15, 52, JSON.stringify(answers))
  doc.save('answers.pdf')
}

module.exports = createPDF
