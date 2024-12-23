import React from "react";
import VolunteerImage from "../image/volunteer.jpg";
import "../css/ME.css"

function ME() {
  return (
    <section id="ME">
      <div className="ME-container">
        <div className="ME-box">
          <div className="ME-image">
            <img src={VolunteerImage} alt="profile" />
          </div>
          <div className="ME-text">
            <h1>Tendai | 백엔드 개발자</h1>
            <p>자강불식의 대표 아이콘 윤승범입니다.</p>
            <p>해외봉사를 통해 남들과 다른 마인드를 소유</p>
            <p>해결에서 오는 도파민을 즐겨 개발자를 선택했습니다.</p>
            <p>새로운 기술 습득에 있어 두려움보단 신선한 충격을 즐깁니다.</p>
            <a>Tendai는 스와일리어로 "감사"라는 뜻입니다.</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ME;