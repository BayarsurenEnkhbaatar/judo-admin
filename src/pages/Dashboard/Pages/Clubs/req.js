import React, { useState } from 'react'
import {Avatar, Button, Input, Spinner} from '@nextui-org/react'
import {BsFileEarmarkExcel, BsSearch} from 'react-icons/bs'
import Paginations from '../../../../components/Paginations';
import AthleteModal from '../../../../components/Modals/Teams/athlete';

const ClubLists = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      
      <div className="flex flex-col mr-2 mt-2 font-Roboto">
          <div className="overflow-x-auto shadow-md sm:rounded-md">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
              <div className='bg-white p-4'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-lg font-bold'>Хүсэлт явуулсан тамирчид</h1>
                  <Button size='sm' className='bg-green-600 text-white'><BsFileEarmarkExcel/> Тайлан татах</Button>
                </div>
                <div className='flex items-center gap-2'>
                  <Input size='sm' className='border rounded-lg mt-2 focus:border-2' placeholder='Хайлт хийх'/>
                  <BsSearch/>
                </div>
              </div>
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="p-4 text-sm font-normal">
                        No
                      </th>
                      <th scope="col" className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Овог нэр
                      </th>
                      <th scope="col" className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Төрсөн он
                      </th>
                      <th scope="col" className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Хүсэлтийн Огноо
                      </th>
                      <th scope="col" className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Дэвжээ
                      </th>
                      <th scope="col" className="p-4">

                      </th>
                    </tr>
                  </thead>
                  {
                    load?
                    <div className='flex items-center justify-center  p-4'>
                      <Spinner/>
                      <h1 className=''>Уншиж байна ...</h1>
                    </div>
                    :

                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td className="p-2 w-4">
                              <Avatar isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                              </td>
                              <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='font-semibold'>Энхбаатар</div>
                                <div>Баярсүрэн</div>
                              </td>
                              <td className="py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">2022-10-12</td>
                              <td className="py-2 px-6 text-sm font-medium whitespace-nowrap dark:text-white text-blue-700">
                                2023-10-10
                              </td>
                              <td className="py-2 px-6 text-sm text-left whitespace-nowrap text-green-700 font-semibold">
                                Ханьгард клуб
                              </td>
                              <td className="py-2 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <div className='flex items-center justify-end'>
                                  <AthleteModal/>
                                </div>
                              </td>
                          </tr>
                    </tbody>

                  }
                </table>
               {/* {
                  prod.length === 0 &&
                  <div className='bg-white text-center flex items-center justify-center'>
                    <img className='h-24' src='./gif/empty.webp'/>
                    <h1>Хоосон байна.</h1>
                  </div>
                } */}
               <Paginations initialPage={1} total={4} alldata={4} /> 
               {/* onChange={changePage} */}
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default ClubLists