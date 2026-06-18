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


function Skills() {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="skills-container">
        <div className="tech">
          <h3>프로그래밍 언어</h3>
          <p className="tech-icons">
            <img src={javaIcon} alt="java" />
            <img src={htmlIcon} alt="html" />
            <img src={cssIcon} alt="css" />
            <img src={csharpIcon} alt="C Sharp" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={ymlIkon} alt="ymlIkon" />
          </p>
        </div>
        <div className="tech">
          <h3>프레임워크/라이브러리</h3>
          <p className="tech-icons">
            <img src={gradleIcon} alt="Gradle" />
            <img src={mysqlIcon} alt="mysql" />
            <img src={nodejsIcon} alt="nodejs" />
            <img src={reactIcon} alt="react" />
            <img src={springIcon} alt="spring" />
            <img src={aspnetCoreIcon} alt="ASP.NET Core" title="ASP.NET Core" />
            <img src={winFormsIcon} alt="WinForms" title="WinForms" />
            <img src={efCoreIcon} alt="Entity Framework Core" title="Entity Framework Core" />
            <img src={identityIcon} alt="ASP.NET Identity" title="ASP.NET Identity" />
            <img src={kakaoOAuthIcon} alt="Kakao OAuth" title="Kakao OAuth" />
          </p>
        </div>
        <div className="tech">
          <h3>도구 및 플랫폼</h3>
          <p className="tech-icons">
            <img src={androidStudioIcon} alt="androidstudio" />
            <img src={eclipseIcon} alt="eclipse" />
            <img src={awsIcon} alt="aws" />
            <img src={firebaseIcon} alt="firebase" />
            <img src={gitIcon} alt="git" />
            <img src={githubIcon} alt="github" />
            <img src={postmanIcon} alt="postman" />
            <img src={vscodeIcon} alt="vscode" />
            <img src={visualStudioIcon} alt="visualstudio" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
