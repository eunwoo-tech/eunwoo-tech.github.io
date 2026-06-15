---
layout: default
title: analyzer
permalink: /analyzer/
---

<h1>사용자 입력 분석기</h1>
<textarea id="inputText" rows="10" style="width:100%;" placeholder="영어 텍스트를 붙여넣으세요"></textarea>
<button id="analyzeBtn">분석하기</button>

<canvas id="resultCanvas"></canvas>

{% include chartjs.html %}
<script src="/assets/img/js/analysis.js"></script>
<script src="/assets/img/js/analyzer.js"></script>
