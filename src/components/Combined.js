import React from "react";
import VolunteerImage from "../image/volunteer.jpg";
import "../css/Combined.css";

function Combined() {
  return (
    <section id="combined">
      <div className="combined-container">
        {/* ME Section */}
        <div className="ME">
          <div className="ME-image">
            <img src={VolunteerImage} alt="profile" />
          </div>
          <div className="ME-text">
            <h1>Tendai | 백엔드 개발자</h1>
            <p>자강불식의 대표 아이콘 윤승범입니다.</p>
            <p>해외봉사를 통해 남들과 다른 마인드를 소유</p>
            <p>신기술 습득에 두려움보단 신선한 충격을 즐깁니다.</p>
            <p>해결에서 오는 도파민을 즐겨 개발자를 선택했습니다.</p>
            <p><strong>Tendai는 스와힐리어로 "감사"라는 뜻입니다.</strong></p>
            <p><strong>2018.02 - 2019.02 IN Zimbabwe </strong></p>
          </div>
        </div>

        {/* Information Section */}
        <div className="Information">
          <h2>Information</h2>
          <div className="box-container">
            <div className="box">
              <h2>CHANNEL</h2>
              <p>
              <a
                class="github-link"
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
        </div>
      </div>
    </section>
  );
}

export default Combined;
