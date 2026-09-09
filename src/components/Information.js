import React from "react";

export default function Information() {
  return (
    <section id="information" className="information-section" aria-labelledby="info-heading">
      <div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">04 / BACKGROUND</p><h2 id="info-heading">History</h2></div></div>
        <div className="information-grid">
          <div className="history-panel">
            <div className="history-group"><h3>경력 <span>EXPERIENCE</span></h3>
              <div className="history-entry"><time>2025.02 — 2026.08</time><div><h4>C# 프로그램 개발</h4><p>쇼핑몰 통합 수집 프로그램 개발 및 CS업무 보조</p></div></div>
              <div className="history-entry"><time>2023.01 — 2024.05</time><div><h4>PC 유지보수</h4><p>시청 PC 소프트웨어 및 하드웨어 유지보수</p></div></div>
            </div>
            <div className="history-group"><h3>교육 <span>EDUCATION</span></h3>
              <div className="history-entry"><time>2024.07 — 2025.01</time><div><h4>코리아IT아카데미</h4><p>AWS활용 풀스택 개발 과정</p></div></div>
              <div className="history-entry"><time>2017.02 — 2022.12</time><div><h4>인하공업전문대학</h4><p>정보통신공학과 졸업</p></div></div>
            </div>
            <div className="history-group"><h3>활동 <span>ACTIVITY</span></h3>
              <div className="history-entry"><time>2018.02 — 2019.02</time><div><h4>짐바브웨 해외봉사</h4><p>한국어·태권도 교육 및 마인드 강연</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}