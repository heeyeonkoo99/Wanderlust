import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_action/user_action";
function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  let [id, setId] = useState("");
  let [pwd, setPwd] = useState("");

  const idEvent = (e) => {
    setId(e.target.value);
  };
  const pwdEvent = (e) => {
    setPwd(e.target.value);
  };
  const submitEvent = (e) => {
    e.preventDefault();

    let body = {
      아이디: id,
      비밀번호: pwd,
    };
    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess && res.payload.직책 === "유저") {
        history.push("/user-dashboard");
      } 
      else if(res.payload.loginSuccess && res.payload.직책 === "관리자") {
        history.push("/admin-dashboard");
      }
      else {
        alert("error!");
      }
    });
  };
  return (
    <div
      className="login-form"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={submitEvent}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>아이디</label>
        <input value={id} onChange={idEvent}></input>
        <label>비밀번호</label>
        <input type="password" value={pwd} onChange={pwdEvent}></input>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
