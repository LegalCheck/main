let jsPDF = require('jspdf')

function createPDF(results) {
  let answers = results.map(elem => {
    return {
      "issue": elem.statement,
      "answer": elem.answer
    }
  })
  let doc = new jsPDF("portrait")

    var lineHeight = 10;
    var currentHeight = 65;

    doc.text("Summary of answers from 'Can the Law Help Me?'", 15, 55)

    doc.setFontSize(15)

    answers.forEach(function (element) {
      doc.text(element.issue, 20, currentHeight)
      currentHeight += 10
      doc.text(element.answer, 20, currentHeight)
      currentHeight += 10
    })
  doc.save('answers.pdf')
}

module.exports = createPDF
