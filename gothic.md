---
layout: page
title: 두 소설의 단어 빈도 비교
permalink: /gothic/
---

<h2>Frankenstein vs. Dracula</h2>
<div style="display: flex; gap: 1em;">
    <div style="flex: 1;">
        <h3>Frankenstein</h3>
        <div style="height: 500px;"><canvas id="chart-frankenstein"></canvas></div>
    </div>
    <div style="flex: 1;">
        <h3>Dracula</h3>
        <div style="height: 500px;"><canvas id="chart-dracula"></canvas></div>
    </div>
</div>

{% include chartjs.html %}
<script src="/assets/img/js/analysis.js"></script>
<script src="/assets/img/js/gothic.js"></script>