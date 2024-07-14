import {  Paper, useTheme, Typography, Stack } from "@mui/material";
import React from "react";
import PieCharts from "../pie/PieCharts";
import BarChart from "../bar/BarChart";
import Geography from "../geography/Geography";

const Row3 = () => {
    const theme = useTheme()
    return(
        <Stack mt={3} direction={"row"} flexWrap={"wrap"} gap={2} >
            <Paper sx={{width: "33%", minWidth: "400px", flexGrow:1}}>
                <Typography
                color={theme.palette.secondary.main} sx={{padding: "30px 30px 0 30px"}} 
                variant="h6" fontWeight="bold" >Campaign</Typography>
                <PieCharts isDashboard={true} />
                <Typography variant="h6" align="center" sx={{mt: "16px"}}>$48.546 revenue generated</Typography>
                <Typography variant="body2" px={1} pb={3} align="center" >includes extra misc expenditures and costs</Typography>
            </Paper>



            <Paper sx={{width: "29%", minWidth: "400px", flexGrow:1}}>
                <Typography color={theme.palette.secondary.main} sx={{padding: "30px 30px 0 30px"}} 
                variant="h6" fontWeight="bold" >Sales Quantity</Typography>
                <BarChart isDashboard={true} />
            </Paper>



            <Paper sx={{width: "35%", minWidth: "400px", flexGrow:1}}>
                <Geography isDashboard={true} />
            </Paper>
        </Stack>
    )
}

export default Row3;