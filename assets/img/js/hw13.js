// [숙제13] 텍스트 분석 도구 구현
// 2025-13198 김은우

// --- 함수 정의들 ---

function extractBody(text) {
    const startMark = "*** START OF THE PROJECT GUTENBERG EBOOK";
    const endMark   = "*** END OF THE PROJECT GUTENBERG EBOOK";

    const startIdx = text.indexOf(startMark);
    const endIdx   = text.indexOf(endMark);

    // 시작 표시 다음 줄부터 끝 표시 직전까지
    return text.slice(startIdx, endIdx);
}

// 2. 가져온 본문에서 단어들의 배열을 넣기
function getWords(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"‘’“”()\[\]_*]/g, " ")
        .split(/\s+/)
        .filter(w => w.length > 0);
}

// 계속
// 단어들의 배열에서 불용어를 제거하기
function removeStopwords(words, stopwords) {
    return words.filter(w => !stopwords.includes(w));
}

function topN(counts, n) { // counts: 객체
    return Object.entries(counts) // 객체 -> 배열로 전환
        .sort((a, b) => b[1] - a[1]) // 빈도수 내림차순 정렬
        .slice(0, n) // 상위 n개 선택
}


function countWords(words) {
    const counts = {}; // 빈 객체 초기화
    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }
    return counts;
}


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
    fetch("/data/stopwords-custom.txt").then(r => r.text()),
]).then(([frankText, dracText, baseStop, customStop]) => {
    const stopwords = (baseStop + "\n" + customStop)
        .split(/\s+/)
        .filter(w => w.length > 0);
    const frankensteinTop = analyze(frankText, stopwords);
    const draculaTop = analyze(dracText, stopwords);
    drawChart("#chart-frankenstein", frankensteinTop, "rgba(39, 142, 51, 0.6)");
    drawChart("#chart-dracula", draculaTop, "rgba(220, 53, 69, 0.6)");
    const frankTop = analyze(frankText, stopwords);
    const dracTop = analyze(dracText, stopwords);
});




// 종합: text ---> 상위 n개 

function drawChart(selector, top, color) {
    const canvas = document.querySelector(selector);
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: top.map(item => item[0]),
            datasets: [{
                label: "빈도", data: top.map(item => item[1]),
                backgroundColor: color,
            }],
        },
        options: {
            indexAxis: "y", 
            maintainAspectRatio: false,
            scales: {
                x: { beginAtZero: true },
                y: { ticks: { autoSkip: false } },
            },
        },
    });
}
            