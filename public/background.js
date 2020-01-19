/*global chrome*/
// chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
//   console.log(tabs[0]);
// });

//alert(window);
let arr = [
  {
    category: "uncategorised",
    icons: []
  }
];
let ss = JSON.stringify(arr);

chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
  if (cookie == undefined) {
    //p alert("new");
    chrome.cookies.set(
      { url: "https://*/", name: "store", value: ss },
      function() {}
    );
  }
});

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
  //alert(arr[1].icons[0]);
  chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
    const jsonFile = JSON.parse(cookie.value);
    for (let i = 0; i < jsonFile.length; i++) {
      let iconsArray = jsonFile[i].icons;
      for (let j = 0; j < iconsArray.length; j++) {
        if (iconsArray[j].id == tabid) {
          iconsArray.splice(j, 1);
          break;
        }
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
    change[change.length - 1].icons.push({
      id: tab.id,
      favIconUrl: "https://www.google.com/images/icons/product/chrome-32.png"
    });
    const ss = JSON.stringify(change);
    chrome.cookies.set(
      { url: "https://*/", name: "store", value: ss },
      function(cookie2) {
        // alert(cookie2.value);
      }
    );
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url || changeInfo.favIconUrl) {
    chrome.cookies.get({ url: "https://*/", name: "store" }, function(cookie) {
      const jsonFile = JSON.parse(cookie.value);
      for (let i = 0; i < jsonFile.length; i++) {
        let iconsArray = jsonFile[i].icons;
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
