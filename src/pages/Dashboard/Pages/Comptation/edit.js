import { Button, Input, Skeleton, Spinner } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { GET, PATCH } from '../../../../utils/requests';
import { comp_uri } from '../../../../utils/url';

const CompEdit = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [loadedit, setLoadedit] = useState(false);

  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    setLoad(true);
    const res = await GET(comp_uri + `/findId?id=${params.slug}`);
    setData(res.data)
    setLoad(false);
  }

  const Update = async () => {
    setLoadedit(true);
    const res = await PATCH({uri:comp_uri + `-edit`, data: data});
    if(res.status === 200){
        navigate(-1);
        toast.success("Амжилтай шинчиллээ");
        setLoadedit(false);
    }
    setLoadedit(false);
  }

  return (
    <div className='font-Roboto'>
      <div>
        <h1 className='text-3xl font-bold uppercase mt-8'>{data.name} тэмцээнийг шинчлэх</h1>
        <div className='mt-4'>

            <div className='bg-white rounded-md p-4 pb-20'>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <div>
                            <h1 className='text-sm font-bold mt-4'>Тэмцээний нэр</h1>
                            <Input className='mt-1' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>

                            <h1 className='text-sm font-bold mt-4'>Эхлэх өдөр</h1>
                            <Input className='mt-1' value={data.start_date} onChange={(e) => setData({...data, start_date:e.target.value})}/>

                            <h1 className='text-sm font-bold mt-4'>Дуусах өдөр</h1>
                            <Input className='mt-1' value={data.end_date} onChange={(e) => setData({...data, end_date:e.target.value})}/>

                            <h1 className='text-sm font-bold mt-4'>Дэлгэрэнгүй хаяг</h1>
                            <Input className='mt-1' value={data.more_address} onChange={(e) => setData({...data, more_address:e.target.value})}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-sm font-bold mt-4'>Зохион байгуулагч</h1>
                            <Input className='mt-1' value={data.orgenizer} onChange={(e) => setData({...data, orgenizer:e.target.value})}/>

                            <h1 className='text-sm font-bold mt-4'>Мандат үнэ</h1>
                            <Input className='mt-1' value={data.mandat_price} onChange={(e) => setData({...data, mandat_price:e.target.value})}/>

                            <h1 className='text-sm font-bold mt-4'>Зохиогдох аймаг/хот</h1>
                            <Input className='mt-1' value={data.province} onChange={(e) => setData({...data, province:e.target.value})}/>

                            <h1 className='text-sm font-bold mt-4'>Зохиогдох сум/дүүрэг</h1>
                            <Input className='mt-1' value={data.sum} onChange={(e) => setData({...data, sum:e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 justify-end mt-8'>
                    <Button onClick={()=>navigate(-1)} className='bg-gray-300 w-60 mt-2'>Болих</Button>
                    {
                        loadedit?
                        <Button className='bg-green-600 text-white w-60 mt-2'>Шинчилж байна ... <Spinner/></Button>
                        :
                        <Button onClick={Update} className='bg-green-600 text-white w-60 mt-2'>Шинчлэх</Button>
                    }
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CompEdit