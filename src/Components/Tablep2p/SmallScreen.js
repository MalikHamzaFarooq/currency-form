import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Tablep2p.css";
import { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Menu,
  TextField,
  Typography,
} from "@mui/material";
import { cartDAta } from "./cartDAta";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import EditIcon from "@mui/icons-material/Edit";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = ;

//multi selection checks

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const gradientColors = ["#ff9a42", "#ff5f59"];
const gradientAvatar = {
  background: "linear-gradient(90deg, #f90 0%, #ff6a59 100%)",
};

export default function SmallScreen() {
  const [limitCurrancy, setLimitCurrancy] = React.useState(1);
  const [price, setPrice] = React.useState(1);
  const [refresh, setRefresh] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedFilter, setSelectedFilter] = React.useState([]);
  const [appliedFilter, setAppliedFilter] = React.useState([]);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleFilterCheckBoxChange = (event) => {
    const { value } = event.target;
    const currentIndex = filter.indexOf(value);
    const newFilter = [...filter];

    if (currentIndex === -1) {
      newFilter.push(value);
    } else {
      newFilter.splice(currentIndex, 1);
    }

    setFilter(newFilter);
  };

  const handleConfirm = () => {
    setSelectedFilter([...filter]);
    setAppliedFilter([...filter]);
    handleCloseMenu();
  };

  const handleCancel = () => {
    setFilter([]);
    handleCloseMenu();
  };

  const handleLimitCurrancy = (event) => {
    setLimitCurrancy(event.target.value);
  };

  // ..............//

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleRefresh = (event) => {
    setRefresh(event.target.value);
  };
  //..............//

  const [checked, setChecked] = React.useState(true);
  //Mullti selection check
  const [paymentName, setPaymentName] = React.useState([]);
  const [filter, setFilter] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    const {
      target: { value },
    } = event;
    setPaymentName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const handleFilterCheckBoxChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setFilter(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  // Buy sell button

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const GradientButton = styled(Button)({
    background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
    color: "white",
    padding: "4px 8px",
    fontSize: "0.75rem",
  });

  const PaymentButton = styled(Button)({
    background: "#f5f7fa",
    color: "black",
    padding: "4px 8px",
    fontSize: "12px",
  });

  // const { cartDAta, setCArtData, setNotification } = useContext(AppContext);
  // const state = useContext(AppContext);

  const handleDelete = (itemId) => {
    // const newCart = cartDAta.filter((item) => item._id !== itemId);
    // setCArtData(newCart);
    // setNotification((prev) => prev - 1);
  };

  // const totalSum = cartDAta.reduce(
  //   (acc, item) => acc + item.quantity * item.price,
  //   0
  // );

  // console.log("Total Price:", totalSum);
  console.log("data ..... ", cartDAta);
  return (
    <Container>
     

   
      <Box sx={{mt:'4% 0%'}}>
        <Box>
          <Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  margin:'4% 0'
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  disabled={checked}
                  onClick={() => setChecked(!checked)}
                  style={{
                    backgroundColor: checked ? "#20b26c" : "#f3f5f7",
                    color: checked ? "white" : "#adb1b8",
                    width: "100px",
                    height: "40px",
                    padding: "2% 4%",
                    boxShadow: "none",
                  }}
                >
                  <b>Buy</b>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!checked}
                  onClick={() => setChecked(!checked)}
                  style={{
                    backgroundColor: checked ? "#f3f5f7" : "#ef454a",
                    color: checked ? "#adb1b8" : "white",
                    width: "100px",
                    height: "40px",
                    padding: "2% 4%",
                    boxShadow: "none",
                  }}
                >
                  <b>Sell</b>
                </Button>
              </Box>
            </Box>
          
          </Box>
        </Box>
        
        </Box>
<Divider/>

        <Box sx={{flexGrow:1 }}>
          <Grid container>
          {cartDAta.map((item) => ( 
<>

              <Grid item sx={{ display: "flex" }} xs={12} sm={12} md={12}>


                <Grid item sm={6} md={6} sx={{ display: "flex",flexDirection: "column"}}>
                 
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{width:'20px',height:'20px',backgroundColor: "#f7a600",
                        color: "#121214", }}>
                          
                          <span style={{fontSize:'10px'}}>    {item.name.charAt(0).toUpperCase()}  </span> 
                          </Avatar>
                        </ListItemAvatar>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          {
                            <Typography
                              fontWeight="bold"
                              sx={{ fontSize: "14px" }}
                            >
                              {item.name}
                            </Typography>
                          }

                          {
                            <Typography
                              variant="body2"
                              fontWeight="regular"
                              sx={{ color: "#adb1b8", fontSize: "12px" }}
                            >
                              {item.nameDescription}
                            </Typography>
                          }
                          {
                            <Typography
                              variant="body2"
                              fontWeight="regular"
                              sx={{ color: "#adb1b8", fontSize: "12px" }}
                            >
                              {item.nameStatus}
                            </Typography>
                          }
                        </Box>
                      </ListItem>
                    </List>
               
                 <Box sx={{marginLeft:'5%'}}>
                  <Box
                    sx={{ fontSize: "22px", textAlign: "start" }}
                  >
                    <Typography fontWeight="bold" sx={{ fontSize: "20px" }}>
                      {item.price}
                      {limitCurrancy}
                    </Typography>
                  </Box>
             

                 
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {
                        <Typography
                          variant="body2"
                          fontWeight="regular"
                          sx={{
                            color: "#adb1b8",
                            fontSize: "12px",
                            gap: "10px",
                            display: "flex",
                            color: "#adb1b8",
                          }}
                        >
                          Available:
                          <Typography sx={{ fontSize: "12px", color: "black" }}>
                            {item.Available}
                          </Typography>
                        </Typography>
                      }

                      {
                        <Typography
                          variant="body2"
                          fontWeight="regular"
                          sx={{
                            fontSize: "12px",
                            gap: "10px",
                            display: "flex",
                            color: "#adb1b8",
                          }}
                        >
                          Limits:
                          <Typography sx={{ fontSize: "12px", color: "black" }}>
                           
                             {item.Limits} 
                          </Typography>
                        </Typography>
                      }
                    </Box>
                 
                    </Box>
                  
              
                  
                </Grid>


                <Grid item xs={6} sm={6}sx={{display: "flex",alignItems: "end",justifyContent: "end",
                  }}
                >
            
                    <Button
                      variant="contained"
                      // color={checked ? 'secondary' : 'primary'}
                      sx={{
                        backgroundColor: checked ? "#20b26c" : "#ef454a",
                        width: "90px",
                        height: "40px",
                        padding: "2% 0%",
                        fontSize:'12px',
                        "&:hover": {
                          backgroundColor: checked ? "#20b26c" : "#ef454a",
                        },
                      }}
                    >
                      <b>
                        <span style={{ textTransform: "capitalize" }}>
                          {checked ? "Buy " : "Sell "}
                        </span>
                        USDT
                      </b>
                    </Button>
                </Grid>
                
              <Divider/>
              </Grid>
              </>
          ))}
        </Grid>

          {cartDAta.length === 0 ? (
            <h1 style={{ textAlign: "center" }}> Product Not Found </h1>
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={3} />
              <StyledTableCell
                colSpan={2}
                sx={{ backgroundColor: "#1976d2", color: "white" }}
              >
                {/* <b>Subtotal: </b> */}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{ backgroundColor: "#1976d2", color: "white" }}
              >
                {/* <b>{totalSum}$ </b> */}
              </StyledTableCell>
            </StyledTableRow>
          )}

        </Box>
        

      </Container>
  );
}
