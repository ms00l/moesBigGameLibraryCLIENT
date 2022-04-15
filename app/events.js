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
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

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
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddGame,
  onDeleteGame,
  onIndexGame
}
