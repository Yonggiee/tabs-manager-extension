/*global chrome*/

function getCookie() {
  chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
    return JSON.parse(cookie.value);
  });
}
