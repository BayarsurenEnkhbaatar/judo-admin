import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ClubCardMeduuleg = ({data}) => {
  const org = data.organization
  const params = useParams();
  return (
    <div className='border-1 rounded p-2 font-Roboto mt-2 hover:bg-gray-100'>
      <div className='flex items-center justify-between'>
        <h1 className='text-sm uppercase'>{org.name}</h1>
        <Link to={`/dashboard/comp-list/${params.slug}/${org.id}`} className='text-xs bg-blue-800 rounded-md text-white p-1'>
          Багийн мэдүүлэг харах
        </Link>
      </div>
    </div>
  )
}

export default ClubCardMeduuleg