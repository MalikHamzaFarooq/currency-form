
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



  <Box sx={{flexGrow:1}}>
  <Grid container>
       {cartDAta.map((item) => ( 


           <Grid item sx={{ display: "flex" }} xs={12}>


             <Grid item sm={6} md={6} sx={{ display: "flex", flexDirection: "column"}}>
              
                 <List
                   sx={{
                     width: "100%",
                     maxWidth: 360,
                     bgcolor: "background.paper",
                   }}
                 >
                   <ListItem>
                     <ListItemAvatar>
                       <Avatar sx={{ ...gradientAvatar }}>
                         {" "}
                         {item.name.charAt(0).toUpperCase()}
                       </Avatar>
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
            
              
               <Box
                 sx={{ fontSize: "22px", textAlign: "center" }}
               >
                 <Typography fontWeight="bold" sx={{ fontSize: "22px" }}>
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
              

               
                 <Box sx={{ gap: "2%", display: "flex" }}>
                   <PaymentButton size="small"> jazcash </PaymentButton>
                   <PaymentButton size="small"> EasyPaisa </PaymentButton>
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
             </Grid>
             
           </Grid>
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