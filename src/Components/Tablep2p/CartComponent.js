import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { cartDAta } from "./cartDAta";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
// import { styled } from '@mui/system';
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import EditIcon from "@mui/icons-material/Edit";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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

export default function CartComponent() {
  const [age, setAge] = React.useState("");

  const handleMenueChange = (event) => {
    setAge(event.target.value);
  };

  // ..............//

  const [checked, setChecked] = React.useState(true);
  //Mullti selection check
  const [personName, setPersonName] = React.useState([]);

  const handleCheckBoxChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
    // <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, mt: "5%" }} aria-label="customized table">
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
              </StyledTableCell>
              <StyledTableCell>
                <FormControl>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      width: "120px",
                      height: "40px",
                      padding: "2% 4%",
                      boxShadow: "none",
                      backgroundColor: "rgb(243, 245, 247)",
                    }}
                    // label="Age"
                    onChange={handleMenueChange}
                  >
                    <MenuItem value={1}>
                      <EditIcon /> USD T
                    </MenuItem>
                    <MenuItem value={2}>
                      <EditIcon /> BTC{" "}
                    </MenuItem>
                    <MenuItem value={3}>
                      <EditIcon /> ETH{" "}
                    </MenuItem>
                    <MenuItem value={4}>
                      <EditIcon /> USD C
                    </MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
              <StyledTableCell>
                <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                  <input
                    type="text"
                    style={{
                      width: " 120px",
                      height: "31px",
                      padding: " 2% 4%",
                      backgroundColor: "rgb(243, 245, 247)",
                      border: "none",
                    }}
                    placeholder="Enter Amount"
                  ></input>

                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      width: "120px",
                      height: "40px",
                      padding: "2% 4%",
                      boxShadow: "none",
                      backgroundColor: "rgb(243, 245, 247)",
                      border: "none",
                    }}
                    // label="Age"
                    onChange={handleMenueChange}
                  >
                    <MenuItem value={1}>
                      <EditIcon />
                      PKR
                    </MenuItem>
                    <MenuItem value={2}>
                      <EditIcon /> BTC{" "}
                    </MenuItem>
                    <MenuItem value={3}>
                      <EditIcon /> ETH{" "}
                    </MenuItem>
                    <MenuItem value={4}>
                      <EditIcon /> USDC
                    </MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
              <StyledTableCell>
                <FormControl sx={{ m: 1, width: 300 }}>
                  {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    // id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleCheckBoxChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    sx={{width:'240px',
                    backgroundColor: "rgb(243, 245, 247)",
                  
                  }}
                  >
                    {[
                      "Oliver Hansen",
                      "Van Henry",
                      "April Tucker",
                      "Ralph Hubbard",
                      "Omar Alexander",
                      "Carlos Abbott",
                      "Miriam Wagner",
                      "Bradley Wilkerson",
                      "Virginia Andrews",
                      "Kelly Snyder",
                    ].map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </StyledTableCell>

              {/* <StyledTableCell > */}
              <Box  sx={{display:'flex'}}>
                <FormControl>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      width: "120px",
                      height: "40px",
                      padding: "2% 4%",
                      boxShadow: "none",
                      backgroundColor: "rgb(243, 245, 247)",
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                    }}
                    // label="Age"
                    onChange={handleMenueChange}
                  >
                    <MenuItem value={1}>
                      <EditIcon /> UNIFEX
                    </MenuItem>
                    <MenuItem value={2}>
                      <EditIcon /> Blog
                    </MenuItem>
                    <MenuItem value={3}>
                      <EditIcon /> Enter
                    </MenuItem>
                    <MenuItem value={4}>
                      <EditIcon /> USD C
                    </MenuItem>
                  </Select>
                </FormControl>
             
                <FormControl sx={{ m: 1, width: 300 }}>
                  {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    // id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleCheckBoxChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    sx={{width:'140px',
                    backgroundColor: "rgb(243, 245, 247)",
                  
                  }}

                  >
                    {[
                     'Show only Verified Advertisers',
                      "Show only Eligible Ads",
                    ].map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

              </Box>


              {/* </StyledTableCell> */}
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
                <span style={{ color: "#adb1b8" }}>
                  {" "}
                  Available|Limits{" "}
                </span>{" "}
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
                        <Avatar>{item.name.charAt(0).toUpperCase()}</Avatar>
                      </ListItemAvatar>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {
                          <Typography
                            fontWeight="bold"
                            sx={{ fontSize: "16px" }}
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
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "22px", textAlign: "center" }}>
                  <Typography fontWeight="bold" sx={{ fontSize: "22px" }}>
                    {item.price}
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
          </TableBody>
        </Table>
      </TableContainer>
    // </Container>
  );
}
