import React from "react";
import "../css/Project.css";
import projectThumbnail from "../image/KakaoTalk_20241211_103756459.png"; // 경로 확인!
import soccerBallIcon from "../image/SoccerBall.svg";

function Projects() {
  const projectData = [
    {
      title: "농산물유통 종합정보시스템 웹&앱",
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
      ],
    },
    {
      title: "축구 정보 및 매칭 플랫폼",
      duration: "2026.06.22 ~ 진행중",
      members: " 개인프로젝트",
        techStack: {
        언어: "C#,HTML,JS",
        프레임워크: "ASP.NET Core",
        라이브러리: "Entity Framework Core",
        데이터베이스: "MySQL",
        API: "",
        배포: ""
      },
      roles: [
        "채팅 시스템 구현(예정)",
        "네이버 지도 API 연동(예정)",
        "구장 위치 정보 표시(예정)",
        "축구 포메이션 관리(예정)",
      ],
      thumbnail: soccerBallIcon,
      links: [
        { url: "#", text: "프로젝트(진행중)" },
        {
          url: "#",
          text: "정리사항",
        },
        {
          url: "#",
          text: "기술문서",
        },
      ],
    },
  ];

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projectData.map((project, index) => {
          const isPersonalProject = project.members.includes("개인");

          return (
          <article key={index}>
            <div className="image-text">
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                title={project.title}
              />
              <p>{project.title}</p>
            </div>
            <div className="project-details">
              <h3>프로젝트 개요</h3>
              <p>개발기간: {project.duration}</p>
              <p>{isPersonalProject ? "프로젝트 형태" : "개발인원"}: {project.members}</p>
              <p>{isPersonalProject ? "주요내용" : "담당역할"}:</p>
              <ul>
                {project.roles.map((role, roleIndex) => (
                  <li key={roleIndex}>{role}</li>
                ))}
              </ul>
            </div>
             <p>기술스택:</p>
              <ul>
                {Object.entries(project.techStack).map(([category, stack], stackIndex) => (
                  <li key={stackIndex}>
                    {category}: {stack}
                  </li>
                ))}
              </ul>
            <div className="project-links">
              <div className="project-link-main">
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.links[0].text}
                </a>
              </div>

              <div className="project-link-sub">
                {project.links.slice(1).map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects; // 기본 내보내기 추가!
