'use strict'

const libUi = require('./ui.js')
const libApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields')
const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

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

const onSignOut = function () {
  libApi
    .signOut()
    .then((response) => libUi.onSignOutSuccess(response))
    .catch(() => libUi.onSignOutFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  libApi
    .changePassword(data)
    .then(() => libUi.onChangePasswordSuccess())
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
  event.preventDefault()
  const id = getFormFields(event.target).game.id
  libApi
    .deleteGame(id)
    .then((response) => libUi.onDeleteGameSuccess(response))
    .catch(() => libUi.onDeleteGameFailure())
}

const onIndexGame = function (event) {
  libApi
    .indexGame()
    .then((response) => libUi.onIndexGameSuccess(response))
    .catch(() => libUi.onIndexGameFailure())
}

const onUpdateGame = function (event) {
  // use .set
  event.preventDefault()
  const updateGameForm = getFormFields(event.target)
  const id = updateGameForm.game.id
  const formData = getFormFields(event.target)

  libApi
    .updateGame(id, formData)
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
