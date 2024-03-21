import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const faqData = [
  {
    key: "1",
    question: "How to Buy Coins on P2P (Web)?",
    answer:
      "Choose the ad with desired price and payment method. Enter your buy quantity and transaction amount to complete the order.",
  },
  {
    key: "2",
    question: "How to Sell Coins on P2P (Web)?",
    answer:
      'Click the "Sell Coins" button, choose your preferred currency and amount. Bybit will match you with a buyer and guide you through the order process.',
  },
  {
    key: "3",
    question: "P2P on Bybit - FAQ",
    answer:
      "Bybit P2P allows users to buy and sell crypto directly between each other. Bybit acts as an escrow service, holding the crypto until the seller receives the payment.",
  },
  {
    key: "4",
    question: "How to Post an Ad on P2P for Free (Web)?",
    answer:
      'Click the "Sell Coins" button and select your preferred currency and amount. Bybit will create an ad for you automatically.',
  },
  {
    key: "5",
    question: "How to Add New Payment Methods on P2P?",
    answer:
      'Go to your Account Settings and click "Payment Methods". You can add new bank accounts, credit cards, or other supported payment methods.',
  },
  {
    key: "6",
    question: "Trading Fees of P2P on Bybit",
    answer:
      "Bybit does not charge any fees for P2P trading. Sellers are responsible for any network fees associated with their chosen payment method.",
  },
];

function FAQSection() {
  return (
    <Box sx={{ width: "100%", maxWidth: "900px", marginTop: "5%" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "start",
          fontSize: "48px",
          fontweight: "900",
          lineHeight: "56px",
          paddingBottom: "40px",
          paddingLeft:'0%'
        }}
      >
        FAQ
      </Typography>
      <Grid container>
        {faqData.map((faq) => (
          <Grid item xs={12} md={6} key={faq.key}>
            <Typography
              variant="h6"
              sx={{
                margin:'1%',
                fontweight:'700',
                "&:hover": {
                  color: "#ffc35c",
                  cursor: "pointer",
                },
              }}
            >
              {faq.question}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {/* <Typography variant="body2"   sx={{ textAlign: "start", margin: "20px 0",color:'black', "&:hover": {
                  color: "#eb8d13",
                  cursor: "pointer",
                }, }}>
        View More →
      </Typography> */}
      <Button variant="text" sx={{ textAlign: "start", margin: "20px 0",color:'black', "&:hover": {
                  color: "#eb8d13",
                  cursor: "pointer",
                }, }} endIcon={<ArrowRightAltIcon />}>
      View More 
      </Button>
    </Box>
  );
}

export default FAQSection;
