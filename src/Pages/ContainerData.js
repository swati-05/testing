import React from 'react'
import { useState } from 'react'
import Firmdetail from './Firmdetail'
import NewLicense from './NewLicense'
import axios from 'axios'

function ContainerData() {

  const [firmType, setfirmType] = useState("")
  const [firmName, setfirmName] = useState("")
  const [holdingNo, setholdingNo] = useState("")
  const [wardNo, setwardNo] = useState("")
  const [estbDate, setestbDate] = useState("")

  
  

  return (
    <>
   <NewLicense />
   <Firmdetail />
   {/* <div class="justify center">
    <button class="bg-sky-500 font-bold w-28 h-8 p-2" >Save</button>
    <button class="bg-green-500 font-bold w-28 h-8 p-2" >Verify</button>
   </div> */}
    </>
  )
}

export default ContainerData