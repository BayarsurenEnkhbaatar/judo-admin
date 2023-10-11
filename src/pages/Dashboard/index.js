import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { AuthContext } from '../../context/auth'

const Home = () => {
  const {currentUser} = useContext(AuthContext);

  if(currentUser){
    return (
      <div className='bg-[#f3f4f5] font-Roboto'>
            <div className='grid xs:grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-1'>

              <div className='grid col-span-1 h-[100vh]'>
                <Sidebar/>
              </div>
              
              <div className='grid xs:col-span-1 md:col-span-3 xl:col-span-5'>
                  <div className='mr-2'>
                    <Header/>
                    <Outlet/>
                  </div>
              </div>

            </div>
      </div>
    )
  }else{
    return <Navigate to='/'/>
  }
}

export default Home