$(function() {
  $(document).on('click', 'button.van-button--square', function() {
    $('div.cap-pay').show()
  })
  $(document).on('click', 'div.van-modal', function() {
    $('div.cap-pay').hide()
  })
})