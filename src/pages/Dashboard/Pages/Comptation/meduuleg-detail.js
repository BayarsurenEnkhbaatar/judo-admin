import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GET } from '../../../../utils/requests';
import { GENDER } from '../../../../utils/types';
import { comp_to_uri, org_uri } from '../../../../utils/url';
import AthleteCardMeduuleg from './Components/Meduuleg/AthleteCardMeduuleg';
import ApproveModal from './Components/Meduuleg/Modal/approve';
import MandatPDF from './Components/Meduuleg/Modal/mandat';
import MeduulegPDF from './Components/Meduuleg/Modal/meduuleg-pdf';

const MeduulegDetail = () => {
    const params = useParams();
    const [data, setData] = useState({male:[], female:[], org:'', comp:{}});

    useEffect(()=>{
      Get();
    }, []);
  
    const Get = async () => {
      const b = await GET(comp_to_uri+ `/${params.slug}`);
      const org = await GET(org_uri+ `/admin/id?org=${params.org}`);
      const male = b.data.category.data.filter((it => it.category.gender === GENDER.MALE));
      const female = b.data.category.data.filter((it => it.category.gender === GENDER.FEMALE));
      setData({...data, male:male, female:female, org:org.data, comp:b.data.category.comp});
    };

    const callback = () =>{
      Get();
    }

  return (
    <div className='font-Roboto'>
        <Link to={`/dashboard/comp-list/${params.slug}`}>{'< Буцах'}</Link>
        <h1 className='text-xl uppercase mb-8 text-center'>{data.org.name} дэлгэрэнгүй мэдүүлэг</h1>
        <div className='flex justify-end items-center gap-2'>
            <ApproveModal callback={callback}/>
            <MandatPDF org={data.org} org={data.org} comp={data.comp}/>
            <MeduulegPDF male={data.male} female={data.female} org={data.org}/>
        </div>
        <div className='mt-2'>
          {
            data.male.map((it, index) => {
              return(
                <div key={index}>
                  <h1 className='font-bold text-sm uppercase mb-2'>эрэгтэй жин</h1>
                  <div className='mt-4 grid md:grid-cols-5 xs:grid-cols-2 sm:grid-cols-4 gap-2'>
                    {
                      it.category.jin.map((item, idx) => {
                        return(
                          <AthleteCardMeduuleg key={idx} data={item} gender={GENDER.MALE}/>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='mt-4'>
          {
            data.female.map((it, index) => {
              return(
                <div key={index}>
                  <h1 className='font-bold text-sm uppercase mb-2'>эмэгтэй жин</h1>
                  <div className='mt-4 grid md:grid-cols-5 xs:grid-cols-4 gap-2'>
                    {
                      it.category.jin.map((item, idx) => {
                        return(
                          <AthleteCardMeduuleg key={idx} data={item} gender={GENDER.FEMALE}/>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default MeduulegDetail
