import React from 'react';
import "./Chart.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Paper } from '@mui/material';
const TitleChart = () => {
 

  return (
    <>
  

 <div style={{position:'relative',margin:'12rem 0'}}>

<div className='chart' style={{position:'relative',height:'100vh',width:'100vw'}}>

<div className='top'>
<div id='box51'>
  <Paper   sx={{bgcolor: '#009688'}}>

<ListItem alignItems="flex-start" sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
          <Avatar >  <ImageIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography> */}
           
            </React.Fragment>
          }
        />
      </ListItem>
  </Paper>
    </div>
    <div id='box52'  >
    

    </div>
    <div id='box53'>
     

    </div>


<div >
 
 
</div> 

</div>

<div className='middle'>
<div id='box4'>
<Paper  sx={{bgcolor: '#009688'}}>
    
<ListItem alignItems="flex-start"  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
        <Avatar >  <WorkIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography> */}
       
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>

    </div>

    <div id='box5'>
    <Paper  sx={{bgcolor: '#009688'}}>
    
    <ListItem alignItems="flex-start"  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
        <Avatar >  <BeachAccessIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Oui"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography> */}
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>
    </div>

   

    <div  id='box6'>
    <Paper  sx={{bgcolor: '#009688',}}>
    
    <ListItem alignItems="flex-start"  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
        <Avatar >  <BeachAccessIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Summer"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, 

              </Typography> */}
      
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>

    </div>

</div>

<div >

<div id='box31'  >
   

    </div>

<div id='box1'  >
   

    </div>
    <div id='box2'>
     

    </div>



    
    <div  id='box3'>
    <Paper  sx={{bgcolor: '#009688'}}>
    
    <ListItem alignItems="flex-start"  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
        <Avatar >  <BeachAccessIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Summer"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, 
              </Typography>
       */}
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>

    </div>
</div>
<div className='end'>
<div id='box10' class="MuiPaper-root">
<Paper  sx={{bgcolor: '#009688'}}>
    
<ListItem alignItems="flex-start"  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
        <Avatar >  <BeachAccessIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Summer"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, 
              </Typography> */}
             
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>

    </div>
    <div id='box11'>
    <Paper  sx={{bgcolor: '#009688'}}>
    
    <ListItem alignItems="flex-start"  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
        <Avatar >  <WorkIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography> */}
           
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>

    </div>
    <div  id='box12'>
    <Paper  sx={{bgcolor: '#009688'}}>
    
    <ListItem alignItems="flex-start"  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <ListItemAvatar>
        <Avatar >  <WorkIcon /> </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch"
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography> */}
         
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>

    </div>
    <div id='box21'  >
     

    </div>
    
    <div id='box22'  >
     

    </div>

    <div id='box23'  >
    

    </div>

</div>
</div>
 </div>


 

    </>
  );
};

export default TitleChart;