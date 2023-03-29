import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

const PublicLayout = ({title}) => (
    <ThemeProvider theme={createTheme()}>
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{title}</Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <Outlet />
    </ThemeProvider>
);

export default PublicLayout