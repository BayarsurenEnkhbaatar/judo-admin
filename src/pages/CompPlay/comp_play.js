import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GET } from '../../utils/requests';
import { group_uri, matches_uri, repechange_uri } from '../../utils/url';
import Onoolt16 from './Components/Onoolt/16';
import Onoolt32 from './Components/Onoolt/32';
import Onoolt4 from './Components/Onoolt/4';
import Onoolt8 from './Components/Onoolt/8'
import Final from './Components/RepeAndFinal/Final';
import Repechage from './Components/RepeAndFinal/Repechage';

const CompPlay = () => {
    const params = useParams();
    const [athletes, setAthletes] = useState([]);
    const [groups, setGroups] = useState([]);
    const [repefina, setRepe] = useState({final:[], repechage:[]});

    useEffect(() => {
      Get();
    }, []);

    const Get = async () => {
      const res = await GET(matches_uri + `/draw?comp_id=${params.comp}&kg=${params.kg}`);
      const groups = await GET(group_uri+`?comp_id=${params.comp}&kg=${params.kg}`);
      const repeAndFinal = await GET(repechange_uri+`/final?comp_id=${params.comp}&kg=${params.kg}`);
      setRepe({...repefina, final:repeAndFinal.data.final, repechage:repeAndFinal.data.repechage})
      setAthletes(res.data);
      setGroups(groups.data);
    }

    const callback = () => {
      Get();
    }

  return (
    <div className='font-Roboto mx-10 my-4'>
        {
          groups.length === 0 ?
          <div className=' mt-40'>
            <Link to={`/dashboard/comp-list/${params.comp}`}>Буцах</Link>
            <h1 className='text-center text-3xl uppercase font-Roboto'>Оноолт хийгдээгүй байна !</h1>
          </div>
          :
          <div>
            <Link to={`/dashboard/comp-list/${params.comp}`}>Буцах</Link>
            <h1 className='font-bold text-3xl mt-2'>{params.kg} кг мэдээлэл</h1>
            <div>
              <div>
                  {
                    groups.map((it, index) => {
                      return(
                        <div key={index}>
                          {
                            it.group_number === 4 &&
                            <Onoolt4 key={index} data={athletes} group={it.group_name} callback={callback}/>
                          }
                          {
                            it.group_number === 8 &&
                            <Onoolt8 key={index} data={athletes} group={it.group_name} callback={callback}/>
                          }
                          {
                            it.group_number === 16 &&
                            <Onoolt16 key={index} data={athletes} group={it.group_name} callback={callback}/>
                          }
                          {
                            it.group_number === 32 &&
                            <Onoolt32 key={index} data={athletes} group={it.group_name} callback={callback}/>
                          }
                        </div>
                      )
                    })
                  }
              </div>
              <div>
                  <h1 className='text-xl mt-4'>Торгуулын тойрог</h1>
                  <Repechage data={repefina.repechage} callback={callback}/>
                  <h1 className='text-xl mt-4'>Финал</h1>
                  <Final data={repefina.final} callback={callback}/>
              </div>
            </div>
          </div>
        }
    </div>
  )
}

export default CompPlay
