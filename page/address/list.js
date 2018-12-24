$(function() {
  $(document).on('click', 'span.van-radio__input', function() {
    $(this)
      .find('i.van-icon')
      .removeClass('van-icon-check')
      .addClass('van-icon-checked')
      .parentsUntil('div.van-address')
      .siblings()
      .find('i.van-icon')
      .removeClass('van-icon-checked')
      .addClass('van-icon-check')
    $(this)
      .find('input.van-radio__control')
      .attr("checked", true)
      .parentsUntil('div.van-address')
      .siblings()
      .find('input.van-radio__control')
      .attr("checked", false)
  })

  $(document).on('click', 'button.van-address-list__add', function() {
    location.href = './index.html'
  })

})