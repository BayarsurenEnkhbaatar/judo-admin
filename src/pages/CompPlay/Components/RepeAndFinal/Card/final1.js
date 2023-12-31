import React, { useEffect, useState } from 'react'
import { PATCH } from '../../../../../utils/requests';
import { matches_uri } from '../../../../../utils/url';

const Final1 = ({data, callback}) => {
  
  const handleCallback = () => {
    callback();
  }

  const Submit = async ({winner, lose}) => {
    const datas = {data, winner, lose}
    const res = await PATCH({uri:matches_uri + `/winner-final`, data:datas})
    if(res.status === 200){

    }
    handleCallback();
  }

  return (
    <>
      <div className='border-t border-b border-r p-1 justify-between flex-col xs:w-24 md:w-48 mt-1 font-Roboto xs:text-xs md:text-sm border-yellow-300'>
          <div className='flex justify-between items-center'>
            {
              data?.athlete1_id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center gap-2'>
                <h1>{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
              </div>
            }
            <div onClick={() => Submit({winner:data.athlete1, lose:data.athlete2 })}>
              <img className='h-5 rounded-full bg-gray-200 p-1 hover:bg-gray-300 cursor-pointer' src='../../icons/check.png'/>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            {
              data?.athlete2_id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center gap-2'>
                <h1>{data?.athlete2.lastname.charAt(0)}.{data?.athlete2.username}</h1>
              </div>
            }
            <div onClick={() => Submit({winner:data.athlete2, lose:data.athlete1 })}>
              <img className='h-5 rounded-full bg-gray-200 p-1 hover:bg-gray-300 cursor-pointer' src='../../icons/check.png'/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Final1

