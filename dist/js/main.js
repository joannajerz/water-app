!function(n){var e={};function t(l){if(e[l])return e[l].exports;var r=e[l]={i:l,l:!1,exports:{}};return n[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(l,r,function(e){return n[e]}.bind(null,r));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\nconsole.log(`Hello world!`);\nconst water_glass = document.querySelector('.water-glass__number--js')\nwater_glass.innerHTML=0;\n\nconst button_add=document.querySelector('.water-button__add--js');\nconst button_remove=document.querySelector('.water-button_remove--js');\n\n\nbutton_add.addEventListener('click', (e)=>{\n  e.preventDefault();\n  water_glass.innerHTML=parseInt(water_glass.innerHTML)+1;\n})\n\nbutton_remove.addEventListener('click', (e)=>{\n  e.preventDefault();\n  if(parseInt(water_glass.innerHTML)>0){\n  water_glass.innerHTML=parseInt(water_glass.innerHTML)-1;\n}})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuXG5jb25zb2xlLmxvZyhgSGVsbG8gd29ybGQhYCk7XG5jb25zdCB3YXRlcl9nbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YXRlci1nbGFzc19fbnVtYmVyLS1qcycpXG53YXRlcl9nbGFzcy5pbm5lckhUTUw9MDtcblxuY29uc3QgYnV0dG9uX2FkZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2F0ZXItYnV0dG9uX19hZGQtLWpzJyk7XG5jb25zdCBidXR0b25fcmVtb3ZlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YXRlci1idXR0b25fcmVtb3ZlLS1qcycpO1xuXG5cbmJ1dHRvbl9hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB3YXRlcl9nbGFzcy5pbm5lckhUTUw9cGFyc2VJbnQod2F0ZXJfZ2xhc3MuaW5uZXJIVE1MKSsxO1xufSlcblxuYnV0dG9uX3JlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmKHBhcnNlSW50KHdhdGVyX2dsYXNzLmlubmVySFRNTCk+MCl7XG4gIHdhdGVyX2dsYXNzLmlubmVySFRNTD1wYXJzZUludCh3YXRlcl9nbGFzcy5pbm5lckhUTUwpLTE7XG59fSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);