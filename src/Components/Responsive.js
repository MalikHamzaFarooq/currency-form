<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, mt: "5%" }} aria-label="customized table">
       
        <Grid container spacing={2}>
      {cartDAta.map((item) => (
        <Grid item xs={12} md={12} lg={6} sx={{display:'flex'}} >

          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>{item.name.charAt(0).toUpperCase()}</Avatar>
              </ListItemAvatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography fontWeight="bold" sx={{ fontSize: "16px" }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" fontWeight="regular" sx={{ color: "#adb1b8", fontSize: "12px" }}>
                  {item.nameDescription}
                </Typography>
                <Typography variant="body2" fontWeight="regular" sx={{ color: "#adb1b8", fontSize: "12px" }}>
                  {item.nameStatus}
                </Typography>
              </Box>
            </ListItem>
          </List>
          <Box sx={{display:'flex',flexDirection: { md: 'column', lg: 'row' } }}>

         
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography variant="body2" fontWeight="regular" sx={{ color: "#adb1b8", fontSize: "14px", gap: "10px", display: "flex", color: "#adb1b8" }}>
              Available: <Typography sx={{ fontSize: "14px", color: "black" }}><b>{item.Available}</b></Typography>
            </Typography>
            <Typography variant="body2" fontWeight="regular" sx={{ fontSize: "14px", gap: "10px", display: "flex", color: "#adb1b8" }}>
              Limits: <Typography sx={{ fontSize: "14px", color: "black" }}><b>{item.Limits}</b></Typography>
            </Typography>
          </Box>
         
          </Box>
          <Box sx={{ gap: "2%",  }}>
            <Button size="small">Jazcash</Button>
            <Button size="small">EasyPaisa</Button>
          </Box>

          <Button variant="contained" sx={{ backgroundColor: checked ? "#20b26c" : "#ef454a", width: "100px", height: "40px", padding: "2% 0%", "&:hover": { backgroundColor: checked ? "#20b26c" : "#ef454a" } }}>
            <b><span style={{ textTransform: "capitalize" }}>{checked ? "Buy" : "Sell"}</span> USDT</b>
          </Button>
          
        </Grid>
      ))}
      {cartDAta.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h5" align="center">Product Not Found</Typography>
        </Grid>
      ) : (
        <Grid item xs={12} md={6} lg={4} xl={3}>
          {/* Subtotal Section */}
        </Grid>
      )}
    </Grid>
      </Table>
    </TableContainer>










// <Grid container spacing={2}>
// {cartDAta.map((item) => (
//   <Grid item xs={12} md={12} lg={12} sx={{display:'flex'}} >

//     <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
//       <ListItem>
//         <ListItemAvatar>
//           <Avatar>{item.name.charAt(0).toUpperCase()}</Avatar>
//         </ListItemAvatar>
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <Typography fontWeight="bold" sx={{ fontSize: "16px" }}>
//             {item.name}
//           </Typography>
//           <Typography variant="body2" fontWeight="regular" sx={{ color: "#adb1b8", fontSize: "12px" }}>
//             {item.nameDescription}
//           </Typography>
//           <Typography variant="body2" fontWeight="regular" sx={{ color: "#adb1b8", fontSize: "12px" }}>
//             {item.nameStatus}
//           </Typography>
//         </Box>
//       </ListItem>
//     </List>
//   <Box>
//   <Typography fontWeight="bold" sx={{ fontSize: "22px" }}>
//             {item.price}
//             {limitCurrancy}
//           </Typography>
//   </Box>
//     <Box sx={{display:'flex',flexDirection: { md: 'column', lg: 'row' } }}>
 
   
//     <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//       <Typography variant="body2" fontWeight="regular" sx={{ color: "#adb1b8", fontSize: "14px", gap: "10px", display: "flex", color: "#adb1b8" }}>
//         Available: <Typography sx={{ fontSize: "14px", color: "black" }}><b>{item.Available}</b></Typography>
//       </Typography>
//       <Typography variant="body2" fontWeight="regular" sx={{ fontSize: "14px", gap: "10px", display: "flex", color: "#adb1b8" }}>
//         Limits: <Typography sx={{ fontSize: "14px", color: "black" }}><b>{item.Limits}</b></Typography>
//       </Typography>
//     </Box>
   
//     </Box>
//     <Box sx={{ gap: "2%",  }}>
//       <Button size="small">Jazcash</Button>
//       <Button size="small">EasyPaisa</Button>
//     </Box>
    
//     <Button variant="contained" sx={{ backgroundColor: checked ? "#20b26c" : "#ef454a", width: "100px", height: "40px", padding: "2% 0%", "&:hover": { backgroundColor: checked ? "#20b26c" : "#ef454a" } }}>
//       <b><span style={{ textTransform: "capitalize" }}>{checked ? "Buy" : "Sell"}</span> USDT</b>
//     </Button>
//   </Grid>
// ))}
// {cartDAta.length === 0 ? (
//   <Grid item xs={12}>
//     <Typography variant="h5" align="center">Product Not Found</Typography>
//   </Grid>
// ) : (
//   <Grid item xs={12} md={6} lg={4} xl={3}>
//     {/* Subtotal Section */}
//   </Grid>
// )}
// </Grid>