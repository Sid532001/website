(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0e4h":function(e,t,M){e.exports={root:"typography-module--root--pStjy",h1:"typography-module--h1--1hQhF"}},"8+s/":function(e,t,M){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}M("sc67"),M("AqHK"),M("pJf4"),M("pS08"),M("R48M");var n=M("q1tI"),i=r(n),a=r(M("Gytx"));function T(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,M){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==M&&"function"!=typeof M)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),N.canUseDOM?t(c):M&&(c=M(c))}var N=function(e){var t,M;function n(){return e.apply(this,arguments)||this}M=e,(t=n).prototype=Object.create(M.prototype),t.prototype.constructor=t,t.__proto__=M,n.peek=function(){return c},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var T=n.prototype;return T.shouldComponentUpdate=function(e){return!a(e,this.props)},T.componentWillMount=function(){u.push(this),l()},T.componentDidUpdate=function(){l()},T.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},T.render=function(){return i.createElement(r,this.props)},n}(n.Component);return T(N,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),T(N,"canUseDOM",o),N}}},"8ypT":function(e,t,M){},Bl7J:function(e,t,M){"use strict";var r=M("q1tI"),n=M.n(r),i=(M("8ypT"),M("Kvkj")),a=M("FqMQ"),T=(M("rmqn"),function(){return n.a.createElement("nav",{className:"colorOfTheYear"},n.a.createElement("div",{className:"nav-wrapper container"},n.a.createElement("a",{href:"/",className:"brand-logo left hide-on-small-and-down"},"JS CraftCamp"),n.a.createElement("ul",{id:"nav-desktop",className:"right"},a.a.main.map((function(e){return n.a.createElement("li",{key:e.title},n.a.createElement("a",{href:e.url},e.title))})),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/jscraftcamp"},n.a.createElement("i",{className:"fa fa-twitter fa-fw"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/jscraftcamp/website"},n.a.createElement("i",{className:"fa fa-github fa-fw"}))))))});t.a=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement(T,null)),t,n.a.createElement(i.a,null))}},C9fy:function(e,t,M){var r=Date.prototype,n=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&M("IYdN")(r,"toString",(function(){var e=i.call(this);return e==e?n.call(this):"Invalid Date"}))},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"JSCraftCamp - 2020 in Munich","description":"Website for JSCraftCamp - 2020 in Munich","author":"@davelosert, @rhosts, @michaelzoidl, @Narigo"}}}}')},FqMQ:function(e){e.exports=JSON.parse('{"a":{"main":[{"url":"/","title":"Home"},{"url":"https://github.com/jscraftcamp/website/projects/10","title":"Sponsoring"},{"url":"/values","title":"Values"}],"archive":[{"url":"https://web.archive.org/web/20190706093953/http://jscraftcamp.org/","title":"2019 - Home"},{"url":"https://web.archive.org/web/20180809182443/http://jscraftcamp.org/","title":"2018 - Home"},{"url":"https://web.archive.org/web/20180809182443/http://jscraftcamp.org/photos2018","title":"2018 - Photos"},{"url":"https://web.archive.org/web/20170715150754/http://jscraftcamp.org/","title":"2017 - Home"},{"url":"https://web.archive.org/web/20170715150754/http://jscraftcamp.org/photos2017","title":"2017 - Photos"},{"url":"https://web.archive.org/web/20161011211857/http://jscraftcamp.org/","title":"2016 - Home"},{"url":"https://web.archive.org/web/20170827114658/http://jscraftcamp.org/photos2016","title":"2016 - Photos"}]},"b":[{"name":"Agnes Köhler","photo":"agnes.png","email":"koehler.agnes@gmail.com"},{"name":"David Losert","photo":"david.jpg","email":"david@david-losert.com"},{"name":"Jörn Bernhardt","photo":"joern.jpg","email":"joern.bernhardt@compose.us"},{"name":"Michael Zoidl","photo":"michael.png","email":"michael@alm.sh"},{"name":"Patrick Müller","photo":"patrick.jpg","email":"mp@floatec.de"},{"name":"Robert Hostlowsky","photo":"robert.png","email":"robert.hostlowsky@codecentric.de"},{"name":"Sebastian Frerichs","photo":"sebastian.jpg","email":"sebastian.frerichs@codecentric.de"},{"name":"Simon Hofmann","photo":"simon.png","email":"simon@s1h.org"},{"name":"Wolfram Kriesing","photo":"wolfram.jpg","email":"w@kriesing.de"}]}')},Gytx:function(e,t,M){M("n7j8"),M("rzGZ"),M("Dq+y"),M("8npG"),M("Ggvi"),e.exports=function(e,t,M,r){var n=M?M.call(r,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var T=Object.prototype.hasOwnProperty.bind(t),o=0;o<i.length;o++){var c=i[o];if(!T(c))return!1;var u=e[c],l=t[c];if(!1===(n=M?M.call(r,u,l,c):void 0)||void 0===n&&u!==l)return!1}return!0}},"I0c+":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDMyNCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSJMb2dvL1BpbmsiPgo8cGF0aCBpZD0iQm9yZGVyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MiAwQzE1NC4wNTggMCAxNDYuMTE0IDIuMDU0NiAxMzguOTk1IDYuMTY2MzZMMjMuMDIwMSA3My4xNDY4QzguNzc1NDIgODEuMzcyOSAwIDk2LjU3ODkgMCAxMTMuMDM2VjI0Ni45NjRDMCAyNjMuNDIxIDguNzc1NDIgMjc4LjYyNyAyMy4wMjAxIDI4Ni44NTNMMTM4Ljk5NSAzNTMuODM0QzE0Ni4xMTQgMzU3Ljk0NSAxNTQuMDU4IDM2MCAxNjIgMzYwQzE2OS45NDQgMzYwIDE3Ny44ODkgMzU3Ljk0NSAxODUuMDA3IDM1My44MzRMMzAwLjk4MiAyODYuODUzQzMxNS4yMjcgMjc4LjYyNyAzMjQgMjYzLjQyMSAzMjQgMjQ2Ljk2NFYxMTMuMDM2QzMyNCA5Ni41Nzg5IDMxNS4yMjcgODEuMzcyOSAzMDAuOTgyIDczLjE0NjhMMTg1LjAwNyA2LjE2NjM2QzE3Ny44ODkgMi4wNTQ2IDE2OS45NDQgMCAxNjIgMFoiIGZpbGw9IiMyMzFGMjAiLz4KPGcgaWQ9IkJhY2tncm91bmQiPgo8cGF0aCBpZD0iQmFja2dyb3VuZCBNYXNrIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MiA3LjI1MTIyQzE2OC43OTYgNy4yNTEyMiAxNzUuNDk4IDkuMDQ5OTUgMTgxLjM4NCAxMi40NDc4TDI5Ny4zNTkgNzkuNDI4M0MzMDkuMzIxIDg2LjMzNjYgMzE2Ljc1MSA5OS4yMTQzIDMxNi43NTEgMTEzLjAzNlYyNDYuOTY0QzMxNi43NTEgMjYwLjc4NiAzMDkuMzIxIDI3My42NjMgMjk3LjM1OSAyODAuNTcyTDE4MS4zODQgMzQ3LjU1MkMxNzUuNDk4IDM1MC45NTMgMTY4Ljc5NiAzNTIuNzQ5IDE2MiAzNTIuNzQ5QzE1NS4yMDYgMzUyLjc0OSAxNDguNTA0IDM1MC45NTMgMTQyLjYxOCAzNDcuNTUyTDI2LjY0MzMgMjgwLjU3MkMxNC42Nzk0IDI3My42NjMgNy4yNDg5IDI2MC43ODYgNy4yNDg5IDI0Ni45NjRWMTEzLjAzNkM3LjI0ODkgOTkuMjE0MyAxNC42Nzk0IDg2LjMzNjYgMjYuNjQzMyA3OS40MjgzTDE0Mi42MTggMTIuNDQ3OEMxNDguNTA0IDkuMDQ5OTUgMTU1LjIwNiA3LjI1MTIyIDE2MiA3LjI1MTIyWiIgZmlsbD0iI0VBMDA3NCIvPgo8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjciIHk9IjciIHdpZHRoPSIzMTAiIGhlaWdodD0iMzQ2Ij4KPHBhdGggaWQ9IkJhY2tncm91bmQgTWFza18yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MiA3LjI1MTIyQzE2OC43OTYgNy4yNTEyMiAxNzUuNDk4IDkuMDQ5OTUgMTgxLjM4NCAxMi40NDc4TDI5Ny4zNTkgNzkuNDI4M0MzMDkuMzIxIDg2LjMzNjYgMzE2Ljc1MSA5OS4yMTQzIDMxNi43NTEgMTEzLjAzNlYyNDYuOTY0QzMxNi43NTEgMjYwLjc4NiAzMDkuMzIxIDI3My42NjMgMjk3LjM1OSAyODAuNTcyTDE4MS4zODQgMzQ3LjU1MkMxNzUuNDk4IDM1MC45NTMgMTY4Ljc5NiAzNTIuNzQ5IDE2MiAzNTIuNzQ5QzE1NS4yMDYgMzUyLjc0OSAxNDguNTA0IDM1MC45NTMgMTQyLjYxOCAzNDcuNTUyTDI2LjY0MzMgMjgwLjU3MkMxNC42Nzk0IDI3My42NjMgNy4yNDg5IDI2MC43ODYgNy4yNDg5IDI0Ni45NjRWMTEzLjAzNkM3LjI0ODkgOTkuMjE0MyAxNC42Nzk0IDg2LjMzNjYgMjYuNjQzMyA3OS40MjgzTDE0Mi42MTggMTIuNDQ3OEMxNDguNTA0IDkuMDQ5OTUgMTU1LjIwNiA3LjI1MTIyIDE2MiA3LjI1MTIyWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxnIGlkPSJCYXZhcmlhbiBGbGFnIj4KPHBhdGggaWQ9IkNvbWJpbmVkIFNoYXBlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NCAtNDMuODkwOUwxNDUuOTUyIC00NUwxNzYuOTEyIC0yMy41MjI3TDE3OSAxN0wxNDUuOTYgLTUuOTIyMTdMMTQ0IC00My44OTA5Wk0yMTQgODFMMTgxLjA3OSA1Ny44Nzg1TDE3OSAxN0wyMTEuOTI3IDQwLjExOUwyMTQgODFaTTIxNCA4MUwyNDYuOTI0IDEwNC4xMTlMMjQ5IDE0NUwyMTYuMDc4IDEyMS44NzhMMjE0IDgxWk0xMTQuOTUyIC0yOEwxMTMgLTI2Ljg5MDlMMTE0Ljk0NiAxMC44MDgzTDg0Ljk1MjQgLTEwTDgzIC04Ljg4ODRMODQuOTYwMSAyOS4wNzYyTDExOCA1MkwxMjAuMDc4IDkyLjg3ODVMMTUzIDExNkwxNTUuMDc5IDE1Ni44NzhMMTg4IDE4MEwxOTAuMDc5IDIyMC44NzhMMjIzIDI0NEwyMjAuOTIyIDIwMy4xMTdMMTg4IDE4MEwxODUuOTQzIDEzOS40ODVMMjE4IDE2MkwyMTUuOTIyIDEyMS4xMTlMMTgzIDk4TDE4MC45MjIgNTcuMTIxNUwxNDggMzRMMTQ1LjkxMiAtNi41MjI3MUwxMTQuOTUyIC0yOFpNMTgzIDk4TDE4NS4wNiAxMzguNTEyTDE1MyAxMTZMMTUwLjk0IDc1LjQ4MzdMMTgzIDk4Wk0xNDggMzRMMTUwLjA2IDc0LjUxMzhMMTE4IDUyTDExNS45MjMgMTEuNzQ2TDE0OCAzNFpNNTMuOTUyNCA4TDUyIDkuMTA5MUw1My45NTc1IDQ3LjA3NzhMODcgNzBMODkuMDc1OSAxMTAuODhMMTIyIDEzNEwxMjQuMDc5IDE3NC44NzhMMTU3IDE5OEwxNTQuOTIyIDE1Ny4xMjJMMTIyIDEzNEwxMTkuOTIyIDkzLjExOTlMODcgNzBMODQuOTA5MiAyOS40NzczTDUzLjk1MjQgOFpNMjIuOTUyNCAyNkwyMSAyNy4xMDkxTDIyLjk2MDEgNjUuMDc1M0w1NiA4OEw1OC4wNzg1IDEyOC44NzhMOTEgMTUyTDg4LjkyMTUgMTExLjEyTDU2IDg4TDUzLjkxMTggNDcuNDc0N0wyMi45NTI0IDI2Wk0tNDEgNjIuMTA5MUwtMzkuMDM5OSAxMDAuMDc4TC02IDEyM0wtMy45MjE1IDE2My44NzdMMjkgMTg3TDMxLjA3ODUgMjI3Ljg3OEw2NCAyNTFMNjYuMDc4MyAyOTEuODc4TDk5IDMxNUwxMDAuODkxIDM1NS4yNjRMMTMyLjc5NiAzNzdMMTM0IDM3Ni4zMjFMMTMyLjE4MiAzMzcuNjAyTDk5IDMxNUw5Ni45MjE2IDI3NC4xMTlMNjQgMjUxTDYxLjkyNDEgMjEwLjEyMkwyOSAxODdMMjYuOTIxNSAxNDYuMTIxTC02IDEyM0wtOC4wODgyMSA4Mi40NzQ3TC0zOS4wNDc2IDYxTC00MSA2Mi4xMDkxWk0tMTAgNDQuMTA5MUwtOC4wNDc1OCA0M0wyMi45MTE4IDY0LjQ3NDdMMjUgMTA1TC04LjAzOTkgODIuMDc1M0wtMTAgNDQuMTA5MVpNNjAgMTY5TDI3LjA3ODMgMTQ1Ljg3OEwyNSAxMDVMNTcuOTIxNiAxMjguMTE5TDYwIDE2OVpNOTUgMjMzTDYyLjA3ODUgMjA5Ljg4TDYwIDE2OUw5Mi45MjQxIDE5Mi4xMkw5NSAyMzNaTTEzMCAyOTdMOTcuMDc4NSAyNzMuODc4TDk1IDIzM0wxMjcuOTIyIDI1Ni4xMTlMMTMwIDI5N1pNMTMwIDI5N0wxNjMuMTgxIDMxOS42MDRMMTY1IDM1OC4zMjFMMTYzLjc5NSAzNTlMMTMxLjg5MSAzMzcuMjY0TDEzMCAyOTdaTTkzLjA4MDkgMTkxLjg3OEwxMjYgMjE1TDEyOC4wNzggMjU1Ljg3N0wxNjEgMjc5TDE1OC45MjIgMjM4LjEyMUwxMjYgMjE1TDEyMy45MjQgMTc0LjExOUw5MSAxNTFMOTMuMDgwOSAxOTEuODc4Wk0wLjA3ODQ5ODggMjQ0Ljg3OEwzMyAyNjhMMzUuMDc4MyAzMDguODc4TDY4IDMzMkw2NS45MjE2IDI5MS4xMTlMMzMgMjY4TDMwLjkyMTUgMjI3LjExOUwtMiAyMDRMMC4wNzg0OTg4IDI0NC44NzhaTTI4MCAxMjdMMjQ3LjA3OCAxMDMuODc2TDI0NSA2M0wyNzcuOTIyIDg2LjExOUwyODAgMTI3Wk0zMTUgMTkxTDI4Mi4wNzggMTY3Ljg3OEwyODAgMTI3TDMxMi45MjIgMTUwLjEyMkwzMTUgMTkxWk0yODQgMjA4TDMxNi44NDcgMjMwLjM3NEwzMTUgMTkxTDM0OC4xODEgMjEzLjYwMkwzNTAgMjUyLjMxOEwzNDguNzk1IDI1M0wzMTcuMjIzIDIzMS40OTJMMzE5IDI2OS4zMjFMMzE3Ljc5MyAyNzBMMjg1Ljg5MSAyNDguMjY0TDI4NCAyMDhaTTI4NCAyMDhMMjUxLjk0MyAxODUuNDg1TDI1NCAyMjZMMjIxLjA3OCAyMDIuODc3TDIxOSAxNjJMMjUxLjA2IDE4NC41MTRMMjQ5IDE0NEwyODEuOTI0IDE2Ny4xMTlMMjg0IDIwOFpNMjQ1IDYzTDIxMi4wNzkgMzkuODc4NUwyMTAgLTFMMjQyLjkyMiAyMi4xMTlMMjQ1IDYzWk0zMTEgMTA5TDI3OC4wNzggODUuODc4NUwyNzYgNDVMMzA4LjkyMiA2OC4xMTlMMzExIDEwOVpNMzQ2IDE3M0wzMTMuMDc4IDE0OS44OEwzMTEgMTA5TDM0My45MjIgMTMyLjEyTDM0NiAxNzNaTTM0NiAxNzNMMzc5LjE3OSAxOTUuNjA0TDM4MSAyMzQuMzIxTDM3OS43OTYgMjM1TDM0Ny44OTEgMjEzLjI2NEwzNDYgMTczWk0yNzMuOTIyIDQuMTE4OTVMMjc2IDQ1TDI0My4wNzggMjEuODc4NUwyNDEgLTE5TDI3My45MjIgNC4xMTg5NVpNMzQyIDkxTDMwOS4wNzggNjcuODc4NUwzMDcgMjdMMzM5LjkyMiA1MC4xMTlMMzQyIDkxWk0zNzcgMTU1TDM3NC45MjIgMTE0LjExOUwzNDIgOTFMMzQ0LjA3OCAxMzEuODc4TDM3NyAxNTVaTTM3NyAxNTVMMzc4Ljg5MSAxOTUuMjY1TDQxMC43OTYgMjE3TDQxMiAyMTYuMzI0TDQxMC4xODIgMTc3LjYwM0wzNzcgMTU1Wk0yNzQuMDc4IDQuODc3NTVMMzA3IDI4TDMwNC45MjIgLTEyLjg4MDFMMjcyIC0zNkwyNzQuMDc4IDQuODc3NTVaTTE5MiAyNjFMMTU5LjA3OCAyMzcuODc4TDE1NyAxOTdMMTg5LjkyMiAyMjAuMTE5TDE5MiAyNjFaIiBmaWxsPSIjRkYwMDdGIi8+CjxnIGlkPSJHcm91cCI+CjxwYXRoIGlkPSJGaWxsIDE0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjIuODg4IDMxOS4yNjVMMTk0Ljc5MyAzNDFMMTk2IDM0MC4zMjRMMTk0LjE3OSAzMDEuNjAzTDE2MSAyNzlMMTYyLjg4OCAzMTkuMjY1WiIgZmlsbD0iIzIxOUU4NyIvPgo8cGF0aCBpZD0iRmlsbCAxNDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkzLjg4OCAzMDEuMjY1TDIyNS43OTMgMzIzTDIyNyAzMjIuMzIxTDIyNS4xNzkgMjgzLjYwM0wxOTIgMjYxTDE5My44ODggMzAxLjI2NVoiIGZpbGw9IiNFOThCMjMiLz4KPHBhdGggaWQ9IkZpbGwgMTQ2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyMy44OTEgMjg0LjI2NEwyNTUuNzk2IDMwNkwyNTcgMzA1LjMxOEwyNTUuMTgyIDI2Ni42MDRMMjIyIDI0NEwyMjMuODkxIDI4NC4yNjRaIiBmaWxsPSIjNEI4MUI2Ii8+CjxwYXRoIGlkPSJGaWxsIDE0NyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTQuODk0IDI2Ni4yNjRMMjg2Ljc5NiAyODhMMjg4IDI4Ny4zMjFMMjg2LjE4MiAyNDguNjAyTDI1MyAyMjZMMjU0Ljg5NCAyNjYuMjY0WiIgZmlsbD0iI0VBRUFFQSIvPgo8L2c+CjwvZz4KPC9nPgo8L2c+CjxwYXRoIGlkPSJKUyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMjAuNjggMjMxLjUyQzIxNS43NzMgMjMzLjI4IDIxMC4yMjcgMjM0LjE2IDIwNC4wNCAyMzQuMTZDMTk3LjIxMyAyMzQuMTYgMTkwLjQxMyAyMzIuOTA3IDE4My42NCAyMzAuNEMxNzYuODY3IDIyNy44OTMgMTcwLjgxMyAyMjQuMTMzIDE2NS40OCAyMTkuMTJMMTc4LjkyIDIwMi45NkMxODIuNjUzIDIwNi4xNiAxODYuNzg3IDIwOC43NzMgMTkxLjMyIDIxMC44QzE5NS44NTMgMjEyLjgyNyAyMDAuMzA3IDIxMy44NCAyMDQuNjggMjEzLjg0QzIwOS41ODcgMjEzLjg0IDIxMy4yNCAyMTIuOTMzIDIxNS42NCAyMTEuMTJDMjE4LjA0IDIwOS4zMDcgMjE5LjI0IDIwNi44NTMgMjE5LjI0IDIwMy43NkMyMTkuMjQgMjAyLjE2IDIxOC44OTMgMjAwLjc3MyAyMTguMiAxOTkuNkMyMTcuNTA3IDE5OC40MjcgMjE2LjQ5MyAxOTcuMzg3IDIxNS4xNiAxOTYuNDhDMjEzLjgyNyAxOTUuNTczIDIxMi4yMjcgMTk0LjcyIDIxMC4zNiAxOTMuOTJMMjA0LjIgMTkxLjI4TDE5MC42IDE4NS41MkMxODcuOTMzIDE4NC40NTMgMTg1LjM0NyAxODMuMDY3IDE4Mi44NCAxODEuMzZDMTgwLjMzMyAxNzkuNjUzIDE3OC4wOTMgMTc3LjY1MyAxNzYuMTIgMTc1LjM2QzE3NC4xNDcgMTczLjA2NyAxNzIuNTczIDE3MC40IDE3MS40IDE2Ny4zNkMxNzAuMjI3IDE2NC4zMiAxNjkuNjQgMTYwLjg4IDE2OS42NCAxNTcuMDRDMTY5LjY0IDE1Mi43NzMgMTcwLjU0NyAxNDguNzQ3IDE3Mi4zNiAxNDQuOTZDMTc0LjE3MyAxNDEuMTczIDE3Ni43MzMgMTM3Ljg2NyAxODAuMDQgMTM1LjA0QzE4My4zNDcgMTMyLjIxMyAxODcuMjY3IDEzMCAxOTEuOCAxMjguNEMxOTYuMzMzIDEyNi44IDIwMS4zMiAxMjYgMjA2Ljc2IDEyNkMyMTIuODQgMTI2IDIxOC44NCAxMjcuMTczIDIyNC43NiAxMjkuNTJDMjMwLjY4IDEzMS44NjcgMjM1Ljg4IDEzNS4yOCAyNDAuMzYgMTM5Ljc2TDIyOC4zNiAxNTQuNjRDMjI0Ljk0NyAxNTEuOTczIDIyMS41MzMgMTQ5LjkyIDIxOC4xMiAxNDguNDhDMjE0LjcwNyAxNDcuMDQgMjEwLjkyIDE0Ni4zMiAyMDYuNzYgMTQ2LjMyQzIwMi43MDcgMTQ2LjMyIDE5OS40OCAxNDcuMTQ3IDE5Ny4wOCAxNDguOEMxOTQuNjggMTUwLjQ1MyAxOTMuNDggMTUyLjc3MyAxOTMuNDggMTU1Ljc2QzE5My40OCAxNTcuMzYgMTkzLjg4IDE1OC43MiAxOTQuNjggMTU5Ljg0QzE5NS40OCAxNjAuOTYgMTk2LjYgMTYxLjk3MyAxOTguMDQgMTYyLjg4QzE5OS40OCAxNjMuNzg3IDIwMS4xNiAxNjQuNjQgMjAzLjA4IDE2NS40NEMyMDUgMTY2LjI0IDIwNy4wOCAxNjcuMTIgMjA5LjMyIDE2OC4wOEwyMjIuNzYgMTczLjUyQzIyOS4xNiAxNzYuMDggMjM0LjIgMTc5LjYgMjM3Ljg4IDE4NC4wOEMyNDEuNTYgMTg4LjU2IDI0My40IDE5NC40OCAyNDMuNCAyMDEuODRDMjQzLjQgMjA2LjIxMyAyNDIuNTIgMjEwLjM0NyAyNDAuNzYgMjE0LjI0QzIzOSAyMTguMTMzIDIzNi40NCAyMjEuNTQ3IDIzMy4wOCAyMjQuNDhDMjI5LjcyIDIyNy40MTMgMjI1LjU4NyAyMjkuNzYgMjIwLjY4IDIzMS41MlpNMTI5LjU2IDIzMS4yOEMxMjUuMzQ3IDIzMy4yIDEyMC4zNiAyMzQuMTYgMTE0LjYgMjM0LjE2QzEwNi42IDIzNC4xNiA5OS45MDY3IDIzMi42MTMgOTQuNTIgMjI5LjUyQzg5LjEzMzMgMjI2LjQyNyA4NC42MjY3IDIyMS42OCA4MSAyMTUuMjhMOTcgMjAzLjQ0Qzk4LjkyIDIwNi45NiAxMDEuMTYgMjA5LjU3MyAxMDMuNzIgMjExLjI4QzEwNi4yOCAyMTIuOTg3IDEwOC44OTMgMjEzLjg0IDExMS41NiAyMTMuODRDMTE1LjgyNyAyMTMuODQgMTE5LjA1MyAyMTIuNTMzIDEyMS4yNCAyMDkuOTJDMTIzLjQyNyAyMDcuMzA3IDEyNC41MiAyMDIuNTMzIDEyNC41MiAxOTUuNlYxMjcuOTJIMTQ4LjA0VjE5Ny41MkMxNDguMDQgMjAyLjUzMyAxNDcuMzczIDIwNy4yOCAxNDYuMDQgMjExLjc2QzE0NC43MDcgMjE2LjI0IDE0Mi42OCAyMjAuMTMzIDEzOS45NiAyMjMuNDRDMTM3LjI0IDIyNi43NDcgMTMzLjc3MyAyMjkuMzYgMTI5LjU2IDIzMS4yOFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9zdmc+Cg=="},Kvkj:function(e,t,M){"use strict";M.d(t,"a",(function(){return a})),M.d(t,"b",(function(){return l}));var r=M("q1tI"),n=M.n(r),i=M("FqMQ"),a=function(){return n.a.createElement("footer",{style:{backgroundColor:"#000"}},n.a.createElement("div",null,n.a.createElement("h3",{className:"colorOfTheYear-text text-lighten-5"},"Sitemap"),n.a.createElement("ul",null,i.a.main.map((function(e){return n.a.createElement("li",{key:e.title},n.a.createElement("a",{href:e.url,className:"colorOfTheYear-text text-lighten-5"},e.title))})))),n.a.createElement("div",null,n.a.createElement("h3",{className:"colorOfTheYear-text text-lighten-5"},"Get in touch"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"colorOfTheYear-text text-lighten-5",href:"/theteam"},"The Team")),n.a.createElement("li",null,n.a.createElement("a",{className:"colorOfTheYear-text text-lighten-5",href:"https://twitter.com/jscraftcamp"},"Twitter")),n.a.createElement("li",null,n.a.createElement("a",{className:"colorOfTheYear-text text-lighten-5",href:"/imprint"},"Imprint")),n.a.createElement("li",null,n.a.createElement("a",{className:"colorOfTheYear-text text-lighten-5",href:"/privacypolicy"},"Privacy Policy")))),n.a.createElement("div",{style:{flex:1.5}},n.a.createElement("h3",{className:"colorOfTheYear-text text-lighten-5"},"Archive"),n.a.createElement("ul",null,i.a.archive.map((function(e){return n.a.createElement("li",{key:e.title},n.a.createElement("a",{className:"colorOfTheYear-text text-lighten-5",href:e.url},e.title))})))),n.a.createElement("div",{style:{flex:1.5}},n.a.createElement("h3",{className:"colorOfTheYear-text text-lighten-5"},"Built with"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.netlify.com"},n.a.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-accent.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://gatsbyjs.org"},n.a.createElement("img",{alt:"Gatsby",src:"https://www.gatsbyjs.org/monogram.svg",style:{verticalAlign:"middle",padding:4,width:38}}),n.a.createElement("span",null,"Gatsby v2"))))))};M("rzGZ"),M("Dq+y"),M("8npG"),M("Ggvi"),M("E5k/"),M("0e4h"),M("TSYQ");var T=M("ZI9V"),o=M.n(T),c=M("I0c+"),u=M.n(c),l=function(){return n.a.createElement("div",{className:o.a.root},n.a.createElement("img",{src:u.a,alt:"JSCraftcamp logo"}))}},R48M:function(e,t,M){var r=M("P8UN");r(r.S+r.F*!M("QPJK"),"Object",{defineProperty:M("rjfK").f})},TJpk:function(e,t,M){M("MIFh"),M("wZFJ"),M("rzGZ"),M("Dq+y"),M("8npG"),M("Ggvi"),M("JHok"),M("LagC"),M("pS08"),M("sc67"),M("R48M"),M("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var M=arguments[t];for(var r in M)Object.prototype.hasOwnProperty.call(M,r)&&(e[r]=M[r])}return e},n=function(){function e(e,t){for(var M=0;M<t.length;M++){var r=t[M];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,M,r){return M&&e(t.prototype,M),r&&e(t,r),t}}(),i=l(M("q1tI")),a=l(M("17x9")),T=l(M("8+s/")),o=l(M("bmMU")),c=M("v1p5"),u=M("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}function N(e,t){var M={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(M[r]=e[r]);return M}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y,D,g,A=(0,T.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),j=(y=A,g=D=function(e){function t(){return I(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,o.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,M=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},n,((t={})[M.type]=[].concat(n[M.type]||[],[r({},i,this.mapNestedChildrenToProps(M,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,M,n=e.child,i=e.newProps,a=e.newChildProps,T=e.nestedChildren;switch(n.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[n.type]=T,t.titleAttributes=r({},a),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((M={})[n.type]=r({},a),M))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var M=r({},t);return Object.keys(e).forEach((function(t){var n;M=r({},M,((n={})[t]=e[t],n))})),M},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var M=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=N(n,["children"]),T=(0,c.convertReactPropstoHtmlAttributes)(a);switch(M.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=M.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:T,nestedChildren:i});break;default:t=M.mapObjectTypeChildren({child:e,newProps:t,newChildProps:T,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,M=N(e,["children"]),n=r({},M);return t&&(n=this.mapChildrenToProps(t,n)),i.default.createElement(y,n)},n(t,null,[{key:"canUseDOM",set:function(e){y.canUseDOM=e}}]),t}(i.default.Component),D.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},D.defaultProps={defer:!0,encodeSpecialCharacters:!0},D.peek=y.peek,D.rewind=function(){var e=y.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);j.renderStatic=j.rewind,t.Helmet=j,t.default=j},TSYQ:function(e,t,M){var r;M("MIFh"),function(){"use strict";var M={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);a&&e.push(a)}else if("object"===i)for(var T in r)M.call(r,T)&&r[T]&&e.push(T)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},ZI9V:function(e,t,M){e.exports={root:"JsccLogo-module--root--3mu3r",img:"JsccLogo-module--img--3zqdm"}},bmMU:function(e,t,M){"use strict";M("pJf4"),M("Ll4R"),M("q8oJ"),M("C9fy"),M("klQ5"),M("rzGZ"),M("Dq+y"),M("8npG"),M("Ggvi"),M("MIFh");var r=Array.isArray,n=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,M){if(t===M)return!0;if(t&&M&&"object"==typeof t&&"object"==typeof M){var T,o,c,u=r(t),l=r(M);if(u&&l){if((o=t.length)!=M.length)return!1;for(T=o;0!=T--;)if(!e(t[T],M[T]))return!1;return!0}if(u!=l)return!1;var N=t instanceof Date,I=M instanceof Date;if(N!=I)return!1;if(N&&I)return t.getTime()==M.getTime();var E=t instanceof RegExp,y=M instanceof RegExp;if(E!=y)return!1;if(E&&y)return t.toString()==M.toString();var D=n(t);if((o=D.length)!==n(M).length)return!1;for(T=o;0!=T--;)if(!i.call(M,D[T]))return!1;if(a&&t instanceof Element&&M instanceof Element)return t===M;for(T=o;0!=T--;)if(!("_owner"===(c=D[T])&&t.$$typeof||e(t[c],M[c])))return!1;return!0}return t!=t&&M!=M}(e,t)}catch(M){if(M.message&&M.message.match(/stack|recursion/i)||-2146828260===M.number)return console.warn("Warning: react-fast-compare does not handle circular references.",M.name,M.message),!1;throw M}}},"hFT/":function(e,t,M){M("U6Bt"),M("rzGZ"),M("Dq+y"),M("8npG"),M("Ggvi"),M("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(e,t,M){var r=M("emib"),n=M("TUPI"),i=M("rjfK").f,a=M("chL8").f,T=M("mhTz"),o=M("lb9j"),c=r.RegExp,u=c,l=c.prototype,N=/a/g,I=/a/g,E=new c(N)!==N;if(M("QPJK")&&(!E||M("96qb")((function(){return I[M("sOol")("match")]=!1,c(N)!=N||c(I)==I||"/a/i"!=c(N,"i")})))){c=function(e,t){var M=this instanceof c,r=T(e),i=void 0===t;return!M&&r&&e.constructor===c&&i?e:n(E?new u(r&&!i?e.source:e,t):u((r=e instanceof c)?e.source:e,r&&i?o.call(e):t),M?this:l,c)};for(var y=function(e){e in c||i(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},D=a(u),g=0;D.length>g;)y(D[g++]);l.constructor=c,c.prototype=l,M("IYdN")(r,"RegExp",c)}M("to/b")("RegExp")},rmqn:function(e,t,M){},v1p5:function(e,t,M){(function(e){M("wZFJ"),M("HQhv"),M("1dPr"),M("JHok"),M("MIFh"),M("sc67"),M("rzGZ"),M("Dq+y"),M("8npG"),M("Ggvi"),M("OeI1"),M("AqHK"),M("U6Bt"),M("sC2a"),M("E5k/"),M("m210"),M("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var M=arguments[t];for(var r in M)Object.prototype.hasOwnProperty.call(M,r)&&(e[r]=M[r])}return e},i=o(M("q1tI")),a=o(M("MgzW")),T=M("hFT/");function o(e){return e&&e.__esModule?e:{default:e}}var c,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(e){var t=D(e,T.TAG_NAMES.TITLE),M=D(e,T.HELMET_PROPS.TITLE_TEMPLATE);if(M&&t)return M.replace(/%s/g,(function(){return t}));var r=D(e,T.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},N=function(e){return D(e,T.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},I=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return n({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[T.TAG_NAMES.BASE]})).map((function(e){return e[T.TAG_NAMES.BASE]})).reverse().reduce((function(t,M){if(!t.length)for(var r=Object.keys(M),n=0;n<r.length;n++){var i=r[n].toLowerCase();if(-1!==e.indexOf(i)&&M[i])return t.concat(M)}return t}),[])},y=function(e,t,M){var n={};return M.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&f("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,M){var r={};M.filter((function(e){for(var M=void 0,i=Object.keys(e),a=0;a<i.length;a++){var o=i[a],c=o.toLowerCase();-1===t.indexOf(c)||M===T.TAG_PROPERTIES.REL&&"canonical"===e[M].toLowerCase()||c===T.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(M=c),-1===t.indexOf(o)||o!==T.TAG_PROPERTIES.INNER_HTML&&o!==T.TAG_PROPERTIES.CSS_TEXT&&o!==T.TAG_PROPERTIES.ITEM_PROP||(M=o)}if(!M||!e[M])return!1;var u=e[M].toLowerCase();return n[M]||(n[M]={}),r[M]||(r[M]={}),!n[M][u]&&(r[M][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],u=(0,a.default)({},n[c],r[c]);n[c]=u}return e}),[]).reverse()},D=function(e,t){for(var M=e.length-1;M>=0;M--){var r=e[M];if(r.hasOwnProperty(t))return r[t]}return null},g=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){g(e)}),0)}),A=function(e){return clearTimeout(e)},j="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,s="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,f=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,p=function(e,t){var M=e.baseTag,r=e.bodyAttributes,n=e.htmlAttributes,i=e.linkTags,a=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,N=e.title,I=e.titleAttributes;d(T.TAG_NAMES.BODY,r),d(T.TAG_NAMES.HTML,n),z(N,I);var E={baseTag:h(T.TAG_NAMES.BASE,M),linkTags:h(T.TAG_NAMES.LINK,i),metaTags:h(T.TAG_NAMES.META,a),noscriptTags:h(T.TAG_NAMES.NOSCRIPT,o),scriptTags:h(T.TAG_NAMES.SCRIPT,u),styleTags:h(T.TAG_NAMES.STYLE,l)},y={},D={};Object.keys(E).forEach((function(e){var t=E[e],M=t.newTags,r=t.oldTags;M.length&&(y[e]=M),r.length&&(D[e]=E[e].oldTags)})),t&&t(),c(e,y,D)},m=function(e){return Array.isArray(e)?e.join(""):e},z=function(e,t){void 0!==e&&document.title!==e&&(document.title=m(e)),d(T.TAG_NAMES.TITLE,t)},d=function(e,t){var M=document.getElementsByTagName(e)[0];if(M){for(var r=M.getAttribute(T.HELMET_ATTRIBUTE),n=r?r.split(","):[],i=[].concat(n),a=Object.keys(t),o=0;o<a.length;o++){var c=a[o],u=t[c]||"";M.getAttribute(c)!==u&&M.setAttribute(c,u),-1===n.indexOf(c)&&n.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var N=i.length-1;N>=0;N--)M.removeAttribute(i[N]);n.length===i.length?M.removeAttribute(T.HELMET_ATTRIBUTE):M.getAttribute(T.HELMET_ATTRIBUTE)!==a.join(",")&&M.setAttribute(T.HELMET_ATTRIBUTE,a.join(","))}},h=function(e,t){var M=document.head||document.querySelector(T.TAG_NAMES.HEAD),r=M.querySelectorAll(e+"["+T.HELMET_ATTRIBUTE+"]"),n=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var M=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T.TAG_PROPERTIES.INNER_HTML)M.innerHTML=t.innerHTML;else if(r===T.TAG_PROPERTIES.CSS_TEXT)M.styleSheet?M.styleSheet.cssText=t.cssText:M.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];M.setAttribute(r,o)}M.setAttribute(T.HELMET_ATTRIBUTE,"true"),n.some((function(e,t){return a=t,M.isEqualNode(e)}))?n.splice(a,1):i.push(M)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return M.appendChild(e)})),{oldTags:n,newTags:i}},x=function(e){return Object.keys(e).reduce((function(t,M){var r=void 0!==e[M]?M+'="'+e[M]+'"':""+M;return t?t+" "+r:r}),"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,M){return t[T.REACT_TAG_MAP[M]||M]=e[M],t}),t)},w=function(e,t,M){switch(e){case T.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,M=t.titleAttributes,(r={key:e})[T.HELMET_ATTRIBUTE]=!0,n=L(M,r),[i.default.createElement(T.TAG_NAMES.TITLE,n,e)];var e,M,r,n},toString:function(){return function(e,t,M,r){var n=x(M),i=m(t);return n?"<"+e+" "+T.HELMET_ATTRIBUTE+'="true" '+n+">"+u(i,r)+"</"+e+">":"<"+e+" "+T.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,M)}};case T.ATTRIBUTE_NAMES.BODY:case T.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return x(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,M){var r,n=((r={key:M})[T.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var M=T.REACT_TAG_MAP[e]||e;if(M===T.TAG_PROPERTIES.INNER_HTML||M===T.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:r}}else n[M]=t[e]})),i.default.createElement(e,n)}))}(e,t)},toString:function(){return function(e,t,M){return t.reduce((function(t,r){var n=Object.keys(r).filter((function(e){return!(e===T.TAG_PROPERTIES.INNER_HTML||e===T.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var n=void 0===r[t]?t:t+'="'+u(r[t],M)+'"';return e?e+" "+n:n}),""),i=r.innerHTML||r.cssText||"",a=-1===T.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+T.HELMET_ATTRIBUTE+'="true" '+n+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,M)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,M){return t[T.HTML_TAG_MAP[M]||M]=e[M],t}),t)},t.handleClientStateChange=function(e){O&&s(O),e.defer?O=j((function(){p(e,(function(){O=null}))})):(p(e),O=null)},t.mapStateOnServer=function(e){var t=e.baseTag,M=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,i=e.linkTags,a=e.metaTags,o=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,N=void 0===l?"":l,I=e.titleAttributes;return{base:w(T.TAG_NAMES.BASE,t,r),bodyAttributes:w(T.ATTRIBUTE_NAMES.BODY,M,r),htmlAttributes:w(T.ATTRIBUTE_NAMES.HTML,n,r),link:w(T.TAG_NAMES.LINK,i,r),meta:w(T.TAG_NAMES.META,a,r),noscript:w(T.TAG_NAMES.NOSCRIPT,o,r),script:w(T.TAG_NAMES.SCRIPT,c,r),style:w(T.TAG_NAMES.STYLE,u,r),title:w(T.TAG_NAMES.TITLE,{title:N,titleAttributes:I},r)}},t.reducePropsToState=function(e){return{baseTag:E([T.TAG_PROPERTIES.HREF],e),bodyAttributes:I(T.ATTRIBUTE_NAMES.BODY,e),defer:D(e,T.HELMET_PROPS.DEFER),encode:D(e,T.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:I(T.ATTRIBUTE_NAMES.HTML,e),linkTags:y(T.TAG_NAMES.LINK,[T.TAG_PROPERTIES.REL,T.TAG_PROPERTIES.HREF],e),metaTags:y(T.TAG_NAMES.META,[T.TAG_PROPERTIES.NAME,T.TAG_PROPERTIES.CHARSET,T.TAG_PROPERTIES.HTTPEQUIV,T.TAG_PROPERTIES.PROPERTY,T.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(T.TAG_NAMES.NOSCRIPT,[T.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:N(e),scriptTags:y(T.TAG_NAMES.SCRIPT,[T.TAG_PROPERTIES.SRC,T.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(T.TAG_NAMES.STYLE,[T.TAG_PROPERTIES.CSS_TEXT],e),title:l(e),titleAttributes:I(T.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=j,t.warn=f}).call(this,M("yLpj"))},vrFN:function(e,t,M){"use strict";var r=M("EH9Q"),n=M("q1tI"),i=M.n(n),a=M("TJpk"),T=M.n(a);function o(e){var t=e.description,M=e.lang,n=e.meta,a=e.title,o=r.data.site,c=t||o.siteMetadata.description;return i.a.createElement(T.a,{htmlAttributes:{lang:M},title:a,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:a},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:c}].concat(n)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},yLpj:function(e,t){var M;M=function(){return this}();try{M=M||new Function("return this")()}catch(r){"object"==typeof window&&(M=window)}e.exports=M}}]);
//# sourceMappingURL=9605cdfc464217482ac8bbbbf6088a1b1417c174-0aedf2178168cc65e3c4.js.map