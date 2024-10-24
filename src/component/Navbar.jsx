import React from "react"
import logo from './images/airbnb-logo.png'



const Navbar = () => {
  return (
    <>
    <div class="grid grid-cols-3 px-14 items-center border-b-[1px] h-20">
            <img src ={logo} alt="airbnb-logo" class="h-16 w-28" />
            <div class="flex justify-evenly items-center border rounded-full shadow-md h-12 w-96">
                <button class="border-r-2 text-sm font-medium px-4">Anywhere</button>
                <button class="border-r-2 text-sm font-medium px-4">Any week</button>
                <button class="text-sm font-medium text-gray-500 px-4">Add guests </button>
                <i class="fa-solid fa-magnifying-glass text-[12px] bg-red-500 text-white rounded-full p-2"></i>
            </div>
            <div class="flex justify-end items-center gap-8">
                <button class="text-sm font-medium">Airbnb your home</button>
                <span class="material-symbols-outlined text-[18px]">language</span>
                <div class="flex justify-evenly items-center gap-2 rounded-full border shadow-sm h-10 w-20 py-1.25 pr-1.25 pl-3">
                    <i class="fa-solid fa-bars text-[14px]"></i>
                    <button class="bg-black text-white rounded-full text-center w-7 h-7 text-[12px]">E</button>
                </div>
            </div>
        </div>

        </>
  )
}

export default Navbar
