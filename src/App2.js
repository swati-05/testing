import { useState, useEffect } from 'react'
import Navbar from './container/Navbar'
import NavTitle from './container/NavTitle'
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Content2 from './container/Content2'
import Divider from '@mui/material/Divider'
import CardMission from './components/CardMission'
import NewsBoard from './container/NewsBoard'
import AnnouncementBoard from './container/AnnouncementBoard'
import axios from 'axios'
function App2() {

    const [newsList, setNewsList] = useState([])
    const [eventList, setEventList] = useState([])
    const [announcemnetList, setAnnouncemnetList] = useState([])
    const [funList, setFunList] = useState([])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    
    const updateData = (ulbId) => {
        if(ulbId==0){
            fetFullData()
            return
        }
        axios.get(`http://localhost:3333/news?ulbid=${ulbId}`)
            .then(function (response) {
                console.log('news data ', response);
                setNewsList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get(`http://localhost:3333/event?ulbid=${ulbId}`)
            .then(function (response) {
                console.log('events data ', response);
                setEventList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get(`http://localhost:3333/announcement?ulbid=${ulbId}`)
            .then(function (response) {
                console.log('annoucement data ', response);
                setAnnouncemnetList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get(`http://localhost:3333/function?ulbid=${ulbId}`)
            .then(function (response) {
                console.log('annoucement data ', response);
                setFunList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetFullData()
    }, [])

    const fetFullData = () => {
        axios.get(`http://localhost:3333/news`)
            .then(function (response) {
                console.log('news data ', response);
                setNewsList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get(`http://localhost:3333/event`)
            .then(function (response) {
                console.log('events data ', response);
                setEventList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get(`http://localhost:3333/announcement`)
            .then(function (response) {
                console.log('annoucement data ', response);
                setAnnouncemnetList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get(`http://localhost:3333/function`)
            .then(function (response) {
                console.log('annoucement data ', response);
                setFunList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <div class='bg-red-500'>
            <Navbar fun={updateData} />
            <Box direction="row">
                <div className='bg-red-700'>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <Item elevation={0} sx={{ width: '100%', margin: '0 auto' }}>
                            <NavTitle />
                            <NewsBoard newData={newsList} eventData={eventList} />
                            <AnnouncementBoard annData={announcemnetList} funData={funList} />


                            <Content2 />
                            <CardMission />
                        </Item>

                    </Stack>
                </div>

            </Box>
        </div>
    )
}

export default App2