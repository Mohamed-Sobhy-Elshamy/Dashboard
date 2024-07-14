import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import ToBar from './components/ToBar';
import SideBar from './components/SideBar';
import { ThemeProvider, createTheme, styled } from '@mui/material';
import { getDesignTokens } from './theme';
import { Outlet } from 'react-router-dom';

// const drawerWidth = 240;

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }


// drawer header function 
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  }));



export default function MiniDrawer() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  // mode =>>> المسؤول اللي بيعرض لك light || dark
  const [mode, setMode] = React.useState(localStorage.getItem("currentMode")? localStorage.getItem("currentMode") : "dark");


    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
          <ToBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />

          <SideBar open={open} handleDrawerClose={handleDrawerClose}  />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
