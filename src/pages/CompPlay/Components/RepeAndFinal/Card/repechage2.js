import React, { useEffect, useState } from 'react'
import { PATCH } from '../../../../../utils/requests';
import { matches_uri } from '../../../../../utils/url';

const Repechage2 = ({data}) => {
  return (
    <div className='pt-6 flex flex-col'>
      <div className='border-b xs:w-20 md:w-40 border-amber-700'>
        {
          data?.athlete1_id === 111 ?
          <h1 className='text-white'>.</h1>
          :
          <div className='flex items-center gap-2'>
            <h1>{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
          </div>
        }
      </div>
      <h1 className='font-Roboto text-[10px] font-bold'>Хүрэл медаль</h1>
    </div>
  )
}

export default Repechage2

