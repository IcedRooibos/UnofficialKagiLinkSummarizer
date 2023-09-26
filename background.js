// The function kagiSummarize is called when clicking the context menu item.
function kagiSummarize(info, tab) {
  let url = info.linkUrl
  browser.tabs.create({url: `https://kagi.com/summarizer/index.html?url=${encodeURIComponent(url)}`});
}

// Create a context menu item.
browser.contextMenus.create({
  id: "kagi-summarize",
  title: "Kagi Summarize",
  contexts: ["link"], // Only show the menu item for links.
});

// Add a listener for the context menu item.
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "kagi-summarize") {
    kagiSummarize(info, tab);
  }
});