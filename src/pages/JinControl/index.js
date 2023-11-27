import React, { useEffect, useState } from 'react';
import {Input} from 'antd';
import JinControlCard from './Components/jin-control-card';
import {useNavigate, useParams} from 'react-router-dom';
import { GET } from '../../utils/requests';
import { athlete_to_comptation_uri } from '../../utils/url';
import { STATUS } from '../../utils/types';

const JinControl = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const Get = async()=> {
    try{
      const res = await GET(athlete_to_comptation_uri+`s?comp_id=${params.comp}&kg=${params.kg}&status=${STATUS.PENDING}&username=${search}`)
      setData(res.data)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    Get();
  }, [search]);

  const callback = () => {
    Get();
    setSearch('');
  }

  return (
    <div className='grid grid-cols-4 justify-center font-Roboto h-full'>
      <div></div>

      <div className='bg-gray-100 grid col-span-2 h-full border'>
        <div>
          <div className='bg-blue-600 py-6 text-white'>
          <h1 onClick={()=> navigate(-1)} className='cursor-pointer ml-4'>Буцах</h1>
            <h1 className='text-lg font-bold text-center uppercase'>Жингийн контрол хийх</h1>
            <h1 className='text-4xl font-bold text-center'>Боржин цом 2023</h1>
            <h1 className='text-4xl font-bold text-center'>{params.kg} кг</h1>
          </div>
          <div className='p-4'>
            <Input className='p-2' size='large' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Тамирчин хайх'/>
          </div>
          <div className='p-4'>
            <h1>Тамирчдын жагсаалт</h1>
            {
              data.map((item, index) => {
                return(
                  <JinControlCard key={index} data={item} callback={callback}/>
                )
              })
            }
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default JinControl