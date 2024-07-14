import {  Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import { data1, data2, data3, data4 } from "./Data";



const Row1 = () => {
    const theme = useTheme()

    return(
        <Stack sx={{marginTop: "15px"}} direction={"row"} gap={2} flexWrap={"wrap"} justifyContent={{xs: "center", sm: "space-between"}}>
            <Card icon={<ForwardToInboxOutlinedIcon sx={{fontSize: "30px", color: theme.palette.primary.dark}} />} 
            title={"11.752"} 
            subtitle={"Emails Sent"}  
            increase={"+14%"} data={data1} scheme={"nivo"} />
            
            
            <Card icon={<PointOfSaleOutlinedIcon  sx={{fontSize: "30px", color: theme.palette.primary.dark}} />} 
            title={"400.654"} 
            subtitle={"Sales Obtained"}  
            increase={"+22%"} data={data2} scheme={'set1'} />
            
            
            
            <Card icon={<PersonAddAltOutlinedIcon  sx={{fontSize: "30px", color: theme.palette.primary.dark}} />} 
            title={"32.441"} 
            subtitle={"New Clients"}  
            increase={"+5%"} data={data3} scheme={'dark2'} />



            <Card icon={<TrafficOutlinedIcon  sx={{fontSize: "30px", color: theme.palette.primary.dark}}/>} 
            title={"1.325.453"} 
            subtitle={"Traffic Received"}  
            increase={"+43%"} data={data4} scheme={'pastel1'} />

        </Stack>
    )
}

export default Row1;