import React, { useState, useEffect } from 'react'
import axios from 'axios'




function Selectbox(props) {
    // const [category, setcategory] = useState([])
    const [dataSelect, setDataSelect] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/Select')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setDataSelect(response.data)
            })

    }, [])

    const handleChange = (e) => {

        props.fun(e.target.value)
        return
        // let ulbId = e.target.value
        // setcategory(ulbId)

        // axios.get(`http://localhost:3333/news?ulbid=${ulbId}`)
        //     .then(function (response) {
        //         console.log('news data ', response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        // axios.get(`http://localhost:3333/event?ulbid=${ulbId}`)
        //     .then(function (response) {
        //         console.log('events data ', response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        // axios.get(`http://localhost:3333/announcement?ulbid=${ulbId}`)
        //     .then(function (response) {
        //         console.log('annoucement data ', response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })


    }


    return (
        <>
            <div class="flex">

                <select
                    class=" flex-1 mb-7 p-1 form-select block w-2/3px-3 py-1.5 mt-5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"

                    onChange={handleChange}
                >
                    <option value={0}>SELECT YOUR ULB</option>
                    {dataSelect.map((items) => (
                        <option value={items.ulbid}>{items.header}</option>
                    ))}

                </select>


            </div>
        </>
    )
}

export default Selectbox