$(function() {
  islist() // 列表是不是为空
  checkGoodsLength() // 计算商品数量.
  price() // 计算商品价格
  $(document).on('click', 'div.select-all', function() {
    if ($(this).find('div').hasClass('van-checkbox__icon--checked')) {
      $('div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    } else {
      $('div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
    }
    checkGoodsLength()
  })
  $('div.title').on('click', 'div.van-checkbox__icon', function() {
    if ($(this).hasClass('van-checkbox__icon--checked')) {
      $(this).parentsUntil('div.cart-container').find('div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    } else {
      $(this).parentsUntil('div.cart-container').find('div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
    }
    isAllCheck()
  })
  $('div.goods-list').on('click', 'div.van-checkbox__icon', function() {
    if ($(this).hasClass('van-checkbox__icon--checked')) {
      $(this).removeClass('van-checkbox__icon--checked')
      $(this).parentsUntil('div.shop').find('div.title div.van-checkbox__icon')
        .removeClass('van-checkbox__icon--checked')
    } else {
      $(this).addClass('van-checkbox__icon--checked')
    }
    isShop($(this))
  })

  function isShop(elem) { //  商铺
    var size = elem.parentsUntil('div.cart-container').find('div.van-checkbox__icon').length;
    var _size = elem.parentsUntil('div.shop').find('div.van-checkbox__icon--checked').length;
    if (size === _size + 1) {
      elem.parentsUntil('div.cart-container').find('div.title div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
    } else {
      elem.parentsUntil('div.cart-container').find('div.title div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    }
    isAllCheck()
  }

  function isAllCheck() { // 全局
    var size = $('div.van-checkbox__icon').length;
    var _size = $('div.shop div.van-checkbox__icon--checked').length;
    if (size === _size + 1) {
      $('div.select-all div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
    } else {
      $('div.select-all div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    }
    checkGoodsLength()
  }

  function checkGoodsLength() { // 计算商铺数量
    let goodlen = $('div.goods-list div.van-checkbox__icon--checked').length;
    if (goodlen) {
      $('div.button-wrap button').removeClass('van-button--disabled van-button--unclickable').find('span').html('结算（' + goodlen + ')')
    } else {
      $('div.button-wrap button').addClass('van-button--disabled van-button--unclickable').find('span').html('结算（0)')
    }
    return goodlen
  }

  function price() { // 计算商品价格
    var _price = 0;
    $('div.goods').each(function(index, value) {
      let _checked = $(value).find('.van-checkbox__icon--checked');
      if (_checked.length) {
        let val = Number($.trim($(value).find('div.goods-price').text()).slice(1))
        let num = Number($.trim($(value).find('span.num').text()).slice(1))
        _price += val * num
      }
    })
    $('span.price-num').text(_price.toFixed(2))
  }
  $('div.shop').on('click', 'span.edit', function() {
    let _text = $.trim($(this).text());
    $(this).text(_text === '编辑' ? '完成' : '编辑');
    var $container = $(this).parentsUntil('div.cart-container')
    if (_text === '编辑') {
      $container.find('div.goods-name').hide()
      $container.find('div.input-num').show()
      $container.find('div.delete-btn').show()
    } else {
      $container.find('div.goods-name').show()
      $container.find('div.input-num').hide()
      $container.find('div.delete-btn').hide()
    }
  })
  // 减
  $('div.desc-wrap').on('click', 'button.van-stepper__minus', function() {
    var $parents = $(this).parentsUntil('div.desc-wrap')
    if ($parents.find('button.van-stepper__minus').hasClass('van-stepper__plus--disabled')) {
      return false
    }
    let _value = $parents.find('input.van-stepper__input').val();
    _value--
    if (_value == 1) {
      $parents.find('button.van-stepper__minus').addClass('van-stepper__plus--disabled')
    }
    $(this).parentsUntil('div.desc-wrap').find('input.van-stepper__input').val(_value)
    $parents.find('span.num').text('x' + _value)
    price()
  })
  // 加
  $('div.desc-wrap').on('click', 'button.van-stepper__plus', function() {
    var $parents = $(this).parentsUntil('div.goods-card')
    let _value = $parents.find('input.van-stepper__input').val();
    if (_value == 1) {
      $parents.find('button.van-stepper__minus').removeClass('van-stepper__plus--disabled')
    }
    _value++
    $parents.find('input.van-stepper__input').val(_value)
    $parents.find('span.num').text('x' + _value)
    price()
  })
  $(document).on('click', 'div.delete-btn', function() {
    var $this = $(this);
    var $parents = $(this).parentsUntil('div.cart-container');
    let _length = $parents.find('div.goods').length;
    $(this).parentsUntil('div.goods-list').remove();
    if (_length == 1) {
      $parents.remove()
    }
    checkGoodsLength()
    islist()
    price()
  })

  function islist() { // 列表是不是为空
    let _length = $('div.goods').length;
    if (_length) {
      $('div.empty-list').hide()
      $('div.cart-container').show()
    } else {
      $('div.empty-list').show()
      $('div.cart-container').hide()
    }
  }

})