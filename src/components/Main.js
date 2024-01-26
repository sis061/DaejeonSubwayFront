import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import * as styled from "../styledComp/styledMain";

function Main() {
  let StationIdData = useSelector((state) => state.StationNameData.stationId);

  return (
    <styled.Main>
      <img src="/img/subway.png" alt="" className="main-bg"/>
      <h1>대전 지하철 NOW!</h1>
      <div className="station-list-wrap">
        {StationIdData.map((e, i) => (
          <StationList key={i} StationIdData={StationIdData[i]} i={i + 101} />
        ))}
      </div>
      <div className="info-text">
        <p>© 2021. 정성우. all rights reserved.</p>
        <p>대전교통공사에서 제공하는 열차시각표를 기준으로 제작되었습니다.</p>
      </div>
    </styled.Main>
  );
}

function StationList(props) {
  return (
    <styled.StationList>
      <Link to={`arrivalinfo/` + props.i} className="list-item">
        <span className="list-item-inner">{props.StationIdData.name}</span>
      </Link>
    </styled.StationList>
  );
}

export default Main;
