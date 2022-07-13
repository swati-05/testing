import React from 'react'

function SelectCustom() {
  return (
    <div>
             <div class="flex ml-80">

                    <span class="flex-shrink-0 items-center py-2.5 px-4 text-center font-bold w-28  text-emerald-700 text-xl border border-green-300 tracking-wider" >
                        <h1>JUIDCO</h1>
                    </span>
                    <label for="states" class="sr-only">Choose ulb</label>
                    <select id="states" class="border border-gray-300 text-gray-800 text-sm    w-48">
                        <option selected >Choose ULB</option>
                        <option value="CA">Adityapur Municipal Corporation</option>
                        <option value="TX">Barharwa Nagar Panchayat</option>
                        <option value="WH">Basukinath Nagar Panchayat</option>
                        <option value="FL">Bishrampur Nagar Parishad</option>
                        {/* <option value="VG">Virginia</option>
        <option value="GE">Georgia</option>
        <option value="MI">Michigan</option> */}
                    </select>
                </div> 
    </div>
  )
}

export default SelectCustom