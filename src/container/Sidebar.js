function Sidebar() {
  return (
    <>
      <div class="w-96 h-full shadow-md bg-sky-100 px-1 absolute ">
        <label class='text-black drop-shadow-md ml-4'>
          झारखंड अर्बन इंफ्रास्ट्रक्चर डेवलपमेंट कंपनी
        </label>
        <div className="flex items-center">
          <div className="flex-initial"><img src='https://i0.wp.com/jharkhandblogs.in/wp-content/uploads/2020/07/jharkhand-new-logo.png' class='h-24 w-24 ml-7' /></div>
          <div className="flex-initial ml-10"><h1 class='text-3xl font-bold text-green-500'>JUIDCO</h1></div>

        </div>

        {/* <img src='https://smartranchi.jharkhand.gov.in/hrms2/public/img/front/logo.png'  class='h-20 w-20 ml-8  '/> */}

        <label class='text-md  text-black drop-shadow-md ml-7' >
          Jharkhand Urban Infrastructure<br/> Development Company
        </label>
      </div>
      <div>

      </div>
    </>
  )
}

export default Sidebar