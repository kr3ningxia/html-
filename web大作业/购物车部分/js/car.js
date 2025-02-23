$(document).ready(function() {
    // 增加数量
    $(".increment").click(function() {
      var input = $(this).siblings(".quantity-input");
      var newValue = parseInt(input.val()) + 1;
      input.val(newValue);
      updateTotal();
    });
  
    // 减少数量
    $(".decrement").click(function() {
      var input = $(this).siblings(".quantity-input");
      if (parseInt(input.val()) > 1) {
        var newValue = parseInt(input.val()) - 1;
        input.val(newValue);
      }
      updateTotal();
    });
  
    // 更新小计和总价
    function updateTotal() {
      var total = 0;
      var selectedCount = 0;
      $(".item-checkbox").each(function() {
        var row = $(this).closest("tr");
        var price = parseFloat(row.find("td:nth-child(3)").text().replace("￥", ""));
        var quantity = parseInt(row.find(".quantity-input").val());
        var subtotal = price * quantity;
        row.find(".subtotal").text("￥" + subtotal.toFixed(2));
  
        if ($(this).prop("checked")) {
          total += subtotal;
          selectedCount++;
        }
      });
      $("#total-price").text("￥" + total.toFixed(2));
      $("#selected-count").text(selectedCount);
    }
  
    // 全选功能
    $("#check-all").click(function() {
      var isChecked = $(this).prop("checked");
      $(".item-checkbox").prop("checked", isChecked);
      updateTotal();
    });
  
    // 单选商品
    $(".item-checkbox").click(function() {
      var allChecked = $(".item-checkbox").length === $(".item-checkbox:checked").length;
      $("#check-all").prop("checked", allChecked);
      updateTotal();
    });
  
    // 删除单个商品
    $(".delete-item").click(function() {
      $(this).closest("tr").remove();
      updateTotal();
    });
  
    // 删除选中的商品
    $("#delete-selected").click(function() {
      $(".item-checkbox:checked").each(function() {
        $(this).closest("tr").remove();
      });
      updateTotal();
    });
  
    // 清空购物车
    $("#clear-cart").click(function() {
      $("tbody tr").remove();
      updateTotal();
    });
  
    // 初始化总价
    updateTotal();
  });

  