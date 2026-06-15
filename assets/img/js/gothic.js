function extractBody(text) {
    const startMark = "*** START OF THE PROJECT GUTENBERG EBOOK";
    const endMark   = "*** END OF THE PROJECT GUTENBERG EBOOK";

    const startIdx = text.indexOf(startMark);
    const endIdx   = text.indexOf(endMark);

    // 시작 표시 다음 줄부터 끝 표시 직전까지
    return text.slice(startIdx, endIdx);
}

// 2. 가져온 본문에서 단어들의 배열을 넣기



function analyze(text, stopwords) {
    const body = extractBody(text);
    const words = getWords(body);
    const cleaned = removeStopwords(words, stopwords);
    const counts = countWords(cleaned);
    return topN(counts, 30);
}




Promise.all([
    fetch("/data/frankenstein.txt").then(r => r.text()),
    fetch("/data/dracula.txt").then(r => r.text()),
    fetch("/data/stopwords-en.txt").then(r => r.text()),
]).then(([frankensteinText, draculaText, stopwordsText]) => {
    const stopwords = stopwordsText.split(/\s+/)
    .filter(w => w.length > 0);
    const frankensteinTop = analyze(frankensteinText, stopwords);
    const draculaTop = analyze(draculaText, stopwords);
    drawChart("chart-frankenstein", frankensteinTop, "rgba(220, 53, 69, 0.6)");
    drawChart("chart-dracula", draculaTop, "rgba(54, 162, 235, 0.6)");
});

// 종합: text ---> 상위 n개 

