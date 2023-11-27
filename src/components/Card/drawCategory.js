import React from 'react'
import { Link } from 'react-router-dom'
import { GENDER } from '../../utils/types'

const DrawCategoryCard = ({data}) => {
    
  return (
    <div className='bg-white mt-2 rounded-md p-4'>

        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <img className='h-8' src='../../icons/kimono.png'/>
                <h1 className='text-lg uppercase'>{data.category.name}</h1>
            </div>
            <div>
                {
                    data.category.gender === GENDER.MALE &&
                    <h1 className='font-bold text-blue-600 uppercase'>Эрэгтэй</h1>
                }
                {
                    data.category.gender === GENDER.FEMALE &&
                    <h1 className='font-bold text-pink-600 uppercase'>Эмэгтэй</h1>
                }
            </div>
        </div>

        <div className='mt-2'>
            {data.category.jin.map((item , idx) => {
                return(
                    <div key={idx} className='border-t py-2 flex justify-between items-center'>
                        <h1>{item.kg} кг</h1>
                        <div className='uppercase text-sm flex items-center'>
                            <Link className='mx-2' to={`/comp-play/${data.comp_id}/${item.kg}`}>
                                <img className='h-5 hover:animate-pulse' src='../../icons/play.png'/>
                            </Link>
                            <Link className='mx-2' to={`/comp-jin/${data.comp_id}/${item.kg}`}>Жин үзэх</Link>
                            <Link className='mx-2' to={`/comp-onoolt/${data.comp_id}/${item.kg}`}>Оноолт</Link>
                        </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default DrawCategoryCard