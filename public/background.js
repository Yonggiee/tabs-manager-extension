/*global chrome*/
// chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
//   console.log(tabs[0]);
// });

//alert(window);
const arr = {
      "0": [],
      "1": [],
      "2": [],
      "3": [],
      "4": []
    };

let ss = JSON.stringify(arr);

chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
  if (cookie == undefined) {
    chrome.cookies.set(
      { url: "https://*/", name: "store", value: ss },
      function() {}
    );
  }
});

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
  chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
    const jsonFile = JSON.parse(cookie.value);
    let iconsArray = Object.values(jsonFile);
      for (let j = 0; j < iconsArray.length; j++) {
        if (iconsArray[j].id == tabid) {
          iconsArray.splice(j, 1);
          break;
        }
      }
    const ss = JSON.stringify(jsonFile);
    chrome.cookies.set(
      { url: "https://*/", name: "store", value: ss },
      function(cookie2) {
        //alert(cookie2.value);
      }
    );
  });
});

chrome.tabs.onCreated.addListener(function(tab) {
  chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
    const change = JSON.parse(cookie.value);
    change["0"].push({
      id: tab.id,
      favIconUrl: "https://www.google.com/images/icons/product/chrome-32.png"
    });
    const ss = JSON.stringify(change);
    chrome.cookies.set(
      { url: "https://*/", name: "store", value: ss },
      function(cookie2) {
         alert(cookie2.value);
      }
    );
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url || changeInfo.favIconUrl) {
    chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
      const jsonFile = JSON.parse(cookie.value);
      let iconsArray = Object.values(jsonFile);
        for (let j = 0; j < iconsArray.length; j++) {
          if (iconsArray[j].id == tabId) {
            let temp = changeInfo.favIconUrl;
           // alert(temp);
            if (temp != undefined) {
              iconsArray[j].favIconUrl = temp;
              break;
            }
          }
        }
      const ss = JSON.stringify(jsonFile);
      chrome.cookies.set(
        { url: "https://*/", name: "store", value: ss },
        function(cookie2) {
        //  alert(cookie2.value);
        }
      );
    });
  }
});
