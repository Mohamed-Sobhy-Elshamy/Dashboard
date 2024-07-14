import React from "react";
// imports all things in Drawer
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { styled, useTheme, Theme, CSSObject, Avatar, Typography, Tooltip } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import {useLocation, useNavigate} from 'react-router-dom'

// import icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';

// import COlor
import { grey } from '@mui/material/colors';


const drawerWidth = 240;


//  Drawer function
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        }),
);



// open mixin function
    const openedMixin = (theme: Theme): CSSObject => {
        return ({
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
        });
    };



// close mixix function
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



// drawer header function
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        }));



    // SIDE BAR Function
const SideBar = ({handleDrawerClose, open}) => {
    // Hook =>> from material
    const theme = useTheme();
    // hook =>> navigate
    const navigate = useNavigate();
    // hook =>> location
    let location = useLocation();



    // constant of array 1 => the first list 
    const Array1 = [
        {"text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/" },
        {"text": "Manage Team", "icon": <Diversity3OutlinedIcon />, "path": "/team" },
        {"text": "Contacts information", "icon": <ContactPhoneOutlinedIcon />, "path": "/contacts" },
        {"text": "Invoices Balances", "icon": <FileCopyOutlinedIcon />, "path": "/invoices" }
    ]

    // constant of array 2 => the second list
    const Array2 = [
        {"text": 'Team Form', "icon": <AccountCircleOutlinedIcon />, "path": "/form"},
        {"text": 'Calender', "icon": <EventNoteOutlinedIcon />, "path": "/calender"},
        {"text": 'FAQ Page', "icon": <LiveHelpOutlinedIcon />, "path": "/faq"},
    ]

    // constant of array 3 => the third list 
    const Array3 = [
        {"text": "Bar Chart", "icon": <BarChartOutlinedIcon />, "path": "/bar" },
        {"text": "Pie Chart", "icon": <DonutSmallOutlinedIcon />, "path": "/pie" },
        {"text": "Line Chart", "icon": <StackedLineChartOutlinedIcon />, "path": "/line" },
        {"text": "Geography Chart", "icon": <TerrainOutlinedIcon />, "path": "/geography" }
    ]



    return(
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />


            <Avatar sx={{mx: "auto", width: open? 150 : 50, height: open? 150 : 50, my: "10px", transition: "0.25s"}} alt="Remy Sharp" src="./images/WhatsApp Image 2023-07-11 at 2.32.39 AM.jpeg" />

            <Typography align="center" sx={{fontSize: open? 20 : 0, transition: "0.25s"}} >Mohamed Elshamy</Typography>
            <Typography align="center" sx={{fontSize: open? 17 : 0, transition: "0.25s", color: theme.palette.info.main}}>admin</Typography>

            <Divider />

            <List>
            {Array1.map((item) => (
                <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                onClick={() => {
                    navigate(item.path)
                }}
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[900] : grey[400] : null 
                    }}
                >
                        <Tooltip title={item.text} placement="left">
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    {item.icon}
                    </ListItemIcon>
                        </Tooltip>  

                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {Array2.map((item) => (
                <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                onClick={() => {
                    navigate(item.path)
                }}
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[900] : grey[400] : null 
                    }}
                >   
                        <Tooltip title={item.text} placement="left">
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    {item.icon}
                    </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {Array3.map((item) => (
                <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                onClick={() => {
                    navigate(item.path)
                }}
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[900] : grey[400] : null 
                    }}
                >
                        <Tooltip title={item.text} placement="left">
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        
                    }}
                    >
                    {item.icon}
                    </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <DrawerHeader />
        </Drawer>
    )
}

export default SideBar;