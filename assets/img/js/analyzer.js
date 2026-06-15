let resultChart = null; 
let stopwords = [];

fetch('/assets/data/stopwords-en.txt')
  .then(response => response.text())
  .then(text => {
      stopwords = getWords(text); 
  });

document.getElementById('analyzeBtn').addEventListener('click', function() {
    let text = document.getElementById('inputText').value;
    
    let words = getWords(text);
    words = removeStopwords(words, stopwords);
    let counts = countWords(words);
    let top20 = topN(counts, 20);
    
    if (resultChart) {
        resultChart.destroy();
    }
    
    resultChart = drawChart('resultCanvas', top20);
});
