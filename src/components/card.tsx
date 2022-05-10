import CircleIcon from './svg/circle';
import XIcon from './svg/x';

interface props {
  type: string
}

const Card = ({type} :props) => {
  return (
      <div className='w-full lg:max-w-[300px] h-[200px] lg:h-[350px]'>
        <div className='w-full h-full bg-blue-600 rounded-xl flex justify-center items-center'>
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