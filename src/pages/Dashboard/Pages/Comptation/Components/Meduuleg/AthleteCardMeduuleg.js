import React, { useEffect, useState } from 'react'
import AddModal from './Modal/add'
import MinusModal from './Modal/minus'
import { GENDER } from '../../../../../../utils/types'
import { GET } from '../../../../../../utils/requests'
import { comp_to_org_uri } from '../../../../../../utils/url'
import { useParams } from 'react-router-dom'
//category id kg org_id comp_id
const AthleteCardMeduuleg = ({data, gender}) => {
  const params= useParams();
  const [athletes, setAthletes] = useState([]);

  useEffect(()=>{
    Get();
  }, []);

  const Get = async () => {
    const b = await GET(comp_to_org_uri+ `/admin?comp_id=${params.slug}&category_id=${data.category_id}&kg=${data.kg}&org_id=${params.org}`)
    setAthletes(b.data)
  };

  return (
    <div className='font-Roboto '>

        <div className='bg-white rounded-md shadow-sm '>
            <h1 className={gender===GENDER.FEMALE ? `bg-pink-600 text-white rounded-t-md p-1`: `bg-yellow-600 text-white rounded-t-md p-1`}>{data.kg} кг</h1>
            {
              athletes.map((it, index) => {
                return(
                  <div className='flex items-center justify-between p-2 border-b-1 hover:bg-gray-200' key={index}>
                      <h1 className='text-sm'>{it.athlete.lastname.charAt(0)}. {it.athlete.username}</h1>
                      <div className='flex items-center gap-1'>
                          <MinusModal/>
                          <AddModal/>
                      </div>
                  </div>
                )
              })
            }
            {
              athletes.length === 0 &&
              <div className='p-2'>
                <h1 className='text-xs'>Тамирчин бүртгүүлээгүй байна</h1>
              </div>
            }
        </div>
        
    </div>
  )
}

export default AthleteCardMeduuleg