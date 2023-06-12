import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action";
export default function (SpecificComponent, option, adminRoute = null) {
 
    
  function AuthCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);
        //로그인 하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !res.payload.isTeacher) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthCheck;
}
