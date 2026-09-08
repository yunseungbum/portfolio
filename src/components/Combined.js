import React, { useState } from "react";
import ProfileImage from "../image/profile.jpg";

function ContactIcon({ type }) {
  if (type === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.69.12 2.98.72.79 1.15 1.8 1.15 3.03 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{type === "email" ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></> : <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 5h4M11 19h2" /></>}</svg>;
}

export default function Combined() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyContact(label, value) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} 복사 완료`);
    } catch {
      setCopyStatus("복사하지 못했습니다. 텍스트를 직접 선택해 복사해 주세요.");
    }
  }
  return (
    <section id="combined" className="hero" aria-labelledby="intro-heading">
      <div className="page-width hero-layout">
        <div className="portrait-wrap">
          <img className="portrait" src={ProfileImage} alt="윤승범" width="280" height="280" />
          <span className="portrait-caption">YUN SEUNG BUM / TENDAI</span>
      </div>
        <div className="hero-copy">
          <p className="intro-name" id="intro-heading">안녕하세요, <strong>윤승범</strong>입니다.</p>
          <p className="intro-description">C#기반 회사에서 근무 한 경험이 있습니다.<br />해결에서 오는 도파민을 즐깁니다. <br className="desktop-break" /> <strong>현재는 AI와 협업 중 입니다.</strong></p>
      </div>
        <aside className="hero-contact" aria-label="연락처">
          <button type="button" className="contact-action" onClick={() => copyContact("이메일", "ibm15444@naver.com")} aria-label="이메일 ibm15444@naver.com 복사">
            <ContactIcon type="email" /><div><strong>ibm15444@naver.com</strong></div>
          </button>
          <button type="button" className="contact-action" onClick={() => copyContact("전화번호", "010-4923-5248")} aria-label="전화번호 010-4923-5248 복사">
            <ContactIcon type="phone" /><div><strong>010-4923-5248</strong></div>
          </button>
          <a className="contact-action" href="https://github.com/yunseungbum" target="_blank" rel="noopener noreferrer">
            <ContactIcon type="github" /><div><strong>github.com/yunseungbum</strong></div>
          </a>
          <p className="contact-copy-status" role="status" aria-live="polite">{copyStatus}</p>
        </aside>
      </div>
    </section>
  );
}