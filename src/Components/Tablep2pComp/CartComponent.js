import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import './Tablep2p.css'
// import { useContext } from "react";
import {
  Box,
  Button,
  // Container,
  // Grid,
  // IconButton,
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
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
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

export default function CartComponent() {
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

  // const handleChange = () => {
    // setChecked((prev) => !prev);
  // };

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

  // const handleDelete = (itemId) => {
    // const newCart = cartDAta.filter((item) => item._id !== itemId);
    // setCArtData(newCart);
    // setNotification((prev) => prev - 1);
  // };

  // const totalSum = cartDAta.reduce(
  //   (acc, item) => acc + item.quantity * item.price,
  //   0
  // );

  // console.log("Total Price:", totalSum);
  console.log("data ..... ", cartDAta);
  return (
    <TableContainer >
      <Table sx={{  mt: "5%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button
                  variant="contained"      
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
            </StyledTableCell>
            <StyledTableCell>
              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={price}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    width: "120px",
                    height: "40px",
                    padding: "2% 4%",
                    boxShadow: "none",
                    backgroundColor: "rgb(243, 245, 247)",
                    fontSize: "12px",
                    "& fieldset": { border: "none" },
                  }}
                  // label="Age"
                  onChange={handlePriceChange}
                >
                  <MenuItem value={1}>
                  <img width="20" height="20"  src="https://img.icons8.com/color/48/tether--v2.png" alt="tether--v2"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>USDT</span> 
                  </MenuItem>
                  <MenuItem value={2}>
                  <img width="20" height="20" src="https://img.icons8.com/color/48/bitcoin--v1.png" alt="bitcoin--v1"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>BTC</span> 
                  </MenuItem>
                  <MenuItem value={3}>
                  <img width="20" height="20" src="https://img.icons8.com/external-black-fill-lafs/20/000000/external-Ethereum-cryptocurrency-black-fill-lafs.png" alt="external-Ethereum-cryptocurrency-black-fill-lafs"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>ETH</span> 
                  </MenuItem>
                  <MenuItem value={4}>
                  <img width="20" height="20" src="https://img.icons8.com/external-black-fill-lafs/20/000000/external-USDC-cryptocurrency-black-fill-lafs.png" alt="external-USDC-cryptocurrency-black-fill-lafs"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>USDC</span> 
                  </MenuItem>
                </Select>
              </FormControl>
            </StyledTableCell>
            <StyledTableCell>
              <FormControl
                sx={{ display: "flex", flexDirection: "row", gap: 1 }}
              >
                <input
                  type="text"
                  style={{
                    width: " 120px",
                    height: "40px",
                    padding: " 2% 4%",
                    backgroundColor: "rgb(243, 245, 247)",
                    border: "none",
                  }}
                  placeholder="Enter Amount"
                ></input>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={limitCurrancy}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    width: "120px",
                    height: "40px",
                   
                    boxShadow: "none",
                    backgroundColor: "rgb(243, 245, 247)",
                    border: "none",
                    fontSize: "12px",
                    "& fieldset": { border: "none" },
                  }}
                  // label="Age"
                  onChange={handleLimitCurrancy}
                >
                    <MenuItem value={1}>
                  <img width="20" height="20" src="https://img.icons8.com/color/48/tether--v2.png" alt="tether--v2"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>USDT</span> 
                  </MenuItem>
                  <MenuItem value={2}>
                  <img width="20" height="20" src="https://img.icons8.com/color/48/bitcoin--v1.png" alt="bitcoin--v1"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>BTC</span> 
                  </MenuItem>
                  <MenuItem value={3}>
                  <img width="20" height="20" src="https://img.icons8.com/external-black-fill-lafs/20/000000/external-Ethereum-cryptocurrency-black-fill-lafs.png" alt="external-Ethereum-cryptocurrency-black-fill-lafs"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>ETH</span> 
                  </MenuItem>
                  <MenuItem value={4}>
                  <img width="20" height="20" src="https://img.icons8.com/external-black-fill-lafs/20/000000/external-USDC-cryptocurrency-black-fill-lafs.png" alt="external-USDC-cryptocurrency-black-fill-lafs"/> <span style={{fontSize:'12px',fontWeight:600,marginLeft:'8%'}}>USDC</span> 
                  </MenuItem>
                </Select>
              </FormControl>
            </StyledTableCell>
            <StyledTableCell>
              <FormControl sx={{ m: 1, width: 300 }}>
                {/* <InputLabel id="demo-multiple-checkbox-label">All Payment Methods</InputLabel> */}
                <Select
                  multiple
                  displayEmpty
                  value={paymentName}
                  onChange={handleCheckBoxChange}
                  input={<OutlinedInput />}
                  sx={{
                    "& fieldset": { border: "none" },
                    backgroundColor: "rgb(243, 245, 247)",
                    height: "40px",
                  }}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <em style={{ color: "grey", fontSize: "14px" }}>
                          All Payment Method
                        </em>
                      );
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <Box
                    sx={{
                      marginRight: "6%",
                      width: "92%",
                      borderRadius: "8px",
                      marginLeft: "1%",
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Search Payment Methods"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      sx={{
                        padding: "6.5px 6px",
                        "& fieldset": { borderBlock: "2px solid #f7a600" },
                      }}
                    />
                  </Box>

                  {[
                    "Bank Transfer",
                    "Sada Pay",
                    "EAisy Paisa",
                    "Jaz cash",
                    "Other",
                  ]
                    .filter((name) =>
                      name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((name) => (
                      <MenuItem key={name} value={name} sx={{}}>
                        {name}
                      </MenuItem>
                    ))}
                  {/* <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={checked}
                      onClick={() => setChecked(!checked)}
                      style={{
                        backgroundColor: "#f7a600",
                        color: "#121214",
                        width: "100px",
                        height: "32px",
                        padding: "2% 4%",
                        boxShadow: "none",
                        fontSize: "12px",
                      }}
                    >
                      Confirm
                    </Button>
                    <Button
                      variant="contained"
                      disabled={!checked}
                      onClick={() => setChecked(!checked)}
                      style={{
                        backgroundColor: "white",
                        color: "#121214",
                        width: "100px",
                        height: "32px",
                        padding: "2% 4%",
                        boxShadow: "none",
                        border: "2px solid rgb(243, 245, 247)",
                        fontSize: "12px",
                      }}
                    >
                      Reset
                    </Button>
                  </Box> */}
                </Select>
              </FormControl>
            </StyledTableCell>
            <StyledTableCell>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={refresh}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      width: "140px",
                      height: "40px",
                      padding: "2% 4%",
                      boxShadow: "none",
                      backgroundColor: "rgb(243, 245, 247)",
                      fontSize: "12px",
                      "& fieldset": { border: "none" },
                    }}
                    // label="Age"
                    onChange={handleRefresh}
                  >
                    <MenuItem value={1}>5s to referesh</MenuItem>
                    <MenuItem value={2}>10s to referesh</MenuItem>
                    <MenuItem value={3}>15s to referesh</MenuItem>
                    <MenuItem value={4}>20s to referesh</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <div>
                    <Button
                      variant="text"
                      sx={{
                        color: "black",
                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                      onClick={handleOpenMenu}
                      endIcon={<FilterAltIcon />}
                    >
                      Filter
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu}
                    >
                      {[
                        "Show only Verified Advertisers",
                        "Show only Eligible Ads",
                      ].map((name) => (
                        <MenuItem key={name}>
                          <Checkbox
                            checked={filter.indexOf(name) > -1}
                            onChange={handleFilterCheckBoxChange}
                            value={name}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          // disabled={!filter.length}
                          onClick={handleConfirm}
                          style={{
                            backgroundColor: "#f7a600",
                            color: "#121214",
                            width: "100px",
                            height: "32px",
                            padding: "2% 4%",
                            boxShadow: "none",
                            fontSize: "12px",
                          }}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant="contained"
                          // disabled={!checked}
                          onClick={handleCancel}
                          style={{
                            backgroundColor: "white",
                            color: "#121214",
                            width: "100px",
                            height: "32px",
                            padding: "2% 4%",
                            boxShadow: "none",
                            border: "2px solid rgb(243, 245, 247)",
                            fontSize: "12px",
                          }}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </Menu>
                  </div>
                </FormControl>
              </Box>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              {" "}
              <span style={{ color: "#adb1b8", marginLeft: "6%" }}>
                {" "}
                Advertiser
              </span>
            </StyledTableCell>
            <StyledTableCell align="center">
              {" "}
              <span style={{ color: "#adb1b8" }}>Price </span>
            </StyledTableCell>
            <StyledTableCell>
              {" "}
              <span style={{ color: "#adb1b8" }}> Available|Limits </span>{" "}
            </StyledTableCell>
            <StyledTableCell>
              {" "}
              <span style={{ color: "#adb1b8" }}> Payment Method </span>{" "}
            </StyledTableCell>
            <StyledTableCell align="right">
              <GradientButton size="small">
                Taker 0 Transaction Fees
              </GradientButton>
            </StyledTableCell>
            {/* <StyledTableCell></StyledTableCell> */}
            {/* <StyledTableCell align="center">Multi Items price</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          
          {cartDAta.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                    <StyledBadge
                     overlap="circular"
                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                   variant="dot"
>
                      <Avatar sx={{ ...gradientAvatar }}>
                        {" "}
                        {item.name.charAt(0).toUpperCase()}
                      </Avatar>
                      </StyledBadge>
                    </ListItemAvatar>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {
                        <Typography fontWeight="bold" sx={{ fontSize: "16px" }}>
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
              </StyledTableCell>
              <StyledTableCell sx={{ fontSize: "22px", textAlign: "center" }}>
                <Typography fontWeight="bold" sx={{ fontSize: "22px" }}>
                  {item.price}
                  {limitCurrancy}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
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
                        fontSize: "14px",
                        gap: "10px",
                        display: "flex",
                        color: "#adb1b8",
                      }}
                    >
                      Available:
                      <Typography sx={{ fontSize: "14px", color: "black" }}>
                        <b> {item.Available}</b>{" "}
                      </Typography>
                    </Typography>
                  }

                  {
                    <Typography
                      variant="body2"
                      fontWeight="regular"
                      sx={{
                        fontSize: "14px",
                        gap: "10px",
                        display: "flex",
                        color: "#adb1b8",
                      }}
                    >
                      Limits:
                      <Typography sx={{ fontSize: "14px", color: "black" }}>
                        {" "}
                        <b> {item.Limits} </b>
                      </Typography>
                    </Typography>
                  }
                </Box>
              </StyledTableCell>

              <StyledTableCell>
                <Box sx={{ gap: "2%", display: "flex" }}>
                  <PaymentButton size="small"> jazcash </PaymentButton>
                  <PaymentButton size="small"> EasyPaisa </PaymentButton>
                </Box>
              </StyledTableCell>
              {/* <StyledTableCell align="right">{item.quantity}</StyledTableCell> */}

              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  // color={checked ? 'secondary' : 'primary'}
                  sx={{
                    backgroundColor: checked ? "#20b26c" : "#ef454a",
                    width: "100px",
                    height: "40px",
                    padding: "2% 0%",
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

                {/* <DeleteIcon onClick={() => handleDelete(item._id)} /> */}
              </StyledTableCell>
            </StyledTableRow>
          ))}

          {cartDAta.length === 0 ? (
            <h1 style={{ textAlign: "center" }}> Product Not Found </h1>
          ) : (
            <>
            <StyledTableRow>
              {/* <StyledTableCell colSpan={3} />
              <StyledTableCell
                colSpan={2}
                sx={{ backgroundColor: "#1976d2", color: "white" }}
              >
                <b>Subtotal: </b>
              </StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{ backgroundColor: "#1976d2", color: "white" }}
              >
                <b>{totalSum}$ </b>
              </StyledTableCell> */}
            </StyledTableRow>
            
            </>
          )}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}
