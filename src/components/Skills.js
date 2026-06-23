import React from "react";
import "../css/Skill.css";
import javaIcon from "../image/Java-Light.svg";
import htmlIcon from "../image/HTML.svg";
import cssIcon from "../image/CSS.svg";
import csharpIcon from "../image/CS.svg";
import jsIcon from "../image/JavaScript.svg";
import gradleIcon from "../image/Gradle-Light.svg";
import mysqlIcon from "../image/MySQL-Light.svg";
import nodejsIcon from "../image/NodeJS-Light.svg";
import reactIcon from "../image/React-Light.svg";
import springIcon from "../image/Spring-Light.svg";
import aspnetCoreIcon from "../image/ASPNETCore.svg";
import winFormsIcon from "../image/WinForms.svg";
import efCoreIcon from "../image/EFCore.svg";
import identityIcon from "../image/Identity.svg";
import kakaoOAuthIcon from "../image/KakaoOAuth.svg";
import androidStudioIcon from "../image/AndroidStudio-Light.svg";
import eclipseIcon from "../image/Eclipse-Light.svg";
import awsIcon from "../image/AWS-Light.svg";
import firebaseIcon from "../image/Firebase-Light.svg";
import gitIcon from "../image/Git.svg";
import githubIcon from "../image/Github-Light.svg";
import postmanIcon from "../image/Postman.svg";
import vscodeIcon from "../image/VSCode.svg";
import visualStudioIcon from "../image/VisualStudio-Light.svg";
import ymlIkon from "../image/ymlIkon.png";

function SkillIcon({ src, name, alt = name }) {
  return (
    <span className="skill-icon" data-title={name}>
      <img src={src} alt={alt} title={name} />
    </span>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="skills-container">
        <div className="tech">
          <h3>프로그래밍 언어</h3>
          <p className="tech-icons">
            <SkillIcon src={javaIcon} name="Java" />
            <SkillIcon src={htmlIcon} name="HTML" />
            <SkillIcon src={cssIcon} name="CSS" />
            <SkillIcon src={csharpIcon} name="C#" alt="C Sharp" />
            <SkillIcon src={jsIcon} name="JavaScript" />
            <SkillIcon src={ymlIkon} name="YAML" />
          </p>
        </div>
        <div className="tech">
          <h3>프레임워크/라이브러리</h3>
          <p className="tech-icons">
            <SkillIcon src={gradleIcon} name="Gradle" />
            <SkillIcon src={mysqlIcon} name="MySQL" />
            <SkillIcon src={nodejsIcon} name="Node.js" />
            <SkillIcon src={reactIcon} name="React" />
            <SkillIcon src={springIcon} name="Spring" />
            <SkillIcon src={aspnetCoreIcon} name="ASP.NET Core" />
            <SkillIcon src={winFormsIcon} name="WinForms" />
            <SkillIcon src={efCoreIcon} name="Entity Framework Core" />
            <SkillIcon src={identityIcon} name="ASP.NET Identity" />
            <SkillIcon src={kakaoOAuthIcon} name="Kakao OAuth" />
          </p>
        </div>
        <div className="tech">
          <h3>도구 및 플랫폼</h3>
          <p className="tech-icons">
            <SkillIcon src={androidStudioIcon} name="Android Studio" />
            <SkillIcon src={eclipseIcon} name="Eclipse" />
            <SkillIcon src={awsIcon} name="AWS" />
            <SkillIcon src={firebaseIcon} name="Firebase" />
            <SkillIcon src={gitIcon} name="Git" />
            <SkillIcon src={githubIcon} name="GitHub" />
            <SkillIcon src={postmanIcon} name="Postman" />
            <SkillIcon src={vscodeIcon} name="VS Code" />
            <SkillIcon src={visualStudioIcon} name="Visual Studio" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
