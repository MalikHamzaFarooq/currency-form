import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StyledSlider = styled(Slider)`
  .slick-slide {
    background-color: white;
  }
  .slick-slide div {
    outline: none;
    
    width: 60%;
    margin: 0 auto;
  }
  .slick-prev:before, .slick-next:before{
    color:#f7a600;
    font-size: 25px;
  }
`;
export { StyledSlider,  };
