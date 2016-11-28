/* global chrome */

const callRegex = /zoom.us\/j\/\d*/
const duration = 10 // number of seconds

// zoom opens a brand new tab, so it wont work for manual navigation
// if this breaks, might need to use alarms api instead?

chrome.tabs.onCreated.addListener(function (tab) {
  if (tab.url.match(callRegex)) {
    setTimeout(function () {
      chrome.tabs.remove(tab.id)
    }, duration * 1000)
  }
})
