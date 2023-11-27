
import React, { useEffect, useState } from 'react'
import { GET } from '../../../utils/requests';
import { category_uri } from '../../../utils/url';
import CategoryCard from '../../Card/category'
import CategoryAdd from '../../Modals/Categoty'

const Category = () => {
    const [data, setData]= useState([]);

    useEffect(() => {
      Get();
    }, []);

    const Get = async () => {
        const res = await GET(category_uri);
        setData(res.data);
    }

    const callback = () => {
        Get();
    }

  return (
    <div className='mt-2 bg-white rounded-md p-4 shadow-sm'>
        <div>
            <div className='flex items-center justify-between'>
                <h1>Жингийн ангилал</h1>
                <CategoryAdd callback={callback}/>
            </div>
            <div className='mt-4'>
                {
                    data.map((item, index) => {
                        return(
                            <CategoryCard data={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Category