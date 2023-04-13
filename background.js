function analyzeSentiment(text, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/analyze', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        callback(data.label);
      } else {
        console.error('Error:', xhr.statusText);
        callback('NEUTRAL');
      }
    }
  };
  xhr.send(JSON.stringify({ text: text }));
}

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text) {
      analyzeSentiment(request.text, (sentiment) => {
        chrome.storage.local.set({ sentiment: sentiment });
      });
    }
  });
  
  