/*global chrome*/

// const arr = {
//   Work: [],
//   Study: [],
//   Games: [],
//   Movies: [],
//   Uncategorised: []
// };

// let ss = JSON.stringify(arr);

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
  chrome.storage.local.get('stored', function (result) {
    const arr = JSON.parse(result.stored);
    let arrKeys = Object.keys(arr);
    let isBreak = false;
    for (let x of arrKeys) {
      let cate = arr[x];
      if(!isBreak) {
        for (let j = 0; j < cate.length; j++) {
          if (cate[j].id == tabid) {
            cate.splice(j, 1);
            arr[x] = cate;
            isBreak = true;
            break;
          }
        }
      }
    }
    const ss = JSON.stringify(arr);
    chrome.storage.local.set({'stored': ss }, function () {});
  });
});

chrome.tabs.onCreated.addListener(function(tab) {
  chrome.storage.local.get('stored', function (result) {
    const change = JSON.parse(result.stored);
    change.Uncategorised.push({
      id: tab.id,
      favIconUrl: "https://www.google.com/images/icons/product/chrome-32.png"
    });
    const ss = JSON.stringify(change);
    chrome.storage.local.set({ 'stored': ss }, function () { });
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url || changeInfo.favIconUrl) {
    chrome.storage.local.get('stored', function (result) {
      const arr = JSON.parse(result.stored);
      let arrKeys = Object.keys(arr);
      let isBreak = false;
      for (let x of arrKeys) {
      let cate = arr[x];
      if(!isBreak) {
        for (let j = 0; j < cate.length; j++) {
          if (cate[j].id == tab.id) {
            cate.splice(j, 1);
            arr[x] = cate;
            isBreak = true;
            break;
          }
        }
      }
    }
      arr.Uncategorised.push({
        id: tab.id,
        favIconUrl: tab.favIconUrl
      });
      const ss = JSON.stringify(arr);
      chrome.storage.local.set({'stored': ss }, function () { });
    });
  }
});


