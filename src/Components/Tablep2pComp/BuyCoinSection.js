import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import SelectCoin from '../../assets/download.png';
import CompleteCoin from '../../assets/download 2.png';
import ReceiveCoin from '../../assets/download 3.png';
import Line from '../../assets/line.png';
import "./Tablep2p.css";
import FAQSection from "./FAQSection";

const steps = [
  {
    img:SelectCoin,
    lineImg:Line,
    title: "1.Select Your Ad",
    description:
      "Choose the ad with desired price and payment method. Enter your buy quantity and transaction amount to complete the order.",
  },
  {
    img:CompleteCoin,
    lineImg:Line,
    title: "2.Complete Bank Payments",
    description:
      "Complete your payments based on information provided by the seller. Bybit will not charge any fees.",
  },
  {
    img: ReceiveCoin,
    // lineImg:Line,
    title: "3.Receive Your Coins",
    description:
      "After the seller receives the payment, he will release coins. Head to the Funding Account to review coins you received.",
  },
];

function BuyCoinSection() {
  const [checked, setChecked] = React.useState(true);

  return (
    <Container sx={{mt:'15%'}}>

    
    <Box sx={{ width: "100%",  margin: "auto",position:'relative' }}>
      <Typography variant="h4" sx={{ textAlign: "start", margin: "20px 0",fontSize:'48px',fontWeight:700 }}>
        Complete P2P trades in three steps, and  {checked ? "buy " : "sell "} coins with zero fees!
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"    
            onClick={() => setChecked(true)}
            sx={{
              width: "115px",
              height: "50px",
              backgroundColor: checked ? "#eb8d13" : "white",
              color: "black",
              boxShadow: "none",
              textTransform:'capitalize',
              "&:hover": {
                backgroundColor: checked ? "#eb8d13" : "white",
              boxShadow: "none",
              },
            }}
          >
            Buy Coins
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"        
            onClick={() => setChecked(false)}
            sx={{
              width: "115px",
              height: "50px",
              backgroundColor: checked ? "white" : "#eb8d13",
              color: "black",
              boxShadow: "none",
              textTransform:'capitalize',
              "&:hover": {
                backgroundColor: checked ? "white" : "#eb8d13",
              boxShadow: "none",

              },
            }}
          >
            Sell Coins
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "50px" }}>
        {steps.map((step) => (
          <Grid item xs={12} md={4} key={step.title}>
            <Grid container spacing={2} sx={{display:{ md:'block'}}}>

            <Grid item xs={3} sx={{display:'flex'}}>

            <img src= {step.img} alt="" srcset="" className="coinImg"/>

            <Box sx={{display:{xs:'none',sm:'none',md:'none',lg:'contents'}}}>

            <img src= {step.lineImg} alt="" srcset=""  className="lineImg"/>
            </Box>

            </Grid>
            
          
            <Grid item xs={9} 
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
               
              }}
            >
              <span className="stepTitle">{step.title}</span>
              <Typography
                variant="body1"
                
                sx={{ textAlign: "start", margin: "10px 0",color:'#adb1b8' }}
              >
                {step.description}
              </Typography>
            </Grid>

            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
    <FAQSection/>

    </Container>
  );
}

export default BuyCoinSection;
