import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Teacher() {
  const history = useHistory();
  let [userData, setData] = useState([]);
  let [studentData, setStuData] = useState([]);
  let filterData = studentData.filter((x) => {
    return x.직책 !== "관리자";
  });
  console.log(filterData);
  useEffect(() => {
    axios.get("/api/users/auth").then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log(userData);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/infos").then((res) => {
      console.log(res);
      setStuData(res.data);
    });
  }, [userData]);
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h2>관리자 페이지</h2>
      <h3>{userData.이름} 님 안녕하세요!</h3>
      <span>---------------------------</span>
      {filterData.map((x) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>학생 이름: {x.이름}</span>
            <span>학번: {x.학번}</span>
            <span>-----------------</span>
          </div>
        );
      })}
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}
export default Admin;
