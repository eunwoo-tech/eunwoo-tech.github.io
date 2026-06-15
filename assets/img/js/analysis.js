function getWords(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"‘’“”()\[\]_*]/g, " ")
        .split(/\s+/)
        .filter(w => w.length > 0);
}


// Gemini가 작성한 코드입니다. https://gemini.google.com/app/0f92461f14d6b461?pageId=none
function drawChart(canvasId, labelArray, dataArray) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // 차트 객체를 생성함과 동시에 return 합니다.
    return new Chart(ctx, {
        type: 'bar', // 과제에서 요구하는 막대그래프
        data: {
            labels: labelArray, // x축 데이터 (단어 배열)
            datasets: [{
                label: '단어 빈도수',
                data: dataArray, // y축 데이터 (빈도수 배열)
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
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