import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function User() {
  const history = useHistory();
  useEffect(() => {
    axios.get("/api/users/auth").then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log(userData);
    });
  }, []);
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      console.log(res.data);
      if (res.data.success) {
        history.push("/");
      } else {
        alert("error");
      }
    });
  };

  let [userData, setData] = useState([]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection:"column"
      }}
    >
      <h2>학생 페이지</h2>
      <h3>{userData.이름} 님 안녕하세요!</h3>
      <span>---------------------------</span>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default User;
