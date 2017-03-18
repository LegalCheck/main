require('dotenv').config()
const restify = require('restify')
const fs = require('fs')
const corsMiddleware = require('restify-cors-middleware')
const low = require('lowdb')
const nodemailer = require('nodemailer')

const db = low('db.json')
db.defaults({
  questions: [
    {
      "id": 1,
      "question": "What is your name?",
      "version": 1
    },
    {
      "id": 2,
      "question": "What is your quest?",
      "version": 1
    },
    {
      "id": 3,
      "question": "What is your favourite colour?",
      "version": 1
    }
  ],
  answers: []
}).write()

const server = restify.createServer({
  name: 'LegalCheckUp'
})

server.use(restify.queryParser())
server.use(restify.gzipResponse())
server.use(restify.bodyParser())

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['http://localhost', 'http://localhost:3000'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})

server.pre(cors.preflight)
server.use(cors.actual)

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAILER_ACCOUNT,
      pass: process.env.MAILER_PW
    }
})

function sendForm (req, res, next) {
  res.send(db.get('questions'))

  return next()
}

function send (req, res, next) {
  res.send({
    formId: req.params.formId
  })
  return next()
}

function sendMail (req, res, next) {
  const mailOptions = {
      from: process.env.MAILER_ADDRESS,
      to: process.env.MAILER_RECIPIENT,
      subject: 'You got mail!',
      text: 'This is the body of the email',
      html: '<b>This is the body of the email right here.</b>'
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error)
        res.send(400)
        return next()
    } else {
        console.log('Message sent: ' + info.response)
        res.send(204)
        return next()
    }
  })
}

function putAnswers (req, res, next) {
  db.get('answers').push({
    id: req.params.formId,
    responses: []
  }).write()

  const questions = db.get('questions').value()

  res.send(questions)

  return next()
}

function putAnswer (req, res, next) {

  return next()
}

server.put('/forms/:formId', putAnswers)
server.patch('/forms/:formId', putAnswer)
server.get('/mailer', sendMail)

server.listen(3001)
