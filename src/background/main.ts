import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
  console.log("Job Search Helper extension installed.");
});
