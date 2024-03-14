import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider,  } from "./Box.styled";
import { Container } from "@mui/material";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
  };

  return (
    <Container sx={{mt:'5%'}}>

   
      <StyledSlider {...settings}>
        <div>
          <h3>Bybit Replay</h3>
          Your P2P Journey in 2023
        </div>
        <div>
          <h3>Bybit Card 1st Anniversary</h3>
          Stand a chance to win an iPhone 15 Pro, Apple AirVision Pro, and more!
        </div>
        <div>
          <h3>Telegram Notification</h3>
          P2P notifications are now available on Telegram
        </div>
        <div>
          <h3>How to buy p2p coins through Our Website </h3>
        </div>
      </StyledSlider>
      </Container>
  );
}
