import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import Game from './game';

const Selection = () => {

   const [xName, setXName] = useState<string>('')
   const [oName, setOName] = useState<string>('') 

   const xNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setXName(event.target.value);
  };

  const oNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOName(event.target.value);
  };
  return (
    <section className='h-screen overflow-hidden'>
        <div className='flex justify-center mt-5'>
            <div className='bg-black text-white p-5 lg:w-[40%] text-center lg:text-xl rounded-full'>
                Select your weapon
            </div>
        </div>
        <div className='w-full flex justify-center mt-20 space-x-10'>
            <div>
                <Card type='x'/>
                <input type="text" value={xName} className='bg-black w-full mt-2 rounded-l text-white' onChange={xNameHandler} />
            </div>
            <div>
                <Card type='o'/>
                <input type="text" value={oName} className='bg-black w-full mt-2 rounded-l text-white' onChange={oNameHandler}/>
            </div>
        </div>
        <div className='flex justify-center mt-10'>
            <div className='p-3 w-[20%] bg-green-600 rounded-full text-center text-white lg:text-xl'>
                <Link to={'/game'} >
                    Play
                </Link>
            </div>
        </div> 
        <div className='hidden'>
            <Game xName={xName} oName={oName}/>
        </div>
    </section>
       
  );
}

export default Selection;