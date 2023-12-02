
import React from 'react'
import { toast } from 'react-toastify';
import { PATCH } from '../../../../../utils/requests';
import { matches_uri } from '../../../../../utils/url';

const Round5CardAthlets64 = ({data, callback}) => {

  const handleCallback = () => {
    callback();
  }

  const Submit = async ({winner, lose, aths}) => {
    const datas = {data, winner, lose, aths}
    const winnerdata = {data, el:winner}
    const res = await PATCH({uri:matches_uri + `/repechage/update`, data:datas})
    const reswinner = await PATCH({uri:matches_uri + `/winner`, data:winnerdata})
    // && reswinner.status === 200
    if(res.status === 200 && reswinner.status === 200){
      toast.success("Амжилттай")
      handleCallback();
    }else{
      toast.error("Алдаа гарлаа")
      handleCallback();
    }

  }
  
  
  return (
    <div className='border-t border-b border-r p-1 h-full flex justify-between flex-col w-48 mt-1'>
        <div className='flex justify-between items-center'>
           <>
            {
              data?.athlete1.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              data?.athlete1.username
            }
           </>
           <div onClick={() => Submit({winner:data.athlete1, lose:data.athlete2 , aths:32})}>
             <img className='h-5 rounded-full bg-gray-200 p-1 hover:bg-gray-300 cursor-pointer' src='../../icons/check.png'/>
           </div>
        </div>
        <div className='flex justify-between items-center'>
            <>
              {
                data?.athlete2.id === 111 ?
                <h1 className='text-white'>.</h1>
                :
                data?.athlete2.username
              }
            </>
            <div onClick={() => Submit({winner:data.athlete2, lose:data.athlete1, aths:32})}>
             <img className='h-5 rounded-full bg-gray-200 p-1 hover:bg-gray-300 cursor-pointer' src='../../icons/check.png'/>
            </div>
        </div>
    </div>
  )
}

export default Round5CardAthlets64
