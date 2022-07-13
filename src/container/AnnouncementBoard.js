import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Divider } from '@mui/material';
import PopUpBox from './PopUpBox';

// import PopUpBox from './PopUpBox';

function AnnouncementBoard(props) {

    const [dataAnnounce, setDataAnnounce] = useState([]);
    const [dataFun, setDataFun] = useState([]);

   
    useEffect(() => {
        setDataAnnounce(props.annData)
        setDataFun(props.funData)

    }, [props.annData, props.funData])
    
    return (
        <>
            <div class='flex w-full m-auto justify-center'>
                <div class=" w-1/5  bg-slate-100 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 mt-4 ">
                    <div class="max-w-sm bg-sky-200 h-8 ">
                        <h1 class='pt-2 font-bold text-red-500 sm:text-lg'>ANNOUNCEMENT BOARD</h1>
                    </div>

                    {dataAnnounce.map((items) => (
                        <div>
                            
                            <h1 class='font-bold text-md'>{items.header}</h1>               
                            <PopUpBox ann_id={items.id} />
                           
                            <Divider />
                        </div>
                    ))}
                   

                   
                </div>
                <div class="  w-2/5  bg-slate-100 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96  mt-4 ml-12">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Raj_Bhavan.jpg/1200px-Raj_Bhavan.jpg'/>
                </div>

                <div class="  w-1/5 justify-right smax-w-sm bg-slate-100  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96  mt-4 ml-12">
                    <div class="max-w-sm bg-sky-200 h-8 ">
                        <h1 class='pt-2 font-bold text-red-500'>FUNCTIONS</h1>
                    </div>

                   {dataFun.map((items) => (
                        <div>
                         
                            <h1 class='font-bold text-md'>{items.header}</h1>
                            <PopUpBox fun_id={items.id} />
                            <Divider />
                        </div>
                    ))}
                   
                </div>
            </div>
        </>
    )
}

export default AnnouncementBoard