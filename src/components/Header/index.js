import React from 'react'
import {Avatar, Badge} from '@nextui-org/react'
import {MdNotifications} from 'react-icons/md'

const Header = () => {
  return (
    <div className='bg-white rounded-lg p-4 shadow-lg font-Roboto my-2 w-full'>
        <div className='flex justify-between'>
            <div className='flex gap-4 items-center'>
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm"/>
                <div>
                    <h1 className='text-sm font-bold'>Bolor Erdenebat</h1>
                    <p className='text-xs'>Manager</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Badge content="5" color="primary">
                    <MdNotifications color='gray' size={20}/>
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default Header