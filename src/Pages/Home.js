

import { useState, useEffect } from 'react'
import Header from '../container/Header'
import Sidebar from '../container/Sidebar'
import Sidenav from '../container/Sidenav'
import ContainerData from './ContainerData'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StepComponent from '../Pages/StepComponent'

function Home() {
    // const [currentUser, setcurrentUser] = useState('')

    // useEffect(() => {
    //     let user = JSON.parse(window.localStorage.getItem('user'))
    //     if (user != undefined) {
    //         setcurrentUser(user.username)
    //     }
    // }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>

            <Header />
            <Stack direction="row" spacing={2}>

                {/* <h1 className='text-lg text-semibold'>Welcome <span className='text-2xl font-bold bg-gray-700 px-4 text-white'>{currentUser}</span></h1> */}


                <Item><Sidenav /></Item>
                {/* <Item className='w-full justify-right '><StepComponent /></Item> */}
                <Item className='w-full justify-right '><ContainerData /></Item>
                {/* <Item>Item 3</Item> */}
            </Stack>
        </>
    )
}

export default Home
