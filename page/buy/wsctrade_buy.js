$(function() {
  price__count()
  allcount()
  $(document).on('click', 'button.express-way__close', function() {
    $('.myModal').modal('hide')
    $('div.cap-pay').hide()
  })
  $(document).on('click', 'div.coupon-cell', function() {
    $('div.index-view').hide()
    $('div.coupon-view').show()
  })
  $(document).on('click', 'button.van-coupon-list__close', function() {
    $('div.index-view').show()
    $('div.coupon-view').hide()
  })
  $(document).on('click', 'div.van-tab', function() {
    $(this).addClass('van-tab--active')
      .siblings().removeClass('van-tab--active')
  })
  $(document).on('click', 'button.van-button--square', function(event) {
    event.stopPropagation();
    $('div.cap-pay').show()
  })
  $(document).on('click', 'div.van-modal', function(event) {
    event.stopPropagation();
    $('div.cap-pay').hide()
  })

  function price__count() {
    $('div.goods-list').each(function(index, value) {
      let price = 0
      $('div.goods-list-card').each(function(idx, val) {
        let _price = Number($.trim($(val).find('div.van-card__now-price').text()).slice(1))
        price += _price
      })
      $(value).find('span.goods-list-price__amount').text('¥' + price.toFixed(2))
    })
  }

  function allcount() {
    let price = 0
    $('span.goods-list-price__amount').each(function(index, value) {
      let _price = Number($.trim($(value).text()).slice(1))
      price += _price
    })
    $('span.price-origin-all').text('¥' + price.toFixed(2)) // 商品总价
    let freight = Number($.trim($('span.freight').text()).slice(3)) // 运费
    $('span.price-panel__amount').text('¥' + (price + freight).toFixed(2)) // + 运费的价格
    $('span.van-submit-bar__price').text('¥' + (price + freight).toFixed(2))
  }
})