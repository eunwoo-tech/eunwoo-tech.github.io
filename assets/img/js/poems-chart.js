new Chart(canvas, {
    type: "line",
    data: {
        labels: rows.map(r => r.year),
        datasets: [{
            label: "작품 편수",
            data: rows.map(r => r.count),
        }],
    },
});

new Chart(canvas, {
    type: "pie",
    data: {
        labels: ["김소월", "이상", "윤동주"],
        datasets: [{
            label: "작품 편수",
            data: [127, 60, 89],
        }],
    },
});

datasets: [{
    label: "작품 편수",
    data: [127, 42, 18, 89],
    backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
    ],
}]

new Chart(canvas, {
    type: "bar",
    data: { },
    options: {
        plugins: {
            title: { display: true, text: "한국 현대시인 작품 편수"},
            legend: { display: true},
        },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: "작품 편수" } },
            x: { title: { display: true, text: "작가" } },
        },
    },
});
