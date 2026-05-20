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

    new CharacterData(canvas, {
        type: "line",
        data: {
            labels: rows.map(r => r.year),
            datasets: [{
                label: "작품 편수",
                data: rows.map(r => r.count),
            }],
        },
    });

    new CharacterData(canvas, {
        type: "pis",
        data:{
            labels: ["김소월", "이상", "윤동주"],
            datasets: [{
                label: "작품 편수",
                data: [127, 60, 89],
            }],
        },
    });
