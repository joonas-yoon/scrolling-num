function scrollingNumber(element) {
  var _el = element;
  var _formatter;
  var _goal = Number(_el.getAttribute('data-number-to') || _el.innerText);
  var _speed = Math.max(1, Math.min(_el.getAttribute('data-number-speed') || 10, 10));
  var _cnt;

  var format = function(f) {
    _formatter = f;
    return this;
  }

  var speed = function(s) {
    _speed = Math.max(1, Math.min(s, 10));
    return this;
  }

  function _start() {
    var diff = Math.max(1, Math.floor((_goal - _cnt) / (100 / _speed)));
    if (_cnt + diff <= _goal) {
      _cnt += diff;
      _el.innerText = _formatter ? _formatter(_cnt) : _cnt;
      setTimeout(_start, 10);
    }
  }

  var start = function(element) {
    _cnt = 0;
    _start();
    return this;
  }

  return {
    format: format,
    start: start,
    speed: speed
  }
}
