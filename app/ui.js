'use strict'
const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>welcome to the sesh</p>')
  $('#sign-up-form, #sign-in-form').hide()
  $('#changPW-form, #signout').show()
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>yo you messed up chief</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>welcome my brethren</p>')
  $('#auth-display').delay(3200).fadeOut(100)
  $('form').trigger('reset')
  $('#sign-up-form, #sign-in-form').hide()
  $('#signout, #changePW').show()
  $('#allEventForms').show()
  $('#addgame, #updategame').hide()
  $('#changePW').on('click', function () {
    $('#cPW').show()
  })
  $('#startaddbutton').on('click', function () {
    $('#addgame').show()
  })
  $('#startupdatebutton').on('click', function () {
    $('#updategame').show()
  })

  store.user = response.user
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>yeah no i dont got u on the list</p>')
}

const onSignOutSuccess = function () {
  $('#signout').hide()
  $('#auth-display').text('Signed out successfully')
  $('form').trigger('reset')
  $('#sign-in-form, #sign-up-form').show()
  $('#message').delay(3200).fadeOut(100)
  store.user = null
}

const onSignOutFailure = function (error) {
  $('#auth-display').text('Error on sign out')
  console.error('signOutFailure ran. Error is :', error)
}
const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>great job buddy pal friend bye for now!</p>')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>uh oh spaghettios</p>')
}

const onAddGameSuccess = function () {
  $('#eventStuff').html('<p>woahhhh you have that game thats so baller</p>')
}

const onAddGameFailure = function () {
  $('#eventStuff').html('<p>yeah thats a lie big dogg</p>')
}

const onDeleteGameSuccess = function () {
  $('#eventStuff').html('<p>game is no longer a thing</p>')
}

const onDeleteGameFailure = function () {
  $('#eventStuff').html('<p>cannot delete</p>')
}

const onIndexGameSuccess = function (response, responseData) {
  $('#eventStuff').html('<p>BOOM</p>')
  store.user = response.user
  const games = response.game
  let gameList = 'these are your games'
  games.forEach((element) => {
    gameList += `
    <section id="list">
      <div id="divTitle">Games</div>
      <p>Name: ${element.name}</p>
      <p>Console: ${element.console}</p>
      <p>Rating: ${element.rating}</p>
      <p>Review: ${element.review}</p>
      <p>Status: ${element.status}</p>
    </section>`
  })
  $('#eventStuff').html(gameList)
}

const onIndexGameFailure = function () {
  $('#eventStuff').html('<p>cannot index</p>')
}

const onUpdateGameSuccess = function () {
  $('#eventStuff').html('<p>yay girl slay</p>')
  $('form').trigger('reset')
}

const onUpdateGameFailure = function () {
  $('#eventStuff').html('<p>oopsie daisy</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onAddGameSuccess,
  onAddGameFailure,
  onDeleteGameSuccess,
  onDeleteGameFailure,
  onIndexGameSuccess,
  onIndexGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
