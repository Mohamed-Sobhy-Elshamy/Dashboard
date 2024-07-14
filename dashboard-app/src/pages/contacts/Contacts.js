import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import {rows, columns} from './data'
import Header from "../../components/Header";

const Contacts = () => {
    return(
    <Box sx={{ height: 600, width:"97%", mx: "auto"  }}>
        <Header title={"CONTACTS"} subtitle={"List of Contacts for future refrence"} />
        <DataGrid
        slots={{
            toolbar: GridToolbar,
        }}
        rows={rows} columns={columns} />
    </Box>
    )
}

export default Contacts;