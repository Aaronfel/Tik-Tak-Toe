import React, { useState } from 'react';
import Circle from './svg/circle'
import XIcon from './svg/x';

interface props {
  xName: string
  oName: string 
}

const Game = ({xName, oName}: props) => {

  const [isoturn, setOturn] = useState<boolean>(false)
  const [iconsArray, setIconsArray] = useState<any>([
    {id: 1, icon: null},
    {id: 2, icon: null},
    {id: 3, icon: null},
    {id: 4, icon: null},
    {id: 5, icon: null},
    {id: 6, icon: null},
    {id: 7, icon: null},
    {id: 8, icon: null},
    {id: 9, icon: null},
  ])
  const putIcon = (id: number) => {
    const item = iconsArray.find((item: any) => item.id == id)
    // put the icon in the object
    item.icon = isoturn ?  <Circle/> : <XIcon/>
    setIconsArray([...iconsArray])
    setOturn(!isoturn)
  }

  
  return (
    <>
    <div className='flex justify-center mt-5'>
      <div className='bg-blue-600 text-white p-5 lg:w-[40%] text-center lg:text-xl rounded-full'>
        Tik Tak Toe
      </div>
    </div>

    <div className='flex justify-center mt-5'>
      <div className='bg-red-600 rounded-lg w-[50%] p-[100px] h-[650px] flex justify-center flex-wrap'>
          {iconsArray.map((item: any) => (
            <div key={item.id} className='w-[150px] h-[150px]  border-2 border-white' onClick={() => putIcon(item.id)}>{item.icon}</div>  
          ))}
      </div>
    </div>
    </>
  );
}

export default Game;