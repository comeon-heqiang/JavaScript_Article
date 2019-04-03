new Modal();

function Modal(option) {
  //   判断是否有配置，如果没有则使用默认配置
  this.option = option || {};
  if (!this.option.config) {
    this.option.config = {
      main: "modal-main",
      bg: "modal-bg",
      btnArr: ".btn-show-modal",
      close: 'modal-close'
    }
  }
  var option = this.option,
    config = this.option.config,
    _self = this;

  // 初始化dom
  this.init = function () {
    this.btnArr = [].slice.call(document.querySelectorAll(config.btnArr)); // 点击按钮
    this.bg = document.getElementById(config.bg); // 弹出层背景
    this.main = document.getElementById(config.main) // 弹出层
    this.close = document.getElementById(config.close) // 弹出层关闭按钮
  }
  // 弹出层状态切换
  this.toggleModal = function (state) {
    var elm = [].slice.call(arguments).slice(1);
    elm.forEach(function (item) {
      item.style.display = state;
      item.style.display = state;
    })
  }

  this.init();
  // 给每个显示按钮添加事件
  this.btnArr.forEach(function (item, index) {
    item.addEventListener('click', function () {
      _self.toggleModal('block', _self.bg, _self.main)
      option.showCallBack && option.showCallBack();
    }, false)
  })
  //   关闭弹窗
  this.close.addEventListener('click', function () {
    _self.toggleModal('none', _self.bg, _self.main)
    option.hideCallBack && option.hideCallBack();
  })
}
// 判断类型
function type(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}
// 弹窗表单提交
function checkForm() {
  var theinput = document.getElementById("form_phone").value;
  var p1 = /^[1][0-9]{10}$/;
  //(p1.test(theinput));
  if (!p1.test(theinput)) {
    alert('请填写正确电话号码!');
    return false;
  }
  return true;
}