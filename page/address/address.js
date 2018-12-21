$(function() {
  $("#city-picker").cityPicker({
    title: "选择省市区/县",
    onChange: function(picker, values, displayValues) {
      console.log(values, displayValues);
    }
  });
})