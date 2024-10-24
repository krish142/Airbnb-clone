import React from 'react'
import CustomizedSwitches from './slider'

const Menu = () => {
  return (
    <div class="flex items-center h-20 shadow-md">
            <div class="flex items-center justify-evenly w-[70%]">
                <div class="flex flex-col gap-2 items-center justify-center cursor-pointer text-gray-500 hover:text-black">
                    <img src= "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" class="h-6 w-6" />
                    <p className='text-xs font-bold'>Farms</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center cursor-pointer text-gray-500 hover:text-black" >
                    <img src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png" class="h-6 w-6" />
                    <p className='text-xs font-bold'>Icons</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center cursor-pointer text-gray-500 hover:text-black">
                    <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" class="h-6 w-6" />
                    <p className='text-xs font-bold'>Cabins</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center cursor-pointer text-gray-500 hover:text-black">
                    <img src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" class="h-6 w-6" />
                    <p className='text-xs font-bold'>Countryside</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center cursor-pointer text-gray-500 hover:text-black">
                    <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" class="h-6 w-6" />
                    <p className='text-xs font-bold'>OMG!</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-centers cursor-pointer text-gray-500 hover:text-black">
                    <img src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg" class="h-6 w-6" />
                    <p className='text-xs font-bold'>Skiing</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center cursor-pointer text-gray-500 hover:text-black">
                    <img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" class="h-6 w-6" />
                    <p className='text-xs font-bold'>Amazing pools</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center cursor-pointer text-gray-500 hover:text-black">
                    <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" class="h-6 w-6" /> 
                    <p className=' text-xs font-bold'>Amazing views</p>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center cursor-pointer text-gray-500 hover:text-black">
                    <img src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg " class="h-6 w-6" />
                    <p className=' text-xs font-bold'>Rooms</p>
                </div>
                <div>
                    <span class="material-symbols-outlined text-[26px] cursor-pointer">expand_circle_right</span>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className="fliter flex items-center shadow-sm border justify-center h-12 w-24 cursor-pointer rounded-lg hover:border-black">
                <i class="fa-solid fa-sliders text-[14px]"></i>
                    <span className='text-[12px] text-black font-bold px-2'>Fliters</span>
                </div>
                <div className="display flex items-center shadow-sm border h-12 rounded-lg cursor-pointer hover:border-black">
                    <span className='text-[12px] px-3 pr-4 font-bold'>Display total before taxes</span>
                    <CustomizedSwitches />
                </div>
            </div>
        </div>
  )
}

export default Menu
