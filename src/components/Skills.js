import React from "react";

import csharpIcon from "../image/CS.svg";
import javaIcon from "../image/Java-Light.svg";
import jsIcon from "../image/JavaScript.svg";
import cssIcon from "../image/CSS.svg";
import reactIcon from "../image/React-Light.svg";
import aspnetCoreIcon from "../image/ASPNETCore.svg";
import winFormsIcon from "../image/WinForms.svg";
import mysqlIcon from "../image/MySQL-Light.svg";
import dbeaverIcon from "../image/dbeaver.svg";
import intellijIcon from "../image/intellij.svg";
import vscodeIcon from "../image/VSCode.svg";
import visualStudioIcon from "../image/VisualStudio-Light.svg";
import gradleIcon from "../image/Gradle-Light.svg";
import githubIcon from "../image/Github-Light.svg";
import svnIcon from "../image/subversion.svg";
import awsIcon from "../image/AWS-Light.svg";

const skillGroups = [
  { title: "언어 · 스타일", items: [
    { name: "C#", icon: csharpIcon },
    { name: "Java", icon: javaIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "CSS", icon: cssIcon },
  ] },
  { title: "프레임워크 · 라이브러리", items: [
    { name: "React", icon: reactIcon },
    { name: "ASP.NET Core", icon: aspnetCoreIcon },
    { name: "WinForms", icon: winFormsIcon },
  ] },
  { title: "데이터베이스 · 도구", items: [
    { name: "MySQL", icon: mysqlIcon },
    { name: "DBeaver", icon: dbeaverIcon },
  ] },
  { title: "개발 환경 · 빌드 도구", items: [
    { name: "IntelliJ IDEA", icon: intellijIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "Visual Studio", icon: visualStudioIcon },
    { name: "Gradle", icon: gradleIcon },
  ] },
  { title: "버전 관리 · 클라우드", items: [
    { name: "GitHub", icon: githubIcon },
    { name: "SVN", icon: svnIcon },
    { name: "AWS", icon: awsIcon },
  ] },
];

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="page-width"><div className="section-heading"><div><p className="eyebrow">02 / TOOLKIT</p><h2 id="skills-heading">Skill</h2></div></div>
      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-items">
              {group.items.map((item) => (
                <li className="skill-item" key={item.name}>
                  <img src={item.icon} alt="" width="40" height="40" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div></section>
  );
}

export default Skills;