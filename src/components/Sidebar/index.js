import React, { useMemo } from 'react'
import {Accordion, AccordionItem, Button} from '@nextui-org/react'
import {RxDashboard} from 'react-icons/rx'
import {FiArrowLeft, FiLogOut} from 'react-icons/fi'
import {BsPeopleFill} from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import {HiHome} from 'react-icons/hi'

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const teams = useMemo(() => [
      {
          icon: HiHome,
          label:'Хүсэлт явуулсан',
          activate: pathname === '/dashboard/teams-req',
          href: '/dashboard/teams-req'
      },
      {
          icon: HiHome,
          label:'Баталгаажсан',
          activate: pathname === '/dashboard/teams-active',
          href: '/dashboard/teams-active'
      },
      
  ], [pathname]);

  const comptation = useMemo(() => [
    {
        icon: HiHome,
        label:'Жагсаалт',
        activate: pathname === '/dashboard/comp-list',
        href: '/dashboard/comp-list'
    },
    {
        icon: HiHome,
        label:'Календар',
        activate: pathname === '/dashboard/comp-calendar',
        href: '/dashboard/comp-calendar'
    },
    
], [pathname]);

const clubs = useMemo(() => [
  {
      icon: HiHome,
      label:'Хүсэлтүүд',
      activate: pathname === '/dashboard/club-list/requested',
      href: '/dashboard/club-list/requested'
  },
  {
    icon: HiHome,
    label:'Баталгаажсан',
    activate: pathname === '/dashboard/club-list/approved',
    href: '/dashboard/club-list/approved'
},
  
], [pathname]);

const admins = useMemo(() => [
  {
      icon: HiHome,
      label:'Админууд',
      activate: pathname === '/dashboard/admins',
      href: '/dashboard/admins'
  },
  
], [pathname]);

  return (
    <div className='bg-white rounded-lg m-2 shadow-lg font-Roboto  h-full'>
      <div>
        <div className='flex items-center p-2 justify-between hover:bg-gray-200 hover:rounded-t-md cursor-pointer'>
         <Link to="/dashboard" className='flex items-center gap-4'>
            <img className='rounded-lg h-14' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0ZYfGItYkIMoQEaP7W01j-Fcc08tXoSmDHE8yLlFlw&s'/>
            <div>
              <h1 className='font-semibold text-sm'>DOJO.MN</h1>
              <p className='text-xs'>Монголын жүдо бөхийн холбоо</p>
            </div>
         </Link>
          <FiArrowLeft/>
        </div>
        <div className='mx-4 mt-8'>
          <h1 className='text-gray-600 mb-4'>Menu</h1>
          <Link to="/dashboard" className={pathname === "/dashboard" ? 'flex items-center gap-4 bg-blue-700 text-white rounded-lg p-2 pl-4 cursor-pointer hover:bg-blue-600':
          'flex mt-1 items-center gap-4 pl-4 p-2 rounded-lg hover:bg-gray-200 cursor-pointer'}>
            <RxDashboard size={20}/>
            <h1 className='text-sm'>Нүүр хуудас</h1>
          </Link>

          <Accordion className=' rounded-lg text-sm mt-1' isCompact>
            <AccordionItem title="Тамирчид" className=''>
              {
                teams.map((data, index) => {
                  return(
                    <Link key={index} to={data.href} className={data.activate ? 'flex items-center gap-4 pl-4 bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-lg cursor-pointer mt-1'
                    : 'flex mt-1 items-center gap-4 pl-4 p-2 rounded-lg hover:bg-gray-200 cursor-pointer'}>
                      <BsPeopleFill/>
                      <h1 className=''>{data.label}</h1>
                    </Link>
                  )
                })
              }
            </AccordionItem>
          </Accordion>

          <Accordion className=' rounded-lg text-sm mt-1' isCompact>
            <AccordionItem title="Тэмцээн" className=''>
              {
                comptation.map((data, index) => {
                  return(
                    <Link key={index} to={data.href} className={data.activate ? 'flex items-center gap-4 pl-4 bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-lg cursor-pointer mt-1'
                    : 'flex mt-1 items-center gap-4 pl-4 p-2 rounded-lg hover:bg-gray-200 cursor-pointer'}>
                      <BsPeopleFill/>
                      <h1 className=''>{data.label}</h1>
                    </Link>
                  )
                })
              }
            </AccordionItem>
          </Accordion>

          <Accordion className=' rounded-lg text-sm mt-1' isCompact>
            <AccordionItem title="Байгууллагууд" className=''>
              {
                clubs.map((data, index) => {
                  return(
                    <Link key={index} to={data.href} className={data.activate ? 'flex items-center gap-4 pl-4 bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-lg cursor-pointer mt-1'
                    : 'flex mt-1 items-center gap-4 pl-4 p-2 rounded-lg hover:bg-gray-200 cursor-pointer'}>
                      <BsPeopleFill/>
                      <h1 className=''>{data.label}</h1>
                    </Link>
                  )
                })
              }
            </AccordionItem>
          </Accordion>

          <Accordion className=' rounded-lg text-sm mt-1' isCompact>
            <AccordionItem title="Админ" className=''>
              {
                admins.map((data, index) => {
                  return(
                    <Link key={index} to={data.href} className={data.activate ? 'flex items-center gap-4 pl-4 bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-lg cursor-pointer mt-1'
                    : 'flex mt-1 items-center gap-4 pl-4 p-2 rounded-lg hover:bg-gray-200 cursor-pointer'}>
                      <BsPeopleFill/>
                      <h1 className=''>{data.label}</h1>
                    </Link>
                  )
                })
              }
            </AccordionItem>
          </Accordion>

        </div>
        <div className='mx-4 mt-40 absolute z-20 bottom-10 w-52'>
          <Link to="/" className='flex items-center gap-4 bg-gray-200 rounded-lg p-2 pl-4 cursor-pointer hover:bg-gray-300'>
            <FiLogOut size={20}/>
            <h1 className='text-sm'>Гарах</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

