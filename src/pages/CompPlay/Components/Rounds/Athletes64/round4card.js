
import React from 'react'
import { toast } from 'react-toastify';
import { PATCH } from '../../../../../utils/requests';
import { matches_uri } from '../../../../../utils/url';

const Round4CardAthlets64 = ({data, callback}) => {

  const handleCallback = () => {
    callback();
  }

  const Submit = async ({el}) => {
    console.log(el);
    const datas = {data, el}
    const res = await PATCH({uri:matches_uri + `/winner`, data:datas})
    handleCallback();
  }
  
  
  return (
    // <div className='border-t border-b border-r p-1 h-full flex justify-between flex-col w-48 mt-1'>
    <div className='border-t border-b border-r p-1 justify-between flex-col w-60 mt-1'>
        <div className='flex justify-between items-center pb-20'>
           <>
            {
              data?.athlete1.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              data?.athlete1.username
            }
           </>
           <div onClick={() => Submit({el:data.athlete1})}>
             <img className='h-5 rounded-full bg-gray-200 p-1 hover:bg-gray-300 cursor-pointer' src='../../icons/check.png'/>
           </div>
        </div>
        <div className='flex justify-between items-center pt-20'>
            <>
              {
                data?.athlete2.id === 111 ?
                <h1 className='text-white'>.</h1>
                :
                data?.athlete2.username
              }
            </>
            <div onClick={() => Submit({el:data.athlete2})}>
             <img className='h-5 rounded-full bg-gray-200 p-1 hover:bg-gray-300 cursor-pointer' src='../../icons/check.png'/>
            </div>
        </div>
    </div>
  )
}

export default Round4CardAthlets64
