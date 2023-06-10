import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import MainTop from "./MainSliderSection/MainTop";
import MainSlider from "./MainSliderSection/MainSlider"; 

function Main() {
    return (
      <>
       
        <DimmedBackground></DimmedBackground>
        <Contents>
          <MainTop/>
          <MainSlider/>
        </Contents>
        <Footer />
      </>
    );
  }
  
  const Contents = styled.div`
    padding-bottom: 64px;
    background: #fff;
  `;
  const DimmedBackground = styled.div`
    display: none;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #333;
    opacity: 0.5;
    z-index: 150;
  `;
  export default Main;