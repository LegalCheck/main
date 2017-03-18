require('dotenv').config()
const restify = require('restify')
const fs = require('fs')
const corsMiddleware = require('restify-cors-middleware')
const low = require('lowdb')
const nodemailer = require('nodemailer')
const _ = require('lodash')

const adb = low('./data/admins.json')
adb.defaults(require('./defaults').admins).write()
const fdb = low('./data/form.json')
fdb.defaults(require('./defaults').form).write()
const rdb = low('./data/responses.json')
rdb.defaults(require('./defaults').responses).write()

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

function sendResults (req, res, next) {
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

function getById (items, id) {
  return _.find(
    items,
    function (item) { return item.id === id }
  ) || {}
}

function mapForm (layout, categories, questions) {
  return _.map(
    layout,
    function (category) {
      return _.assign(
        getById(categories, category.categoryId),
        {
          questions: _.map(
            category.questions,
            function (id) {
              return _.assign(
                {
                  id: id
                },
                _.get(questions, id, {})
              )
            }
          )
        }
      )
    }
  )
}

function startCheckup (req, res, next) {
  if (!rdb.get('responses').find({ id: req.params.formId }).value()) {
    rdb.get('responses').push({
      id: req.params.formId,
      responses: []
    }).write()
  }

  const categories = fdb.get('categories').value()
  const layout = fdb.get('layout').value()
  const questions = fdb.get('questions').value()
  const form = mapForm(layout, categories, questions)

  res.send(form)

  return next()
}

function updateAnswer (req, res, next) {

  return next()
}

server.put('/forms/:formId', startCheckup)
server.patch('/forms/:formId', updateAnswer)
server.get('/mailer', sendResults)

server.listen(3001)
