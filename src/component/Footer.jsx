import React from 'react'

const Footer = () => {
    const footeritm = ['Popular', 'Arts & Culture', 'Outdoor','Mountains','Beach','Unique stays','Categories','Things to do'];

    const support = ['Help Center','AirCover', 'Anti-discrimination','Disability support','Cancellation options','Report neighbourhood concern'];
    const hosting = ['Airbnb your home','AirCover for Hosts','Hosting resources','Community forum','Hosting responsibly','Join a free Hosting class','Find a co‑host'];
    const airbnb = ['Newsroom','New features','Careers','Investors','Airbnb.org emergency stays'];
    const bottom = ['© 2024 Airbnb, Inc.','· Privacy','· Terms','· Sitemap','· Company details'];
  return (
    <>
        <div className="outer bg-slate-100 h-auto mt-5 px-10 ">
            <div className="inner-first">
                <h3 className='text-black text-xl font-bold pt-12 '>Inspiration for future getaways</h3>
                <div className='border-b-[1px]'>
                    <ul className='flex gap-8 py-6  w-[100%]'>
                        {footeritm.map((items) =>
                            <li className='font-bold text-gray-600 text-sm hover:text-black cursor-pointer'>{items}</li>
                        )}
                    </ul>
                </div>
                <div className='flex w-100 gap-40 border-b-[1px] py-10'>
                    <div>
                        <ul>
                            <li className='font-bold font-sans text-sm pb-2'>Support</li>
                            {support.map((item) => 
                            <li className='py-2 font-sans text-sm font-semibold text-gray-600 cursor-pointer hover:text-black'>{item}
                            </li>)}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold font-sans text-sm pb-2'>Hosting</li>
                            {hosting.map((item) => 
                            <li className='py-2 font-sans text-sm font-semibold text-gray-600 cursor-pointer hover:text-black'>{item}
                            </li>)}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold font-sans text-sm pb-2'>Airbnb</li>
                            {airbnb.map((item) => 
                            <li className='py-2 font-sans text-sm font-semibold text-gray-600 cursor-pointer hover:text-black'>{item}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='inner-2 flex py-5 justify-between'>
                <div className='left'>
                    <ul className='flex gap-5'>
                        {bottom.map((item) => 
                        <li className='text-sm text-black font-sans cursor-pointer hover:font-bold'>{item}</li>
                        )}
                    </ul>
                </div>
                <div className='right flex gap-8 items-center cursor-pointer'>
                    <div className='flex gap-1'>
                    <span class="material-symbols-outlined text-[18px]">language</span><p className='font-bold text-sm text-gray-700'>English (IN)</p>
                    </div>
                    <div className='font-bold text-sm text-gray-700'>₹
                    INR</div>
                    <div className='flex gap-4'>
                        <span><i class="fa-brands fa-facebook-f"></i></span>
                        <span><i class="fa-brands fa-linkedin-in"></i></span>
                        <span><i class="fa-brands fa-twitter"></i></span>
                        <span><i class="fa-brands fa-instagram"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
