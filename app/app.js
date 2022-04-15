// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
'use strict'

const libEvents = require('./events')

$(() => {
  $('#gameAdd').on('submit', libEvents.onAddGame)
  $('#allEventForms').hide()
  $('#cPW, #changePW, #signout').hide()
  $('#sign-up-form').on('submit', libEvents.onSignUp)
  $('#sign-in-form').on('submit', libEvents.onSignIn)
})
