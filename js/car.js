$(function() {
  $(document).on('click', 'div.select-all', function() {
    if ($(this).find('div').hasClass('van-checkbox__icon--checked')) {
      $('div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    } else {
      $('div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
    }
  })
  $('div.van-hairline--bottom').on('click', 'div.van-checkbox__icon', function() {
    if ($(this).hasClass('van-checkbox__icon--checked')) {
      $('div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    } else {
      $('div.shop div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
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
      isShop($(this))
    }
  })

  function isShop(elem) {
    var size = elem.parentsUntil('.shop').find('div.van-checkbox__icon').size();
    var _size = elem.parentsUntil('div.goods-list').find('div.van-checkbox__icon--checked').size();
    if (size === _size + 1) {
      elem.parentsUntil('div.shop').find('div.title div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
    } else {
      elem.parentsUntil('div.shop').find('div.title div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    }
    isAllCheck()
  }

  function isAllCheck() {
    var size = $('div.van-checkbox__icon').size();
    var _size = $('div.shop').find('div.van-checkbox__icon--checked').size();
    if (size === _size + 1) {
      $('div.select-all div.van-checkbox__icon').addClass('van-checkbox__icon--checked')
    } else {
      $('div.select-all div.van-checkbox__icon').removeClass('van-checkbox__icon--checked')
    }
  }
})