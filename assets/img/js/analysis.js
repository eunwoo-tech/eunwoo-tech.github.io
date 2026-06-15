function getWords(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"‘’“”()\[\]_*]/g, " ")
        .split(/\s+/)
        .filter(w => w.length > 0);
}


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
    return new Chart();
}

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