const canvas = document.querySelector("#my-chart");

new Chart(canvas, {
    type: "bar",
    data: {
        labels: ["김소월", "이상", "윤동주"],
        datasets: [{
            label: "작품 수",
            data: [3, 5, 2],
        }],
    },
});

fetch("/data/poems-csv")
    .then(response => response.text())
    .then(csv => {
        const data = csv
            .split("\n")
            .slice(1)
            .filter(line => line.trim() !== "")
            .map(line => {
                const cols = line.split(",");
                return {
                    year: Number(cols[0]),
                    author: cols[1].trim(),
                    count: Number(cols[2]),
                };
            });
        drawChart(data);
    });

function drawChart(rows) {
    const labels = rows.map(r => r.author);
    const counts = rows.map(r => r.count);

    const canvas = document.querySelector("#poems-chart");
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{label: "작품 편수", data: counts }],
        },
    });
}