import React from "react";
import "../css/Information.css";

function Information() {
  return (
    <section id="infomation">
      <h2>Information</h2>
      <div className="box-container">
        <div className="box">
          <h2>CHANNEL</h2>
          <p>
            <a
              href="https://github.com/yunseungbum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/yunseungbum
            </a>
          </p>
        </div>
        <div className="box">
          <h2>CONTACTS</h2>
          <p>010-4923-5248</p>
          <p>ibm15444@naver.com</p>
        </div>
        <div className="box">
          <h2>EDUCATION</h2>
          <p>2024.07 ~ 2025.01</p>  
          <p>코리아IT아카데미 AWS활용 풀스택 개발</p>
          <p>2017.02 ~ 2022.12</p>
          <p>인하공업전문대학 정보통신공학과 졸업</p>
        </div>
        <div className="box">
          <h2>WORK</h2>
          <p>2023.01 ~ 2024.05</p> 
          <p>시청 PC 소프트웨어 및 하드웨어 유지보수</p>
        </div>
      </div>
    </section>
  );
}

export default Information;
