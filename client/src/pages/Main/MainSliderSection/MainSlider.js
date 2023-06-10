import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImage_1 from "../../../Images/SliderImage_1.jpg"
import SliderImage_2 from "../../../Images/SliderImage_2.jpg"
import SliderImage_3 from "../../../Images/SliderImage_3.jpg"

const Container = styled.div`
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;

    }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
  
 
`;

const Image = styled.img`
width:300px;
height:300px;
`;


//const imgUrl = require('./image/temp.jpg');

const items = [
  { id: 1, url:SliderImage_1},
  { id: 2, url:SliderImage_2},
  { id: 3, url: SliderImage_3},
 
];


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
    };
    return (
      <Container>
        <h2> Single Item</h2>
        <StyledSlider {...settings}
        >
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}