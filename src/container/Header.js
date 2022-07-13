import React from 'react'
import TradeLogin from '../Pages/TradeLogin'
import TradeSingUp from '../Pages/TradeSingUp'
function Header() {



  return (
    <div className='flex w-full '>
      <nav className='bg-sky-800 w-full' >
        <div class="inline-flex ">
          <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ">
            <TradeLogin />
          </button>
          <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ">
            <TradeSingUp />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header