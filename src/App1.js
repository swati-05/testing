import React from "react";
import Header from "./container/Header";
import Sidebar from "./container/Sidebar"
 import Form  from "./components/Form"
import { Box } from "@mui/system";
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import ProfileLogin from './components/ProfileLogin';
import { Paper, Stack, styled } from "@mui/material";
import TabPanel from './container/TabPanel'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App1() {
  return (
    <div className="App">
    <Box>
    <Stack spacing={2} >
                  <Header />
                  <TabPanel />
                        <Sidebar />
               
                    <Item >
                        <Form />
                    </Item>
                   
                </Stack>
  </Box>


 {/* <Sidebar />
    <Profile />
    <Login />
    <ChangeColor />
    <ProfileLogin /> */}
    {/* <Header /> */}
    </div>
  );
}

export default App1;
