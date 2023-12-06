import { Skeleton } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DrawCategoryCard from '../../../../components/Card/drawCategory';
import ClubCardMeduuleg from '../../../../components/Meduuleg/ClubCard/clubCard';
import { GET } from '../../../../utils/requests';
import { comp_to_org_uri, comp_to_uri } from '../../../../utils/url';

const DrawComptation = () => {
  const params = useParams();
  const [data, setData] = useState({jin:[], comp:[], orgs:[]});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    Get();
  }, []);

  const Get = async ()=> {
    setLoad(true);
    const res = await GET(comp_to_uri + `/${params.slug}`);
    const ress = await GET(comp_to_org_uri + `/get?comp_id=${params.slug}`);
    setData({...data, jin:res.data.category.data, comp:res.data.category.comp, orgs: ress.data});
    setLoad(false);
  }

  return (
    <div className='font-Roboto'>
      <div>
        <h1 className='text-3xl font-bold uppercase'>{data.comp.name}</h1>
        <h1><span>{data.comp.province}</span> <span>{data.comp.sum}</span></h1>

        <div className='grid grid-cols-3 gap-2'>
          {
            load?
            <div className='grid col-span-2 rounded-md'>
              <Skeleton className='w-full h-[50vh] rounded-md'>
              </Skeleton>
            </div>
            :
            <div className='grid col-span-2'>
              {
                data.jin.map((data, index) => {
                  return(
                    <DrawCategoryCard key={index} data={data}/>
                  )
                })
              }
            </div>
          }
          {
            load?
            <div>
              <Skeleton className='w-full h-[80vh] rounded-md'>
              </Skeleton>
            </div>
          :
            <div className='bg-white rounded p-4 mt-2 mr-2 shadow-lg overflow-y-auto h-[100%]'>
              <h1>Тэмцээнд мэдүүлэг өгсөн байгууллагууд</h1>
              <div>
                {
                  data.orgs.map((it, index) => {
                    return(
                      <ClubCardMeduuleg key={index} data={it}/>
                    )
                  })
                }
              </div>
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default DrawComptation