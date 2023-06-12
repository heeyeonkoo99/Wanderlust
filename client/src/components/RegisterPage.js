import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_action/user_action";

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  let [id, setId] = useState("");
  let [pwd, setPwd] = useState("");
  let [confrimPwd, setConfirmPWD] = useState("");
  let [name, setName] = useState("");
  let [stuNum, setStuNum] = useState("");
  let [email, setEmail] = useState("");
  let [role, setRole] = useState("");

  let [pwdLength, setPwdLength] = useState(false);

  const idEvent = (e) => {
    setId(e.target.value);
  };
  const pwdEvent = (e) => {
    setPwd(e.target.value);
    if (e.target.value.length >= 6) {
      setPwdLength(true);
    } else {
      setPwdLength(false);
    }
  };

  const confirmPwdEvent = (e) => {
    setConfirmPWD(e.target.value);
  };
  const nameEvent = (e) => {
    setName(e.target.value);
  };
  const stdNumEvent = (e) => {
    setStuNum(e.target.value);
  };
  const emailEvent = (e) => {
    setEmail(e.target.value);
  };
  const roleEvent = (e) => {
    setRole(e.target.value);
  };
  const submitEvent = (e) => {
    e.preventDefault();

    if (pwd !== confrimPwd) {
      return alert("비밀번호와 비밀번호 확인을 맞춰주세요");
    }
    let body = {
      아이디: id,
      비밀번호: pwd,
      이름: name,
      학번: stuNum,
      이메일: email,
      직책: role,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        alert("회원 가입 완료되었습니다");
        history.push("/login");
      } else {
        alert("error");
      }
    });
  };
  return (
    <div
      className="register-form"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={submitEvent}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>아이디</label>
        <input value={id} onChange={idEvent}></input>
        <label>
          비밀번호 (6자리 이상)
        </label>
        <span>{pwdLength ? null : "6자리 이상으로 입력하세요"}</span>
        <input type="password" value={pwd} onChange={pwdEvent}></input>
        <label>비밀번호 확인</label>
        <input
          type="password"
          value={confrimPwd}
          onChange={confirmPwdEvent}
        ></input>
        <label>이름</label>
        <input type="text" value={name} onChange={nameEvent}></input>
        <label>학번</label>
        <input value={stuNum} onChange={stdNumEvent}></input>
        <label>이메일</label>
        <input type="email" value={email} onChange={emailEvent}></input>
        <label>직책</label>
        <select onChange={roleEvent} value={role}>
          <option>선택</option>
          <option>관리자</option>
          <option>유저</option>
        </select>
        <button>회원가입</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
