import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from '@mui/material/Button'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box } from "@mui/material";
import Header from "../../components/Header";



const Dashboard = () => {
    return(
        <div>
            <Header title={"DASHBOARD"} subtitle={"Welcome to your Dashboard"} />
        <Box sx={{textAlign: "right"}}>
            <Button variant="contained" >
                <FileDownloadOutlinedIcon /> 
                Download Reports
            </Button>
        </Box>

            <Row1 />
            <Row2 />
            <Row3 />
        </div>
    )
}
export default Dashboard;