import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GET } from '../../../../../../utils/requests';
import { comp_to_org_uri } from '../../../../../../utils/url';

const PDFAthletesCard = ({data}) => {
    const params= useParams();
    const [athletes, setAthletes] = useState([]);
  
    useEffect(()=>{
      Get();
    }, []);
  
    const Get = async () => {
      const b = await GET(comp_to_org_uri+ `/admin?comp_id=${params.slug}&category_id=${data.category_id}&kg=${data.kg}&org_id=${params.org}`)
      setAthletes(b.data)
    };
  return (
    <td className="whitespace-nowrap px-6 py-1 font-medium border-l ">
        {
            athletes.map((it, index) => {
                return(
                    <div className=" text-xs" key={index}>{it.athlete.lastname.charAt(0)}.{it.athlete.username}</div>
                )
            })
        }
    </td>
  )
}

export default PDFAthletesCard