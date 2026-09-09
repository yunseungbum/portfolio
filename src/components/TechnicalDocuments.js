import React from "react";

const documents = [
  { title: "정산관리(쿠팡)", url: "https://app.notion.com/p/38913016158380328745ef682b7daa98" },
  { title: "배송대행지 계정 관리", url: "https://app.notion.com/p/3891301615838049b1c0fccf43792d0d" },
];

const technologies = [
  { category: "언어", items: ["C#", "HTML", "CSS", "JavaScript"] },
  { category: "개발 도구 · AI", items: ["Visual Studio", "Codex"] },
  { category: "데이터베이스", items: ["MySQL", "MySQL Workbench"] },
  { category: "UI · 브라우저", items: ["WinForms", "CEF", "WebView2"] },
  { category: "동시성", items: ["Thread"] },
  { category: "디버깅 · 버전 관리", items: ["Fiddler", "SVN"] },
];
export default function TechnicalDocuments() {
  return (
    <section id="technical-documents" className="technical-documents-section" aria-labelledby="technical-documents-heading">
      <div className="page-width">
        <div className="section-heading">
          <div><p className="eyebrow">03 / TECHNICAL DOCUMENTS</p><h2 id="technical-documents-heading">기술문서</h2></div>
        </div>
        <article className="technical-documents-card">
          <h3>샵마인</h3>
          <p className="technical-documents-description">C# WinForms, WebView 기반의 쇼핑몰 통합 수집 프로그램</p>
          <p className="technical-documents-role"><strong>담당 업무</strong> 기능 개발 및 유지보수, CS 업무 보조</p>
          <div className="technical-stack">
            <h4>사용 기술 · 도구</h4>
            <dl>
              {technologies.map(group => (
                <div className="technical-stack-row" key={group.category}>
                  <dt>{group.category}</dt>
                  <dd>{group.items.map(item => <span key={item}>{item}</span>)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="technical-document-links">
            {documents.map(document => (
              <a key={document.url} href={document.url} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" /><path d="M14 3v6h6M8 13h8M8 17h6" /></svg>
                <span>{document.title}</span>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}