import React from 'react'

const MandatCard = ({data, org, comp}) => {
  return (
        <div className='border-2 border-blue-700 font-Roboto w-[105mm] h-[148mm] bg-mandat bg-cover'>
            <div className='bg-blue-600 text-white py-6'>
                <h1 className='text-center uppercase text-xs'>Монголын жүдо бөхийн холбоо</h1>
                <h1 className='text-center uppercase text-2xl'>{comp.name} МАНДАТ</h1>
            </div>
            <div className=''>
                <div className='flex justify-center gap-2 mt-4'>
                    <img className='h-20' src='../../../icons/judo.jpg'/>
                    <img className='h-20' src='../../../icons/gov.svg'/>
                    <img className='h-20' src='../../../icons/ijf.png'/>
                </div>
                <div className='flex justify-center mt-4'>
                    <div className='bg-gray-200 h-[4cm] w-[3cm]'></div>
                </div>
                <div className='flex justify-center py-4 '>
                    <div className='w-full px-10'>
                        <h1 className=''><span className='font-bold text-sm'>Тамирчины овог нэр :</span> <span className='font-ligth text-xs uppercase'>{data.athlete.lastname.charAt(0)} {data.athlete.username}</span></h1>
                        <h1 className='text-wrap'><span className='font-bold text-sm'>Байгууллага :</span> <span className='font-ligth text-xs text-wrap'>{org.name}</span></h1>
                        <h1 className='text-wrap'><span className='font-bold text-sm'>Жин :</span> <span className='font-ligth text-xs text-wrap'>{data.kg} кг</span></h1>
                    </div>
                </div>
                <div className=''>
                    <h1 className='font-bold text-center text-sm'>Dojo.mn</h1>
                    <h1 className='text-center font-bold'>2023 он</h1>
                </div>
            </div>
        </div>
  )
}

export default MandatCard
