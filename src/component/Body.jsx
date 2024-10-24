import React, { useEffect, useState } from 'react'

function Body() {
    const [card, setcard] = useState([])

    const fetchData = async()=>{
        let a = await fetch("https://jsonplaceholder.typicode.com/photos");
        let data = await a.json()
        setcard(data);
    }
    

    useEffect(() => {
        fetchData()
    }, [])
    

  return (
    <>
        <div className='container flex flex-wrap'>
             {card.map((item) =>{
                return(
                    <div key={item.id} className='card w-[23%] shadow-md border p-2 m-2 mx-3'>
                        <h1 className='font-semibold text-center py-1 '>{item.title}</h1>
                        {/* <p>{item.body}</p> */}
                        <img src={item.thumbnailUrl}/>
                        <span>By : UserId : {item.id}</span>

                    </div>
                )
             })}
        </div>
    </>
  )
}

export default Body