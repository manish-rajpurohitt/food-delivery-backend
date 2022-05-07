import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


function ChangeOrderStatus(props) {
    const [status, updateStatus] = React.useState("RIDER_ASSIGNED");
    const order = props.order;
    const getState = (curstate) => {
        switch (curstate) {
            case "RIDER_ASSIGNED":
                return "RIDER_REACHED_SOURCE"
            case "RIDER_REACHED_SOURCE":
                return "RIDER_PICKED_UP"
            case "RIDER_PICKED_UP":
                return "RIDER_REACHED_DESTINATION"
            case "RIDER_REACHED_DESTINATION":
                return "RIDER_DELIVERED"
            default:
                break;
        }
    }
    const handleUpdateDelivery = () => {
        let state = getState(status)
        console.log(state);
        updateStatus(state);

        props.updateDeliveryStatus(state, order._id);
    }
  return (
    <div>
         <h3>DELIVERY STATUS:</h3>
         <TextField disabled value={order.deliveryStatus}/>
         {
             status === "RIDER_DELIVERED"? "" :
             <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={()=>handleUpdateDelivery()}
        >
            Update status
        </Button> 
         }
         
    </div>
  )
}

export default ChangeOrderStatus