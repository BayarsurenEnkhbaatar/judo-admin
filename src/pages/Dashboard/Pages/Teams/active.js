import React, { useEffect, useState } from 'react'
import {Avatar, Button, Input, Spinner} from '@nextui-org/react'
import {BsFileEarmarkExcel, BsSearch} from 'react-icons/bs'
import Paginations from '../../../../components/Paginations';
import {GET} from '../../../../utils/requests'
import { athlete_uri } from '../../../../utils/url';
import {STATUS} from '../../../../utils/types'
import AthleteModal from '../../../../components/Modals/Teams/approve';

const TeamsActive = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({limit:5, all:'', totalPage:'', status:STATUS.APPROVED, username:''});
  const [page, setPage] = useState(1)

  useEffect(()=>{
    Get();
  }, [page, pagination.username]);

  const Get = async () => {
    setLoad(true)
    const b = await GET(athlete_uri+`/status-at?page=${page}&limit=${pagination.limit}&status=${pagination.status}&username=${pagination.username}`)
    setData(b.data.data);
    setPagination({...pagination, all:b.data.all})
    setPagination({...pagination, totalPage:b.data.totalPage})
    setLoad(false)
  };
  const callback =()=> {
    Get();
  }

  const changePage = (page) => {
    setPage(page)
  };



  return (
    <div>
      <div className="flex flex-col mr-2 mt-2 font-Roboto">
          <div className="overflow-x-auto shadow-md sm:rounded-md">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
              <div className='bg-white p-4'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-lg font-bold'>Хүсэлт явуулсан байгууллагууд</h1>
                  <Button size='sm' className='bg-green-600 text-white'><BsFileEarmarkExcel/> Тайлан татах</Button>
                </div>
                <div className='flex items-center gap-2'>
                  <Input size='sm' className='border rounded-lg mt-2 focus:border-2' placeholder='Хайлт хийх' onChange={(e) => setPagination({...pagination, username:e.target.value})}/>
                  <BsSearch/>
                </div>
              </div>
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4 text-sm font-normal">
                        No
                      </th>
                      <th scope="col" className="p-4 text-sm font-normal">
                        Зураг
                      </th>
                      <th scope="col" className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Овог нэр
                      </th>
                      <th scope="col" className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Төрсөн он сар
                      </th>
                      <th scope="col" className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Хүйс
                      </th>
                      <th scope="col" className="p-4">

                      </th>
                    </tr>
                  </thead>
                  {
                    load?
                    <label className='flex items-center justify-center  p-4'>
                      <Spinner/>
                      <h1 className=''>Уншиж байна ...</h1>
                    </label>
                    :

                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {
                        data.map((item, index) => {
                          return(
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
                                <td className="p-2 w-4">
                                </td>
                                <td className="p-2 w-4">
                                  <Avatar isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                                </td> 
                                <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-col">
                                  <label className=''>{item.lastname}</label>
                                  <label className='font-semibold'>{item.username}</label>
                                </td>
                                <td className="py-2 px-6 text-sm font-medium text-gray-500  dark:text-white text-overflow">{item.birth_date}</td>
                                <td className="py-2 px-6 text-sm font-medium whitespace-nowrap dark:text-white text-blue-700">
                                {item.gender}
                                </td>
                                
                                <td className="py-2 px-6 text-sm font-medium text-right whitespace-nowrap">
                                  <label className='flex items-center justify-end gap-4'>
                                    <AthleteModal data={item} callback={callback}/>
                                  </label>
                                </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  }
                </table>
               {
                  data.length === 0 &&
                  <div className='bg-white pt-8 text-center flex items-center justify-center flex-col'>
                    <img className='h-24' src='../../../icons/empty-box.png'/>
                    <h1 className=''>Хоосон байна...</h1>
                  </div>
                }
               <Paginations initialPage={1} total={pagination.totalPage} alldata={pagination.all} onChange={changePage}/> 
               {/* onChange={changePage} */}
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default TeamsActive