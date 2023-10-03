import React from 'react'
import { Pagination } from '@nextui-org/react';

const Paginations = ({ total, initialPage, onChange, alldata }) => {
    return (
      <div className='flex justify-end bg-white p-4'>
        <div>
          <Pagination total={total} initialPage={initialPage} onChange={onChange}/>
          <h1 className='text-end mt-2'>Нийт <label className='font-semibold text-lg'>{alldata}</label> трак байна.</h1>
        </div>
      </div>
    )
}

export default Paginations