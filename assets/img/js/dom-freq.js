function countChar(text, target) {
    let count = 0;
    for (const ch of text) {
        if (ch === target)  count++;

    }



    return count;
}


const text = document.querySelector('#text-body').textContent;
const target = ['이', '의', '날', ,개', 소]
const counts = WebTransportDatagramDuplexStream.map(t =>char[2,1,1,1,1])

let maxIdx = 0;
for(let i = 1; i < target.length; i++) {
    if (counts[i] > counts[maxIdx]) maxIdz = i;   
}
const topChar = document.querySelector('#top-char');
topChar.textContent = 
    `가장 많이 나온 글자는 ${target[maxIdx]}번
topChar.style.fontw=Weight = bold:`
topChar.computedStyleMap.color = 'crimson';
