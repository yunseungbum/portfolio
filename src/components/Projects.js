import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import projectThumbnail from "../image/KakaoTalk_20241211_103756459.png"; // 경로 확인!
import footballPreview from "../image/football-preview.png";
import buddyPreview from "../image/buddy-erp-preview.png";
import kickOfficePreview from "../image/kickoffice-preview.png";

function ResourceIcon({ url }) {
  let icon;
  if (url.includes("github.com") && url.includes("/issues")) {
    icon = <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" /></>;
  } else if (url.includes("github.com")) {
    icon = <path fill="currentColor" stroke="none" d="M12 .75a11.25 11.25 0 0 0-3.558 21.922c.563.104.769-.244.769-.542 0-.267-.01-1.155-.015-2.096-3.13.68-3.791-1.327-3.791-1.327-.512-1.3-1.25-1.646-1.25-1.646-1.023-.7.077-.686.077-.686 1.13.08 1.724 1.16 1.724 1.16 1.005 1.722 2.637 1.224 3.28.936.102-.728.393-1.225.715-1.507-2.499-.284-5.126-1.25-5.126-5.563 0-1.229.44-2.233 1.16-3.02-.117-.284-.503-1.43.11-2.98 0 0 .945-.303 3.094 1.154a10.78 10.78 0 0 1 5.625 0c2.147-1.457 3.09-1.154 3.09-1.154.615 1.55.229 2.696.113 2.98.722.787 1.158 1.791 1.158 3.02 0 4.324-2.631 5.276-5.138 5.555.404.35.764 1.042.764 2.1 0 1.516-.014 2.739-.014 3.11 0 .3.203.651.774.54A11.25 11.25 0 0 0 12 .75Z" />;
  } else if (url.includes("/spreadsheets/")) {
    icon = <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 9v12" /></>;
  } else if (url.includes("/presentation/")) {
    icon = <><path d="M3 3h18M5 3v13h14V3M12 16v5M8 21l4-3 4 3M8 8h8M8 11h5" /></>;
  } else {
    icon = <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>;
  }
  return <svg className="resource-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{icon}</svg>;
}
function Projects() {
  const projectData = [
    {
      title: "KickOffice",
      name: "KickOffice",
      theme: "kickoffice",
      summary: "Spring Boot, React 기반의 조기축구회 전용 ERP",
      kind: "진행 중인 프로젝트",
      duration: "2026.08.29 ~ 진행 중",
      rolesHeading: "구현 예정 기능",
      techStack: {
        언어: "Java, JavaScript",
        프레임워크: "Spring",
        라이브러리: "React",
        "빌드 도구": "Gradle",
        데이터베이스: "MySQL",
        인증: "JWT, 이메일 인증",
        "AI 활용": "Codex를 활용한 개발 보조"
      },
      tags: ["Java", "Spring", "React", "MySQL", "Codex"],
      roles: [
        "각 탭에 맞는 관리 기능 추가 예정",
        "사용자 관리 추가 예정"
      ],
      thumbnail: kickOfficePreview,
      links: [
        { url: "https://docs.google.com/spreadsheets/d/14RQrxbxWAQQPtFpxW47Pu9-Xzd8QdGuzeUnouU80BEE/edit?gid=0#gid=0", text: "정리사항" }
      ]
    },
    {
      title: "Buddy_ERP",
      name: "Buddy_ERP",
      theme: "buddy",
      duration: "2026.07.22 ~ 2026.08.10",
      testAccount: { id: "guest", password: "1234" },
      summary: "소속 조기축구회 운영을 위해 개발한 맞춤형 ERP",
      kind: "개인 프로젝트",
      rolesHeading: "구현 기능",
      techStack: {
        언어: "TypeScript, C#",
        라이브러리: "React",
        데이터베이스: "MySQL",
        배포: "Cloudtype",
        "AI 활용": "Codex를 활용한 개발 보조"
      },
      tags: ["TypeScript", "React", "C#", "MySQL", "Cloudtype", "Codex"],
      highlights: ["회원 정보와 포메이션 자동 연동", "회비·지출·잔액 자동 계산", "경기 일정과 선수 구성 통합 관리"],
      roles: [
        "회원 통합 관리 — 회원 등록 및 활동 상태 관리, 등록된 회원 정보를 포메이션과 자동 연동",
        "회비·지출 관리 — 회비 및 지출 내역 등록 시 총 수입·지출·잔액 자동 계산",
        "경기 일정 관리 — 경기 일정 등록 및 다음 경기 정보 자동 표시",
        "포메이션 관리 — 회원 정보를 기반으로 선수 구성 및 등번호 표시, 경기 일정과 연동",
        "데이터 자동 연동 — 회원·회비·지출·경기 일정 등 각 관리 기능의 데이터를 서로 연계하여 자동 반영"
      ],
      thumbnail: buddyPreview,
      links: [
        { url: "https://port-0-buddy-api-ms5guem574d52a72.sel3.cloudtype.app/login", text: "프로젝트 URL" },
        { url: "https://docs.google.com/presentation/d/1YcnJEdBoLUgXSZnos_bx0q8aX-3QDQilWs2T8ErqoXg/edit?usp=sharing", text: "프로젝트 문서" },
        { url: "https://docs.google.com/spreadsheets/d/1Y77d3OVmcYvzMEpRthJBdYp190LmPMduvePnxOQYuMA/edit?usp=sharing", text: "프로젝트 정리사항" },
        { url: "https://github.com/yunseungbum/ERP_PROJECT", text: "깃허브" }
      ]
    },
    {
      title: "축구 정보 및 매칭 플랫폼",
      theme: "chingoo",
      testAccount: { id: "test", password: "a12345" },
      name: "chingoo",
      summary: "ASP.NET Core 기반의 축구 정보 및 매칭 플랫폼",
      kind: "개인 프로젝트",
      rolesHeading: "구현 기능",
      duration: "2026.06.22 ~ 2026.07.20",
      members: " 개인프로젝트",
        techStack: {
        언어: "C#,HTML,JS",
        프레임워크: "ASP.NET Core",
        라이브러리: "Entity Framework Core",
        데이터베이스: "MySQL",
        API: "OPEN API",
        배포: "Railway",
        "AI 활용": "Codex를 활용한 개발 보조"
      },
      roles: [
        "Sigal R 채팅 시스템 구현",
        "축구 일정,결과 OPEN API 사용",
        "축구 관련 유투브 콘텐츠"
      ],
      thumbnail: footballPreview,
      links: [
        { url: "https://chingooproject-production.up.railway.app/", text: "프로젝트 URL" },
        { url: "https://docs.google.com/presentation/d/1X2iTL2NDFITOYsaR6VUl-Bljmgbn8K10nDCUwPniTTM/present?slide=id.p1", text: "프로젝트 문서" },
        { url: "https://github.com/yunseungbum/ChingooProject", text: "깃허브" },
        { url: "https://github.com/yunseungbum/ChingooProject/issues", text: "깃허브 이슈" },
      ],
    },
    {
      title: "농산물유통 종합정보시스템 웹&앱",
      theme: "nayanong",
      name: "NAYANONG",
      summary: "Spring Boot와 React를 사용한 농산물 정보 웹·앱 프로젝트",
      kind: "팀 프로젝트 · Backend",
      rolesHeading: "담당 역할",
      duration: "2024.11.13 ~ 2024.12.30",
      members: "4명 (Backend 담당)",
      techStack: {
        언어: "Java,JavaScript",
        프레임워크: "SpringBoot",
        라이브러리: "React, JPA, JWT",
        데이터베이스: "MySQL",
        API: "OpenAPI, REST API",
        배포: "AWS"
      },
      roles: [
        "SpringBoot로 데이터 가공 및 로직 구현",
        "CRUD API 기능 구현",
        "Open API 연결 및 가공",
        "DB 설계 및 관리",
      ],
      thumbnail: projectThumbnail,
      links: [
        { url: "http://www.nayanong.site", text: "프로젝트 보기(현재 지원X)" }, // 프로젝트 보기 링크 수정
        {
          url: "https://docs.google.com/spreadsheets/d/1cfhPAhxgoSSTt0Mr_6eZa3Z4JSX3FRCs0_GRCnQxJ0w/edit?gid=0#gid=0",
          text: "회의 및 정리사항",
        },
        { url: "https://docs.google.com/presentation/d/144nNwyqWDw9ITUY7FfPLTkFpe7RXYCnW/edit?slide=id.p1#slide=id.p1",
          text: "기술문서" },
        { url: "https://github.com/yunseungbum/nayaNong/tree/bum", text: "깃허브" },
        { url: "https://github.com/rambe98/naya-nong/issues", text: "깃허브 이슈" },
      ],
    },
  ];

  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    galleryRef.current.scrollLeft = 0;
  }, []);

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="page-width">
        <div className="section-heading">
          <div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="projects-heading">Project</h2></div>
        </div>
        <div className="project-gallery" ref={galleryRef}>
          {projectData.map((project) => {
            const personal = project.members?.includes("개인");
            return (
              <article className={`gallery-card project-theme-${project.theme} ${personal ? "personal-project" : "team-project"}`} key={project.title}>
                <div className="gallery-preview">
                  {project.theme === "kickoffice" ? <div className="kickoffice-image-frame"><img src={project.thumbnail} alt="KickOffice 서비스 화면" /></div> : <img src={project.thumbnail} alt="" />}
                  <span>{project.name}</span>
                  <small>{project.title}</small>
                </div>
                <div className="gallery-body">
                  <p className="gallery-kind">{project.kind}</p>
                  <h3><button type="button" className="project-open" aria-haspopup="dialog" onClick={() => setSelected(project)}>{project.title}</button></h3>
                  <p className="gallery-summary">{project.summary}</p>
                  {project.duration && <p className="gallery-duration"><span>개발 기간</span> {project.duration}</p>}
                  <ul className="gallery-highlights">{(project.highlights || project.roles.slice(0, 3)).map(role => <li key={role}>{role}</li>)}</ul>
                  <div className="gallery-tags">{(project.tags || [project.techStack.언어, project.techStack.프레임워크, project.techStack.데이터베이스]).filter(Boolean).map(value => <span key={value}>{value.replaceAll(',', ' · ')}</span>)}</div>
                  <span className="gallery-detail">자세히 보기 <span aria-hidden="true">↗</span></span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <dialog className={`project-dialog project-theme-${selected?.theme || "nayanong"}`} ref={dialogRef} aria-labelledby="detail-title" onClose={() => setSelected(null)} onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }}>
        {selected && <>
          <div className="dialog-top"><span className="eyebrow">PROJECT DETAILS</span><button type="button" className="dialog-close" aria-label="프로젝트 상세 닫기" onClick={() => dialogRef.current.close()}>닫기 ×</button></div>
          <div className="dialog-body">
            <p className="gallery-kind">{selected.kind}</p>
            <h2 id="detail-title">{selected.title}</h2>
            <p className="gallery-summary">{selected.summary}</p>
            {(selected.duration || selected.members) && <dl className="detail-facts">{selected.duration && <div><dt>개발 기간</dt><dd>{selected.duration}</dd></div>}{selected.members && <div><dt>참여 형태</dt><dd>{selected.members}</dd></div>}</dl>}
            <h3>{selected.rolesHeading}</h3>
            <ul className="detail-roles">{selected.roles.map(role => <li key={role}>{role}</li>)}</ul>
            <h3>사용 기술</h3>
            <dl className="detail-stack">{Object.entries(selected.techStack).filter(([,value]) => value.trim()).map(([category,value]) => <div key={category}><dt>{category}</dt><dd>{value.replaceAll(',', ', ')}</dd></div>)}</dl>
            <h3>프로젝트 자료</h3>
            <div className="detail-links">{selected.links.filter(link => link.url !== "#" && !link.text.includes("지원X")).map(link => <a key={link.text} href={link.url} target="_blank" rel="noopener noreferrer"><ResourceIcon url={link.url} /><span>{link.text}</span></a>)}</div>
            {selected.testAccount && (
              <section className="test-account" aria-labelledby="test-account-heading">
                <h3 id="test-account-heading">테스트 계정</h3>
                <p>아래 계정으로 로그인해 서비스를 체험해 보세요.</p>
                <dl>
                  <div><dt>아이디</dt><dd><code>{selected.testAccount.id}</code></dd></div>
                  <div><dt>비밀번호</dt><dd><code>{selected.testAccount.password}</code></dd></div>
                </dl>
              </section>
            )}
            <p className="detail-note">{selected.theme !== "nayanong" ? "각 버튼을 누르면 프로젝트와 관련 자료가 새 탭에서 열립니다." : "현재 서비스는 운영이 종료되어, 위 자료에서 프로젝트 내용을 확인할 수 있습니다."}</p>
          </div>
        </>}
      </dialog>
    </section>
  );
}
export default Projects;