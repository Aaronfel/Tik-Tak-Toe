import React from 'react';
import CircleIcon from './svg/circle';
import XIcon from './svg/x';

interface props {
  type: string
}

const Card = ({type} :props) => {
  return (
      <div>
        <div className='w-[300px] h-[350px] bg-blue-600 rounded-xl flex justify-center items-center'>
          <div>
            {type === 'x' ? 
              <XIcon />
            :
              <CircleIcon />
            }
          </div>
       </div>
      </div>

  );
}

export default Card;