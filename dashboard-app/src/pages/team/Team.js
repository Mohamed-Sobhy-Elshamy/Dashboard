import React from "react";
import { DataGrid } from '@mui/x-data-grid';

import {rows} from './Data'
import { useTheme } from "@mui/material";

import { Box, Typography } from "@mui/material";

// import icons 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import Header from "../../components/Header";



const Team = () => {
    //use theme =>> عشان تستخدم الالوان بتاع ال dark || light mode =>> from material
    const theme = useTheme()





// variable Columns => عبارة عن array of object
const columns = [
    { field: 'id', headerName: 'ID', width: 50, align: "center", headerAlign: "center"  },
    { field: 'name', headerName: 'Name', align: "center", headerAlign: "center", flex:1  },
    { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center"  },
    { field: 'age', headerName: 'Age', width: 50 , align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'Phone', flex: 1  , align: "center", headerAlign: "center"},
    { field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: "center", 
        renderCell: ({row: {access}}) => {
            return(
                <>

                <Box sx={{
                    
                    p: "5px",
                    width: "99px",
                    textAlign: "center",
                    borderRadius: "5px",
                    display: "flex", 
                    justifyContent: "space-evenly",
                    backgroundColor: access === "Admin"? theme.palette.primary.dark : 
                    access === "Manager"?  "#80cbc4" : 
                    access === "user"? "#004d40"  : null ,

                }}>
                    {access ==="user" && (<LockOutlinedIcon fontSize="small" />)}
                    {access === "Admin" && (<AdminPanelSettingsOutlinedIcon fontSize="small" />)}
                    {access === "Manager" && (<GppGoodOutlinedIcon fontSize="small" />)}
                    <Typography sx={{fontSize: "13px",}}>{access}</Typography>
                </Box>
                </>
            )
    }  }
];


    return(
    <Box sx={{ height: 600, width:"97%", mx: "auto"  }}>
        <Header title={"TEAM"} subtitle={"Managing the team members"}  />
        <DataGrid rows={rows} columns={columns} />
    </Box>
    )
}
export default Team;