'use strict'

const libUi = require('./ui.js')
const libApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields')
const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  libApi
    .signUp(data)
    .then(() => libUi.onSignUpSuccess())
    .catch(() => libUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  libApi
    .signIn(data)
    .then((response) => libUi.onSignInSuccess(response))
    .catch(() => libUi.onSignInFailure())
}

const onSignOut = function (event) {
  libApi
    .signOut()
    .then((response) => libUi.onSignOutSuccess(response))
    .catch(() => libUi.onSignOutFailure())
}

const onChangePassword = function (event) {
  libApi
    .changePassword()
    .then((response) => libUi.onChangePasswordSuccess(response))
    .catch(() => libUi.onChangePasswordFailure())
}

const onAddGame = function (event) {
  console.log('add_Game')
  event.preventDefault()
  const form = event.target
  console.log('add_Game form', form)
  const data = getFormFields(form)
  console.log('add_Game data', data)
  libApi
    .addGame(data)
    .then((response) => libUi.onAddGameSuccess(response))
    .catch(() => libUi.onAddGameFailure())
}

const onDeleteGame = function (event) {
  libApi
    .deleteGame()
    .then(() => libUi.onDeleteGameSuccess())
    .catch(() => libUi.onDeleteGameFailure())
}

const onIndexGame = function (event) {
  libApi
    .indexGame()
    .then((response) => libUi.onIndexGameSuccess(response))
    .catch(() => libUi.onIndexGameFailure())
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  libApi
    .updateGame(data)
    .then((response) => libUi.onUpdateGameSuccess(response))
    .catch(() => libUi.onUpdateGameFailure())
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddGame,
  onDeleteGame,
  onIndexGame,
  onUpdateGame
}
