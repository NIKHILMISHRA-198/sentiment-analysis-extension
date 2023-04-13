function getTextFromPage() {
    const bodyText = document.body.innerText;
    return bodyText;
  }
  
  chrome.runtime.sendMessage({ text: getTextFromPage() });
  