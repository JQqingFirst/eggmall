$(function() {
  $(document).on('click', 'div.sex', function() {
    $('div.sex-popup').show()
    $('div.popup-model').show()
  })
  $(document).on('click', 'div.username', function() {
    $('div.username-popup').show()
    $('div.popup-model').show()
  })
  $(document).on('click', 'div.popup-model', function() {
    $('div.sex-popup').hide()
    $('div.username-popup').hide()
    $('div.popup-model').hide()
  })
  $(document).on('click', 'div.address-info-cell', function() {
    location.href = '../address/list.html'
  })
  $(document).on('click', 'div.phone-info-cell', function() {
    location.href = './changephone.html'
  })
  $(document).on('click', 'div.login-info-cell', function() {
    location.href = './changepassword.html'
  })
})