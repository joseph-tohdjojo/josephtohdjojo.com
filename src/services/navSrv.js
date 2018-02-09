const navSrv = function() {
  this.getWindowSize = function(size) {
    if (size < 769) {
      angular
        .element(document.querySelectorAll('.nav-item'))
        .css('display', 'none')
    }
    if (size > 768) {
      angular
        .element(document.querySelectorAll('.nav-item'))
        .css('display', 'list-item')
    }
  }
}

export default navSrv
