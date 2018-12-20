$(function() {
  $(document).on('click', 'div.goods-bar-group', function() {
    $('#myModal').modal('show');
    $('button.model-join').show()
    $('button.model-buy').show()
    $('div.model-next').hide()
  })
  $(document).on('click', '#joinCar', function() {
    $('#myModal').modal('show')
    $('button.model-join').show()
    $('button.model-buy').hide()
    $('div.model-next').hide()
  })
  $(document).on('click', '#buyNow', function() {
    $('#myModal').modal('show');
    $('button.model-join').hide()
    $('button.model-buy').hide()
    $('div.model-next').show()
  })
  // 减
  $('div.van-stepper').on('click', 'button.van-stepper__minus', function() {
    if ($('button.van-stepper__minus').hasClass('van-stepper__minus--disabled')) {
      return false
    }
    let _value = $('input.van-stepper__input').val();
    _value--
    if (_value == 1) {
      $('button.van-stepper__minus').addClass('van-stepper__minus--disabled')
    }
    $('input.van-stepper__input').val(_value)
  })
  // 加
  $('div.van-stepper').on('click', 'button.van-stepper__plus', function() {
    let _value = $('input.van-stepper__input').val();
    if (_value == 1) {
      $('button.van-stepper__minus').removeClass('van-stepper__minus--disabled')
    }
    _value++
    $('input.van-stepper__input').val(_value)
  })

  function isAddCar(num) {
    let _value = Number($('div.van-info').text()) + num
    $('div.van-info').text(_value);
    if (_value) {
      $('div.van-info').show()
    } else {
      $('div.van-info').hide()
    }
  }
  $('#myModal').on('click', 'button.model-join', function() {
    let _value = $('input.van-stepper__input').val();
    isAddCar(_value)
  })
})