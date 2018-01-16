(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Baidu = function () {
  function Baidu() {
    _classCallCheck(this, Baidu);

    this.context = window.require('system-core:context/context.js').instanceForSystem;
    this.context.log.send = function () {};
  }
  // 封装的百度的Toast提示消息
  // Type类型有
  // caution       警告  failure       失败  loading      加载 success      成功


  _createClass(Baidu, [{
    key: 'showToast',
    value: function showToast(_ref) {
      var message = _ref.message,
          type = _ref.type;

      this.context.ui.tip({
        mode: type,
        msg: message
      });
    }
  }, {
    key: 'startListen',
    value: function startListen() {
      var _this = this;

      window.addEventListener('message', function (event) {
        if (event.data.type && event.data.type === 'getSelected') {
          window.postMessage({ type: 'selected', data: _this.context.list.getSelected() }, location.origin);
        }
        if (event.data.type && event.data.type === 'showToast') {
          _this.showToast(event.data.data);
        }
      });
      if (window.yunData) {
        // TODO 分析效果
        if (window.yunData.sign2) {
          var yunData = window.require('disk-system:widget/data/yunData.js').get();
          window.postMessage({ type: 'yunData', data: yunData }, location.origin);
        } else {
          window.postMessage({ type: 'yunData', data: JSON.parse(JSON.stringify(window.yunData)) }, location.origin);
        }
      }
    }
  }]);

  return Baidu;
}();

var baidu = new Baidu();

baidu.startListen();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYmFpZHUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTSxLO0FBQ0osbUJBQWU7QUFBQTs7QUFDYixTQUFLLE9BQUwsR0FBZSxPQUFPLE9BQVAsQ0FBZSxnQ0FBZixFQUFpRCxpQkFBaEU7QUFDQSxTQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLElBQWpCLEdBQXdCLFlBQVksQ0FBRSxDQUF0QztBQUNEO0FBQ0Q7QUFDQTtBQUNBOzs7OztvQ0FDNEI7QUFBQSxVQUFoQixPQUFnQixRQUFoQixPQUFnQjtBQUFBLFVBQVAsSUFBTyxRQUFQLElBQU87O0FBQzFCLFdBQUssT0FBTCxDQUFhLEVBQWIsQ0FBZ0IsR0FBaEIsQ0FBb0I7QUFDbEIsY0FBTSxJQURZO0FBRWxCLGFBQUs7QUFGYSxPQUFwQjtBQUlEOzs7a0NBQ2M7QUFBQTs7QUFDYixhQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUMsS0FBRCxFQUFXO0FBQzVDLFlBQUksTUFBTSxJQUFOLENBQVcsSUFBWCxJQUFtQixNQUFNLElBQU4sQ0FBVyxJQUFYLEtBQW9CLGFBQTNDLEVBQTBEO0FBQ3hELGlCQUFPLFdBQVAsQ0FBbUIsRUFBRSxNQUFNLFVBQVIsRUFBb0IsTUFBTSxNQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLFdBQWxCLEVBQTFCLEVBQW5CLEVBQWdGLFNBQVMsTUFBekY7QUFDRDtBQUNELFlBQUksTUFBTSxJQUFOLENBQVcsSUFBWCxJQUFtQixNQUFNLElBQU4sQ0FBVyxJQUFYLEtBQW9CLFdBQTNDLEVBQXdEO0FBQ3RELGdCQUFLLFNBQUwsQ0FBZSxNQUFNLElBQU4sQ0FBVyxJQUExQjtBQUNEO0FBQ0YsT0FQRDtBQVFBLFVBQUksT0FBTyxPQUFYLEVBQW9CO0FBQ2xCO0FBQ0EsWUFBSSxPQUFPLE9BQVAsQ0FBZSxLQUFuQixFQUEwQjtBQUN4QixjQUFNLFVBQVUsT0FBTyxPQUFQLENBQWUsb0NBQWYsRUFBcUQsR0FBckQsRUFBaEI7QUFDQSxpQkFBTyxXQUFQLENBQW1CLEVBQUUsTUFBTSxTQUFSLEVBQW1CLE1BQU0sT0FBekIsRUFBbkIsRUFBdUQsU0FBUyxNQUFoRTtBQUNELFNBSEQsTUFHTztBQUNMLGlCQUFPLFdBQVAsQ0FBbUIsRUFBRSxNQUFNLFNBQVIsRUFBbUIsTUFBTSxLQUFLLEtBQUwsQ0FBVyxLQUFLLFNBQUwsQ0FBZSxPQUFPLE9BQXRCLENBQVgsQ0FBekIsRUFBbkIsRUFBMEYsU0FBUyxNQUFuRztBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBR0gsSUFBTSxRQUFRLElBQUksS0FBSixFQUFkOztBQUVBLE1BQU0sV0FBTiIsImZpbGUiOiJiYWlkdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQmFpZHUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gd2luZG93LnJlcXVpcmUoJ3N5c3RlbS1jb3JlOmNvbnRleHQvY29udGV4dC5qcycpLmluc3RhbmNlRm9yU3lzdGVtXG4gICAgdGhpcy5jb250ZXh0LmxvZy5zZW5kID0gZnVuY3Rpb24gKCkge31cbiAgfVxuICAvLyDlsIHoo4XnmoTnmb7luqbnmoRUb2FzdOaPkOekuua2iOaBr1xuICAvLyBUeXBl57G75Z6L5pyJXG4gIC8vIGNhdXRpb24gICAgICAg6K2m5ZGKICBmYWlsdXJlICAgICAgIOWksei0pSAgbG9hZGluZyAgICAgIOWKoOi9vSBzdWNjZXNzICAgICAg5oiQ5YqfXG4gIHNob3dUb2FzdCAoe21lc3NhZ2UsIHR5cGV9KSB7XG4gICAgdGhpcy5jb250ZXh0LnVpLnRpcCh7XG4gICAgICBtb2RlOiB0eXBlLFxuICAgICAgbXNnOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuICBzdGFydExpc3RlbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnZ2V0U2VsZWN0ZWQnKSB7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdzZWxlY3RlZCcsIGRhdGE6IHRoaXMuY29udGV4dC5saXN0LmdldFNlbGVjdGVkKCkgfSwgbG9jYXRpb24ub3JpZ2luKVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdzaG93VG9hc3QnKSB7XG4gICAgICAgIHRoaXMuc2hvd1RvYXN0KGV2ZW50LmRhdGEuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh3aW5kb3cueXVuRGF0YSkge1xuICAgICAgLy8gVE9ETyDliIbmnpDmlYjmnpxcbiAgICAgIGlmICh3aW5kb3cueXVuRGF0YS5zaWduMikge1xuICAgICAgICBjb25zdCB5dW5EYXRhID0gd2luZG93LnJlcXVpcmUoJ2Rpc2stc3lzdGVtOndpZGdldC9kYXRhL3l1bkRhdGEuanMnKS5nZXQoKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAneXVuRGF0YScsIGRhdGE6IHl1bkRhdGEgfSwgbG9jYXRpb24ub3JpZ2luKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ3l1bkRhdGEnLCBkYXRhOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHdpbmRvdy55dW5EYXRhKSkgfSwgbG9jYXRpb24ub3JpZ2luKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBiYWlkdSA9IG5ldyBCYWlkdSgpXG5cbmJhaWR1LnN0YXJ0TGlzdGVuKClcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKemNtTXZhbk12WW1GcFpIVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3U1VOQlRTeExPMEZCUTBvc2JVSkJRV1U3UVVGQlFUczdRVUZEWWl4VFFVRkxMRTlCUVV3c1IwRkJaU3hQUVVGUExFOUJRVkFzUTBGQlpTeG5RMEZCWml4RlFVRnBSQ3hwUWtGQmFFVTdRVUZEUVN4VFFVRkxMRTlCUVV3c1EwRkJZU3hIUVVGaUxFTkJRV2xDTEVsQlFXcENMRWRCUVhkQ0xGbEJRVmtzUTBGQlJTeERRVUYwUXp0QlFVTkVPMEZCUTBRN1FVRkRRVHRCUVVOQk96czdPenR2UTBGRE5FSTdRVUZCUVN4VlFVRm9RaXhQUVVGblFpeFJRVUZvUWl4UFFVRm5RanRCUVVGQkxGVkJRVkFzU1VGQlR5eFJRVUZRTEVsQlFVODdPMEZCUXpGQ0xGZEJRVXNzVDBGQlRDeERRVUZoTEVWQlFXSXNRMEZCWjBJc1IwRkJhRUlzUTBGQmIwSTdRVUZEYkVJc1kwRkJUU3hKUVVSWk8wRkJSV3hDTEdGQlFVczdRVUZHWVN4UFFVRndRanRCUVVsRU96czdhME5CUTJNN1FVRkJRVHM3UVVGRFlpeGhRVUZQTEdkQ1FVRlFMRU5CUVhkQ0xGTkJRWGhDTEVWQlFXMURMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRelZETEZsQlFVa3NUVUZCVFN4SlFVRk9MRU5CUVZjc1NVRkJXQ3hKUVVGdFFpeE5RVUZOTEVsQlFVNHNRMEZCVnl4SlFVRllMRXRCUVc5Q0xHRkJRVE5ETEVWQlFUQkVPMEZCUTNoRUxHbENRVUZQTEZkQlFWQXNRMEZCYlVJc1JVRkJSU3hOUVVGTkxGVkJRVklzUlVGQmIwSXNUVUZCVFN4TlFVRkxMRTlCUVV3c1EwRkJZU3hKUVVGaUxFTkJRV3RDTEZkQlFXeENMRVZCUVRGQ0xFVkJRVzVDTEVWQlFXZEdMRk5CUVZNc1RVRkJla1k3UVVGRFJEdEJRVU5FTEZsQlFVa3NUVUZCVFN4SlFVRk9MRU5CUVZjc1NVRkJXQ3hKUVVGdFFpeE5RVUZOTEVsQlFVNHNRMEZCVnl4SlFVRllMRXRCUVc5Q0xGZEJRVE5ETEVWQlFYZEVPMEZCUTNSRUxHZENRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRk5MRWxCUVU0c1EwRkJWeXhKUVVFeFFqdEJRVU5FTzBGQlEwWXNUMEZRUkR0QlFWRkJMRlZCUVVrc1QwRkJUeXhQUVVGWUxFVkJRVzlDTzBGQlEyeENPMEZCUTBFc1dVRkJTU3hQUVVGUExFOUJRVkFzUTBGQlpTeExRVUZ1UWl4RlFVRXdRanRCUVVONFFpeGpRVUZOTEZWQlFWVXNUMEZCVHl4UFFVRlFMRU5CUVdVc2IwTkJRV1lzUlVGQmNVUXNSMEZCY2tRc1JVRkJhRUk3UVVGRFFTeHBRa0ZCVHl4WFFVRlFMRU5CUVcxQ0xFVkJRVVVzVFVGQlRTeFRRVUZTTEVWQlFXMUNMRTFCUVUwc1QwRkJla0lzUlVGQmJrSXNSVUZCZFVRc1UwRkJVeXhOUVVGb1JUdEJRVU5FTEZOQlNFUXNUVUZIVHp0QlFVTk1MR2xDUVVGUExGZEJRVkFzUTBGQmJVSXNSVUZCUlN4TlFVRk5MRk5CUVZJc1JVRkJiVUlzVFVGQlRTeExRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRkxMRk5CUVV3c1EwRkJaU3hQUVVGUExFOUJRWFJDTEVOQlFWZ3NRMEZCZWtJc1JVRkJia0lzUlVGQk1FWXNVMEZCVXl4TlFVRnVSenRCUVVORU8wRkJRMFk3UVVGRFJqczdPenM3TzBGQlIwZ3NTVUZCVFN4UlFVRlJMRWxCUVVrc1MwRkJTaXhGUVVGa096dEJRVVZCTEUxQlFVMHNWMEZCVGlJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJR1VvZEN4dUxISXBlMloxYm1OMGFXOXVJSE1vYnl4MUtYdHBaaWdoYmx0dlhTbDdhV1lvSVhSYmIxMHBlM1poY2lCaFBYUjVjR1Z2WmlCeVpYRjFhWEpsUFQxY0ltWjFibU4wYVc5dVhDSW1KbkpsY1hWcGNtVTdhV1lvSVhVbUptRXBjbVYwZFhKdUlHRW9ieXdoTUNrN2FXWW9hU2x5WlhSMWNtNGdhU2h2TENFd0tUdDJZWElnWmoxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzI4clhDSW5YQ0lwTzNSb2NtOTNJR1l1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhtZlhaaGNpQnNQVzViYjEwOWUyVjRjRzl5ZEhNNmUzMTlPM1JiYjExYk1GMHVZMkZzYkNoc0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b1pTbDdkbUZ5SUc0OWRGdHZYVnN4WFZ0bFhUdHlaWFIxY200Z2N5aHVQMjQ2WlNsOUxHd3NiQzVsZUhCdmNuUnpMR1VzZEN4dUxISXBmWEpsZEhWeWJpQnVXMjlkTG1WNGNHOXlkSE45ZG1GeUlHazlkSGx3Wlc5bUlISmxjWFZwY21VOVBWd2lablZ1WTNScGIyNWNJaVltY21WeGRXbHlaVHRtYjNJb2RtRnlJRzg5TUR0dlBISXViR1Z1WjNSb08yOHJLeWx6S0hKYmIxMHBPM0psZEhWeWJpQnpmU2tpTENKamJHRnpjeUJDWVdsa2RTQjdYRzRnSUdOdmJuTjBjblZqZEc5eUlDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1OdmJuUmxlSFFnUFNCM2FXNWtiM2N1Y21WeGRXbHlaU2duYzNsemRHVnRMV052Y21VNlkyOXVkR1Y0ZEM5amIyNTBaWGgwTG1wekp5a3VhVzV6ZEdGdVkyVkdiM0pUZVhOMFpXMWNiaUFnSUNCMGFHbHpMbU52Ym5SbGVIUXViRzluTG5ObGJtUWdQU0JtZFc1amRHbHZiaUFvS1NCN2ZWeHVJQ0I5WEc0Z0lDOHZJT1d3Z2VpamhlZWFoT2VadnVXNnB1ZWFoRlJ2WVhOMDVvK1E1NlM2NXJhSTVvR3ZYRzRnSUM4dklGUjVjR1huc2J2bG5vdm1uSWxjYmlBZ0x5OGdZMkYxZEdsdmJpQWdJQ0FnSUNEb3JhYmxrWW9nSUdaaGFXeDFjbVVnSUNBZ0lDQWc1YVN4NkxTbElDQnNiMkZrYVc1bklDQWdJQ0FnNVlxZzZMMjlJSE4xWTJObGMzTWdJQ0FnSUNEbWlKRGxpcDljYmlBZ2MyaHZkMVJ2WVhOMElDaDdiV1Z6YzJGblpTd2dkSGx3WlgwcElIdGNiaUFnSUNCMGFHbHpMbU52Ym5SbGVIUXVkV2t1ZEdsd0tIdGNiaUFnSUNBZ0lHMXZaR1U2SUhSNWNHVXNYRzRnSUNBZ0lDQnRjMmM2SUcxbGMzTmhaMlZjYmlBZ0lDQjlLVnh1SUNCOVhHNGdJSE4wWVhKMFRHbHpkR1Z1SUNncElIdGNiaUFnSUNCM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYldWemMyRm5aU2NzSUNobGRtVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLR1YyWlc1MExtUmhkR0V1ZEhsd1pTQW1KaUJsZG1WdWRDNWtZWFJoTG5SNWNHVWdQVDA5SUNkblpYUlRaV3hsWTNSbFpDY3BJSHRjYmlBZ0lDQWdJQ0FnZDJsdVpHOTNMbkJ2YzNSTlpYTnpZV2RsS0hzZ2RIbHdaVG9nSjNObGJHVmpkR1ZrSnl3Z1pHRjBZVG9nZEdocGN5NWpiMjUwWlhoMExteHBjM1F1WjJWMFUyVnNaV04wWldRb0tTQjlMQ0JzYjJOaGRHbHZiaTV2Y21sbmFXNHBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaUFvWlhabGJuUXVaR0YwWVM1MGVYQmxJQ1ltSUdWMlpXNTBMbVJoZEdFdWRIbHdaU0E5UFQwZ0ozTm9iM2RVYjJGemRDY3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXphRzkzVkc5aGMzUW9aWFpsYm5RdVpHRjBZUzVrWVhSaEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcFhHNGdJQ0FnYVdZZ0tIZHBibVJ2ZHk1NWRXNUVZWFJoS1NCN1hHNGdJQ0FnSUNBdkx5QlVUMFJQSU9XSWh1YWVrT2FWaU9hZW5GeHVJQ0FnSUNBZ2FXWWdLSGRwYm1SdmR5NTVkVzVFWVhSaExuTnBaMjR5S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhsMWJrUmhkR0VnUFNCM2FXNWtiM2N1Y21WeGRXbHlaU2duWkdsemF5MXplWE4wWlcwNmQybGtaMlYwTDJSaGRHRXZlWFZ1UkdGMFlTNXFjeWNwTG1kbGRDZ3BYRzRnSUNBZ0lDQWdJSGRwYm1SdmR5NXdiM04wVFdWemMyRm5aU2g3SUhSNWNHVTZJQ2Q1ZFc1RVlYUmhKeXdnWkdGMFlUb2dlWFZ1UkdGMFlTQjlMQ0JzYjJOaGRHbHZiaTV2Y21sbmFXNHBYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjNhVzVrYjNjdWNHOXpkRTFsYzNOaFoyVW9leUIwZVhCbE9pQW5lWFZ1UkdGMFlTY3NJR1JoZEdFNklFcFRUMDR1Y0dGeWMyVW9TbE5QVGk1emRISnBibWRwWm5rb2QybHVaRzkzTG5sMWJrUmhkR0VwS1NCOUxDQnNiMk5oZEdsdmJpNXZjbWxuYVc0cFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtTnZibk4wSUdKaGFXUjFJRDBnYm1WM0lFSmhhV1IxS0NsY2JseHVZbUZwWkhVdWMzUmhjblJNYVhOMFpXNG9LVnh1SWwxOSJ9
