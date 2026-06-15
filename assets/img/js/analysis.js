function getWords(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"‘’“”()\[\]_*]/g, " ")
        .split(/\s+/)
        .filter(w => w.length > 0);
}


// Gemini가 작성한 코드입니다. https://gemini.google.com/app/0f92461f14d6b461?pageId=none
function drawChart(canvasId, topNResult) {
    // 1. topN 결과에서 라벨(단어)과 데이터(빈도수) 분리
    const labelArray = topNResult.map(item => item[0]); 
    const dataArray = topNResult.map(item => item[1]);

    // 2. 캔버스 요소 찾기
    const canvasElement = document.getElementById(canvasId);
    
    // 🔥 디버깅 방어선: 캔버스를 못 찾으면 콘솔에 이유를 띄우고 멈춤
    if (!canvasElement) {
        console.error(`"${canvasId}"라는 ID를 가진 캔버스를 HTML에서 찾을 수 없습니다!`);
        return null;
    }

    const ctx = canvasElement.getContext('2d');
    
    // 3. 차트를 그리고 객체 반환 [cite: 48]
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelArray,
            datasets: [{
                label: '단어 빈도수',
                data: dataArray,
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