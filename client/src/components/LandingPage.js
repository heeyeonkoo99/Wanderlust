import React, { useEffect } from "react";
import axios from "axios";
import { Link, useHistory, withRouter } from "react-router-dom";
function LandingPage() {
  let history = useHistory();
  
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      console.log(res.data);
      if (res.data.success) {
        history.push("/login");
      } else {
        alert("error");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column",
        height:"100vh"
      }}
    >
      <h2>시작 페이지</h2>
      <h3>어서오세요</h3>
      <button><Link to="/login">로그인</Link></button>
      <label>아직 회원이 아니시면</label>
      <button><Link to="/register">회원가입</Link></button>
      <span>---------------------------------</span>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
