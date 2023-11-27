import React from 'react'
import { Button } from '@nextui-org/react'
import { ATTYPES, GENDER } from '../../utils/types'
import Categotydetail from '../Modals/Categoty/detail'

const CategoryCard = ({data}) => {
  return (
    <div className='border-t flex justify-between flex-wrap items-center py-4'>
        <div className='flex items-center gap-1'>
            <img className='h-8' src='../../icons/kimono.png'/>
            <div>
                {
                  data.type === ATTYPES.JUNIOR &&
                  <h1 className='uppercase text-xs'>Өсвөр үе</h1>
                }
                {
                  data.type === ATTYPES.CADET &&
                  <h1 className='uppercase text-xs'>Залуучууд</h1>
                }
                {
                  data.type === ATTYPES.SENIOR &&
                  <h1 className='uppercase text-xs'>Насанд хүрэгчид</h1>
                }
                {
                  data.gender === GENDER.FEMALE &&
                  <h1 className='uppercase text-xs text-pink-600 font-bold'>Эмэгтэй</h1>
                }
                {
                  data.gender === GENDER.MALE &&
                  <h1 className='uppercase text-xs text-blue-600 font-bold'>Эрэгтэй</h1>
                }
                
            </div>
        </div>
        <h1 className='font-bold text-gray-600'>{data.name}</h1>
        <Categotydetail data={data}/>
    </div>
  )
}

export default CategoryCard