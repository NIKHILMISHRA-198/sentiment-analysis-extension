document.addEventListener("DOMContentLoaded", () => {
    const sentimentElement = document.getElementById("sentiment");
  
    chrome.storage.local.get("sentiment", (data) => {
      if (data.sentiment !== undefined) {
        sentimentElement.innerText = data.sentiment;
      } else {
        sentimentElement.innerText = "No sentiment analysis available";
      }
    });
  });
  