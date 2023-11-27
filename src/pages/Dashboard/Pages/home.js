import React from 'react'
import Header from '../../../components/Header'
import Category from '../../../components/Home/Category'

const Dashboard = () => {
  return (
    <div className='my-2 mr-2'>
      <div className='grid grid-cols-2'>
        <Category/>
      </div>
    </div>
  )
}

export default Dashboard